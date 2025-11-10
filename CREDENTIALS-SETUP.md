# How to Set Up Your API Credentials

## 🔐 Important: Keep Your Credentials Secure!

Your API credentials are like passwords - they should **NOT** be committed to GitHub where anyone can see them.

---

## ✅ Setup Complete!

I've already created `cms-config.local.js` with your Airtable credentials.

This file is in `.gitignore` and will NOT be pushed to GitHub.

---

## 🎯 How It Works

### Two Configuration Files:

1. **`cms-config.js`** (Committed to GitHub)
   - Contains placeholder values
   - Safe to share publicly
   - Template for others to use

2. **`cms-config.local.js`** (NOT committed)
   - Contains your real API credentials
   - Ignored by Git (.gitignore)
   - Overrides the placeholders

### Loading Order:
```html
<script src="cms-config.js"></script>        <!-- Loads placeholders -->
<script src="cms-config.local.js"></script>  <!-- Overrides with real credentials -->
<script src="cms-loader.js"></script>        <!-- Uses the real credentials -->
```

---

## 🚀 Your Website Is Now Ready!

The website will automatically:
1. Load `cms-config.js` with placeholders
2. Override with `cms-config.local.js` with real credentials
3. Fetch products from your Airtable base
4. Display them on the website

---

## 📝 Importing Products to Airtable

### Step 1: Open Your Airtable Base
1. Go to https://airtable.com
2. Open "Crazy Mamas Creations" base (or whatever you named it)

### Step 2: Import the CSV
1. In your Products table, click the dropdown menu (next to table name)
2. Select "Import data" → "CSV file"
3. Upload `products-export.csv` from this folder
4. Map the columns:
   - Title → Title
   - Description → Description
   - ImagePath → ImagePath
   - Category → Category
   - Price → Price
   - InStock → InStock
   - Featured → Featured
5. Click "Import"

### Step 3: Test It!
1. Open your website: https://crazymamascreations.love
2. Wait 30 seconds for cache to clear
3. Hard refresh: `Ctrl + F5` (Windows) or `Cmd + Shift + R` (Mac)
4. You should see products loading from Airtable!

---

## 🔧 Troubleshooting

### Website still shows "Loading products..."
1. Open browser console (F12)
2. Look for error messages
3. Common fixes:
   - Wait 30-60 seconds
   - Hard refresh browser
   - Check that Airtable base is accessible
   - Verify table name is "Products"

### "API key invalid" error
- Double-check the token in `cms-config.local.js`
- Make sure the Personal Access Token has read permissions
- Generate a new token if needed

### Products load but no images
- Upload images to Airtable's "Image" field (Attachment type)
- OR put images in `Photos/` folder and use ImagePath column

---

## 🎨 Adding Images to Airtable

### Option 1: Upload Directly to Airtable (Recommended)
1. Open a product record in Airtable
2. Click on the "Image" field (should be Attachment type)
3. Drag and drop your product photo
4. Airtable automatically hosts the image
5. Website will use this image!

### Option 2: Use GitHub Photos Folder
1. Upload image to `Photos/` folder on GitHub
2. In Airtable, put just the filename in "ImagePath" column
   - Example: `chris.jpeg` (not the full path)
3. Website will look for `Photos/chris.jpeg`

---

## 📱 Managing Products from Phone

### Using Airtable Mobile App:
1. Download "Airtable" from App Store or Google Play
2. Log in
3. Open "Crazy Mamas Creations" base
4. Tap a product to edit
5. Tap "+" to add new products
6. Changes appear on website within 30 seconds!

---

## 🔄 If You Need to Change Credentials

### To Update Airtable Credentials:
1. Open `cms-config.local.js`
2. Update the values:
```javascript
const AIRTABLE_CONFIG = {
    apiKey: 'your_new_token_here',
    baseId: 'your_new_base_id_here',
    tableName: 'Products'
};
```
3. Save the file
4. Refresh your website

### The file is NOT committed to Git, so it stays private!

---

## 🆘 Lost Your Local Config?

If you accidentally delete `cms-config.local.js`, contact Conner - he has a backup of your credentials and can help you recreate the file.

---

## ✨ You're All Set!

Your website is now powered by Airtable! Your mother can:
- ✅ Add/edit/delete products from Airtable
- ✅ Upload images directly
- ✅ Manage from phone or computer
- ✅ See changes on website within 30 seconds

**And your API credentials stay secure! 🔒**
