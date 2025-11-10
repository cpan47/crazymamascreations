# CMS Setup Guide - Crazy Mamas Creations

This guide will help you set up both Airtable and Google Sheets as content management systems for the website.

## Overview

Your website can pull product data from either:
1. **Airtable** (Recommended) - Beautiful interface, built-in image hosting
2. **Google Sheets** (Backup) - Simple spreadsheet, requires separate image uploads

Both update the website in real-time!

---

## Option 1: Airtable Setup (RECOMMENDED)

### Step 1: Create Airtable Account
1. Go to https://airtable.com/signup
2. Sign up for a free account
3. Verify your email

### Step 2: Create Your Base
1. Click "Create a base" > "Start from scratch"
2. Name it: **Crazy Mamas Products**
3. Rename the default table to: **Products**

### Step 3: Set Up Table Structure
Create these fields in your Products table:

| Field Name | Field Type | Notes |
|------------|------------|-------|
| Title | Single line text | Product name (e.g., "Led Zeppelin II") |
| Description | Long text | Full product description |
| Image | Attachment | Product photo(s) |
| Category | Single select | Options: classic-rock, alternative, punk, lifestyle |
| Price | Number | Default: 85 |
| InStock | Checkbox | Check if available, uncheck if made-to-order |
| Featured | Checkbox | Check to feature on homepage |
| ImagePath | Single line text | Filename in Photos/ folder (e.g., "chris.jpeg") |

### Step 4: Import Your Products
I've created a CSV file with all your current products. To import:
1. Click "Import" in Airtable
2. Upload `airtable-products.csv`
3. Map columns to the fields above
4. Import!

### Step 5: Get Your API Credentials

#### Get Personal Access Token:
1. Go to https://airtable.com/create/tokens
2. Click "Create new token"
3. Name it: "Website Access"
4. Add these scopes:
   - `data.records:read`
5. Add access to your "Crazy Mamas Products" base
6. Click "Create token"
7. **Copy the token** (you'll only see it once!)

#### Get Base ID:
1. Go to https://airtable.com/api
2. Click on your "Crazy Mamas Products" base
3. In the URL, find the Base ID (starts with "app")
   - Example: `https://airtable.com/appXXXXXXXXXXXXXX/api/docs`
   - Your Base ID is `appXXXXXXXXXXXXXXX`

#### Get Table ID:
1. Open your base
2. Click on the "Products" table
3. In the URL, find the Table ID (starts with "tbl")
   - Example: `https://airtable.com/appXXXX/tblYYYYY/viwZZZZZ`
   - Your Table ID is `tblYYYYY`

### Step 6: Configure the Website
1. Open `airtable-config.js` (I'll create this)
2. Add your credentials:
```javascript
const AIRTABLE_CONFIG = {
    apiKey: 'YOUR_PERSONAL_ACCESS_TOKEN_HERE',
    baseId: 'YOUR_BASE_ID_HERE',
    tableName: 'Products'
};
```

### Step 7: Upload Product Images to Airtable
For each product:
1. Open the record in Airtable
2. Click on the Image field
3. Drag and drop the product photo from your Photos/ folder
4. Airtable will host the image automatically!

---

## Option 2: Google Sheets Setup (BACKUP)

### Step 1: Create Google Sheet
1. Go to https://sheets.google.com
2. Create new sheet
3. Name it: **Crazy Mamas Products**

### Step 2: Set Up Columns
Create these column headers in Row 1:

| A | B | C | D | E | F | G | H |
|---|---|---|---|---|---|---|---|
| Title | Description | ImagePath | Category | Price | InStock | Featured | ImageURL |

### Step 3: Import Product Data
1. I've created `google-sheets-products.csv`
2. File > Import > Upload > Select the CSV
3. Import data

### Step 4: Add Data Validation
For easier editing:
- **Category column**: Data > Data validation > List: classic-rock, alternative, punk, lifestyle
- **InStock column**: Data > Data validation > Checkbox
- **Featured column**: Data > Data validation > Checkbox

### Step 5: Make Sheet Public (Read-Only)
1. Click "Share" button (top right)
2. Click "Change to anyone with the link"
3. Set permission to "Viewer"
4. Click "Done"
5. Copy the sharing link

### Step 6: Get Sheet ID
From your sharing link:
```
https://docs.google.com/spreadsheets/d/SHEET_ID_HERE/edit
```
Copy the SHEET_ID_HERE part

### Step 7: Enable Google Sheets API
1. Go to https://console.cloud.google.com
2. Create new project: "Crazy Mamas Website"
3. Enable "Google Sheets API"
4. Create credentials > API Key
5. Restrict API key to Google Sheets API only
6. Copy the API key

### Step 8: Configure the Website
1. Open `sheets-config.js`
2. Add your credentials:
```javascript
const SHEETS_CONFIG = {
    apiKey: 'YOUR_GOOGLE_API_KEY_HERE',
    sheetId: 'YOUR_SHEET_ID_HERE',
    range: 'Sheet1!A:H'
};
```

---

## Testing

### Test Airtable:
1. Add a test product in Airtable
2. Wait 10-30 seconds
3. Refresh your website
4. Verify the product appears

### Test Google Sheets:
1. Edit a product description in the sheet
2. Wait 10-30 seconds
3. Refresh your website
4. Verify the change appears

---

## Switching Between Systems

In `index.html`, find this line:
```javascript
const USE_AIRTABLE = true; // Set to false to use Google Sheets
```

Change to `false` to use Google Sheets instead of Airtable.

---

## Troubleshooting

### Products not loading:
- Check browser console for errors (F12)
- Verify API keys are correct
- Check that Airtable base/Sheet is accessible

### Images not showing:
- **Airtable**: Make sure images are uploaded to Image field
- **Sheets**: Make sure ImagePath matches filename in Photos/ folder

### Need Help?
Contact Conner - he can help debug any issues!
