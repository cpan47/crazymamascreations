// CMS Loader for Crazy Mamas Creations
// This script fetches products from either Airtable or Google Sheets

// Debug logging helper
function debugLog(...args) {
    if (typeof DEBUG_MODE !== 'undefined' && DEBUG_MODE) {
        console.log('[CMS Loader]', ...args);
    }
}

// ===== CACHE MANAGEMENT =====
const CACHE_KEY = 'crazymamas_products_cache';
const CACHE_TIMESTAMP_KEY = 'crazymamas_products_cache_timestamp';

function getCachedProducts() {
    try {
        const cached = localStorage.getItem(CACHE_KEY);
        const timestamp = localStorage.getItem(CACHE_TIMESTAMP_KEY);

        if (!cached || !timestamp) {
            debugLog('No cached products found');
            return null;
        }

        const age = Date.now() - parseInt(timestamp);
        const maxAge = typeof CACHE_DURATION !== 'undefined' ? CACHE_DURATION : 300000;

        if (age > maxAge) {
            debugLog('Cache expired (age:', age, 'ms)');
            localStorage.removeItem(CACHE_KEY);
            localStorage.removeItem(CACHE_TIMESTAMP_KEY);
            return null;
        }

        debugLog('Using cached products (age:', age, 'ms)');
        return JSON.parse(cached);
    } catch (error) {
        console.error('Error reading cache:', error);
        return null;
    }
}

function setCachedProducts(products) {
    try {
        localStorage.setItem(CACHE_KEY, JSON.stringify(products));
        localStorage.setItem(CACHE_TIMESTAMP_KEY, Date.now().toString());
        debugLog('Products cached successfully');
    } catch (error) {
        console.error('Error setting cache:', error);
    }
}

// ===== AIRTABLE FETCHER =====
async function fetchFromAirtable() {
    debugLog('Fetching products from Airtable via Netlify Function...');

    // Call Netlify Function instead of directly calling Airtable
    // This keeps API credentials secure on the server
    const functionUrl = '/.netlify/functions/get-products';

    const response = await fetch(functionUrl);

    if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `Function error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();

    if (!data.success || !data.products) {
        throw new Error('Invalid response from Netlify Function');
    }

    debugLog('Received', data.count, 'products from Airtable');

    // Products are already in the correct format from the function
    return data.products;
}

// ===== GOOGLE SHEETS FETCHER =====
async function fetchFromGoogleSheets() {
    debugLog('Fetching products from Google Sheets...');

    const config = typeof SHEETS_CONFIG !== 'undefined' ? SHEETS_CONFIG : {};

    if (!config.apiKey || !config.sheetId || !config.range) {
        throw new Error('Google Sheets configuration is incomplete. Please check cms-config.js');
    }

    const url = `https://sheets.googleapis.com/v4/spreadsheets/${config.sheetId}/values/${config.range}?key=${config.apiKey}`;

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`Google Sheets API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    debugLog('Received', data.values.length - 1, 'products from Google Sheets');

    // Transform Google Sheets rows to our product format
    // Expected columns: Title, Description, ImagePath, Category, Price, InStock, Featured
    const rows = data.values;
    const headers = rows[0]; // First row is headers

    return rows.slice(1).map(row => {
        // Map columns by header name
        const getColumn = (name) => {
            const index = headers.indexOf(name);
            return index >= 0 ? row[index] : '';
        };

        const imagePath = getColumn('ImagePath');

        return {
            img: imagePath ? `Photos/${imagePath}` : 'Photos/placeholder.jpg',
            title: getColumn('Title') || 'Untitled Product',
            description: getColumn('Description') || '',
            category: (getColumn('Category') || 'classic-rock').toLowerCase(),
            price: parseInt(getColumn('Price')) || 85,
            inStock: getColumn('InStock').toUpperCase() === 'TRUE',
            featured: getColumn('Featured').toUpperCase() === 'TRUE'
        };
    });
}

// ===== MAIN LOADER FUNCTION =====
async function loadProducts() {
    debugLog('Loading products...');

    // Try to get from cache first
    const cached = getCachedProducts();
    if (cached && Array.isArray(cached) && cached.length > 0) {
        return cached;
    }

    // Determine which source to use
    const source = typeof CMS_SOURCE !== 'undefined' ? CMS_SOURCE : 'airtable';
    debugLog('Using data source:', source);

    try {
        let products;

        if (source === 'airtable') {
            products = await fetchFromAirtable();
        } else if (source === 'sheets') {
            products = await fetchFromGoogleSheets();
        } else {
            throw new Error(`Unknown CMS source: ${source}`);
        }

        // Cache the results
        setCachedProducts(products);

        debugLog('Successfully loaded', products.length, 'products');
        return products;

    } catch (error) {
        console.error('Error loading products from CMS:', error);

        // Try fallback source
        const fallbackSource = source === 'airtable' ? 'sheets' : 'airtable';
        console.warn(`Attempting fallback to ${fallbackSource}...`);

        try {
            let fallbackProducts;
            if (fallbackSource === 'airtable') {
                fallbackProducts = await fetchFromAirtable();
            } else {
                fallbackProducts = await fetchFromGoogleSheets();
            }

            setCachedProducts(fallbackProducts);
            console.log(`Successfully loaded from fallback source (${fallbackSource})`);
            return fallbackProducts;

        } catch (fallbackError) {
            console.error('Fallback also failed:', fallbackError);

            // Return empty array so site doesn't break
            console.warn('Using empty product array as last resort');
            return [];
        }
    }
}

// Clear cache function (can be called manually if needed)
function clearProductCache() {
    localStorage.removeItem(CACHE_KEY);
    localStorage.removeItem(CACHE_TIMESTAMP_KEY);
    debugLog('Product cache cleared');
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    // Node.js environment
    module.exports = {
        loadProducts,
        clearProductCache
    };
} else {
    // Browser environment - make functions globally available
    window.loadProducts = loadProducts;
    window.clearProductCache = clearProductCache;
}
