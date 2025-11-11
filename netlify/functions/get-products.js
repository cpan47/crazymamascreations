// Netlify Function to fetch products from Airtable
// This keeps API credentials secure on the server side

exports.handler = async function(event, context) {
    // CORS headers for browser requests
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
        'Content-Type': 'application/json'
    };

    // Handle preflight OPTIONS request
    if (event.httpMethod === 'OPTIONS') {
        return {
            statusCode: 200,
            headers,
            body: ''
        };
    }

    // Only allow GET requests
    if (event.httpMethod !== 'GET') {
        return {
            statusCode: 405,
            headers,
            body: JSON.stringify({ error: 'Method not allowed' })
        };
    }

    try {
        // Get credentials from Netlify Environment Variables
        const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY;
        const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID;
        const AIRTABLE_TABLE_NAME = process.env.AIRTABLE_TABLE_NAME || 'Products';

        // Validate environment variables
        if (!AIRTABLE_API_KEY || !AIRTABLE_BASE_ID) {
            console.error('Missing environment variables');
            return {
                statusCode: 500,
                headers,
                body: JSON.stringify({
                    error: 'Server configuration error',
                    message: 'Airtable credentials not configured'
                })
            };
        }

        // Build Airtable API URL
        const url = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${encodeURIComponent(AIRTABLE_TABLE_NAME)}`;

        // Fetch from Airtable
        const response = await fetch(url, {
            headers: {
                'Authorization': `Bearer ${AIRTABLE_API_KEY}`
            }
        });

        if (!response.ok) {
            throw new Error(`Airtable API error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();

        // Transform Airtable records to website format
        const products = data.records.map(record => {
            const fields = record.fields;

            // Get image URL from Airtable attachment or use Photos folder path
            let imagePath;
            if (fields.Image && fields.Image.length > 0) {
                // Use Airtable hosted image
                imagePath = fields.Image[0].url;
            } else if (fields.ImagePath) {
                // Use Photos folder
                imagePath = `Photos/${fields.ImagePath}`;
            } else {
                imagePath = 'Photos/placeholder.jpg'; // Fallback
            }

            return {
                img: imagePath,
                title: fields.Title || 'Untitled Product',
                description: fields.Description || '',
                category: (fields.Category || 'classic-rock').toLowerCase(),
                price: fields.Price || 85,
                inStock: fields.InStock === true,
                featured: fields.Featured === true
            };
        });

        // Return products
        return {
            statusCode: 200,
            headers,
            body: JSON.stringify({
                success: true,
                count: products.length,
                products: products
            })
        };

    } catch (error) {
        console.error('Error fetching products:', error);

        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({
                error: 'Failed to fetch products',
                message: error.message
            })
        };
    }
};
