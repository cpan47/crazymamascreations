// CMS Configuration for Crazy Mamas Creations
// This file contains the configuration for both Airtable and Google Sheets

// ===== CHOOSE YOUR DATA SOURCE =====
// Set this to 'airtable' or 'sheets' depending on which system you want to use
const CMS_SOURCE = 'airtable'; // Options: 'airtable' or 'sheets'

// ===== AIRTABLE CONFIGURATION =====
// To get these values, follow the guide in CMS-SETUP-GUIDE.md
const AIRTABLE_CONFIG = {
    // Get your Personal Access Token from: https://airtable.com/create/tokens
    apiKey: 'YOUR_AIRTABLE_PERSONAL_ACCESS_TOKEN_HERE',

    // Get your Base ID from the Airtable API docs: https://airtable.com/api
    // It starts with "app" (e.g., "appXXXXXXXXXXXXXX")
    baseId: 'YOUR_AIRTABLE_BASE_ID_HERE',

    // The name of your products table (usually "Products")
    tableName: 'Products',

    // Optional: View name if you want to filter products (leave empty for all records)
    viewName: '', // e.g., 'Published Products' or leave empty for all
};

// ===== GOOGLE SHEETS CONFIGURATION =====
// To get these values, follow the guide in CMS-SETUP-GUIDE.md
const SHEETS_CONFIG = {
    // Get your API key from: https://console.cloud.google.com
    apiKey: 'YOUR_GOOGLE_SHEETS_API_KEY_HERE',

    // Get your Sheet ID from the URL of your Google Sheet
    // Example URL: https://docs.google.com/spreadsheets/d/SHEET_ID_HERE/edit
    sheetId: 'YOUR_GOOGLE_SHEET_ID_HERE',

    // The range of cells to fetch (usually 'Sheet1!A:H' for columns A through H)
    range: 'Sheet1!A:H',
};

// ===== ADVANCED SETTINGS =====
// Cache duration in milliseconds (default: 5 minutes)
// Set to 0 to disable caching (products will fetch every page load)
const CACHE_DURATION = 300000; // 5 minutes = 300000 ms

// Enable debug logging to browser console
const DEBUG_MODE = false;

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        CMS_SOURCE,
        AIRTABLE_CONFIG,
        SHEETS_CONFIG,
        CACHE_DURATION,
        DEBUG_MODE
    };
}
