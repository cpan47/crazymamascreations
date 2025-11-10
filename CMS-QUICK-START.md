# CMS Quick Start Guide

## 📚 Documentation Files

This folder now contains a complete CMS (Content Management System) setup for Crazy Mamas Creations.

### For Your Mother (Non-Technical User):
- **[HOW-TO-USE-AIRTABLE.md](HOW-TO-USE-AIRTABLE.md)** - Complete guide for managing products with Airtable (RECOMMENDED)
- **[HOW-TO-USE-GOOGLE-SHEETS.md](HOW-TO-USE-GOOGLE-SHEETS.md)** - Complete guide for managing products with Google Sheets (BACKUP OPTION)

### For You (Technical Setup):
- **[CMS-SETUP-GUIDE.md](CMS-SETUP-GUIDE.md)** - Complete technical setup instructions
- **[products-export.csv](products-export.csv)** - All current products ready to import

---

## 🚀 Quick Setup Steps

### 1. Choose Your System

**Option A: Airtable** (Recommended)
- ✅ Beautiful interface
- ✅ Built-in image hosting
- ✅ Mobile app
- ✅ Easier for non-technical users
- ⏱️ Setup time: 15-20 minutes

**Option B: Google Sheets** (Backup)
- ✅ Familiar spreadsheet interface
- ✅ Works on any device
- ❌ Requires separate image uploads to GitHub
- ⏱️ Setup time: 20-30 minutes

### 2. Follow Setup Guide

Open `CMS-SETUP-GUIDE.md` and follow the instructions for your chosen system.

### 3. Configure the Website

Edit `cms-config.js`:
```javascript
const CMS_SOURCE = 'airtable'; // or 'sheets'

// Add your API credentials
const AIRTABLE_CONFIG = {
    apiKey: 'YOUR_TOKEN_HERE',
    baseId: 'YOUR_BASE_ID_HERE',
    tableName: 'Products'
};
```

### 4. Test

1. Add a test product in Airtable/Sheets
2. Wait 30 seconds
3. Refresh your website
4. Verify the product appears

### 5. Deploy

```bash
git add .
git commit -m "Add CMS integration for product management"
git push
```

---

## 📁 Files Added

### Configuration Files:
- `cms-config.js` - Configuration for both Airtable and Google Sheets
- `cms-loader.js` - JavaScript that fetches products from your chosen CMS

### Data Files:
- `products-export.csv` - All 60+ current products ready to import

### Documentation:
- `CMS-SETUP-GUIDE.md` - Technical setup instructions
- `HOW-TO-USE-AIRTABLE.md` - User guide for Airtable
- `HOW-TO-USE-GOOGLE-SHEETS.md` - User guide for Google Sheets
- `CMS-QUICK-START.md` - This file

---

## 🔄 How It Works

### Before (Hardcoded):
```javascript
const products = [
    { img: 'Photos/chris.jpeg', title: 'Chris Stapleton', ... },
    // ... 60 more products hardcoded in HTML
];
```

### After (CMS-Powered):
```javascript
// Products load from Airtable or Google Sheets
const products = await loadProducts();
// Website updates automatically when CMS data changes!
```

---

## ✨ Features

### For Your Mother:
- ✅ Add products without coding
- ✅ Edit descriptions, prices, availability
- ✅ Upload images (Airtable) or manage filenames (Sheets)
- ✅ Mark products as in-stock or made-to-order
- ✅ Feature products on homepage
- ✅ Works on phone, tablet, or computer

### Technical Features:
- ✅ Real-time updates (within 30 seconds)
- ✅ Browser caching (5-minute cache for performance)
- ✅ Automatic fallback to hardcoded products if CMS fails
- ✅ Fallback between Airtable ↔ Sheets if one fails
- ✅ Debug mode for troubleshooting
- ✅ No server required (works on GitHub Pages)

---

## 🎯 Next Steps

1. **Choose**: Airtable or Google Sheets?
2. **Setup**: Follow `CMS-SETUP-GUIDE.md`
3. **Import**: Upload `products-export.csv` to your chosen system
4. **Configure**: Edit `cms-config.js` with your API credentials
5. **Test**: Add a test product and verify it appears
6. **Train**: Show your mother `HOW-TO-USE-[SYSTEM].md`
7. **Deploy**: Push changes to GitHub

---

## 💡 Pro Tips

### For Best Results:
1. **Start with Airtable** - It's more user-friendly for managing images
2. **Set up Google Sheets as backup** - Takes 10 extra minutes, good insurance
3. **Create an image upload script** - If using Sheets, automate GitHub image uploads
4. **Enable debug mode initially** - Set `DEBUG_MODE = true` in `cms-config.js`
5. **Test on mobile** - Your mother will likely manage from her phone

### Common Issues:
- **Products not loading**: Check API credentials in `cms-config.js`
- **Images not showing**: Verify image paths/URLs are correct
- **Changes not appearing**: Wait 30-60 seconds, clear browser cache
- **API errors**: Check console (F12) for detailed error messages

---

## 🆘 Troubleshooting

### Website shows "Loading products..." forever
- Check browser console for errors (press F12)
- Verify API credentials in `cms-config.js`
- Make sure CMS is publicly accessible
- Try switching to fallback system

### Changes in CMS don't appear on website
- Wait 30-60 seconds (cache expires)
- Hard refresh: Ctrl+F5 (Windows) or Cmd+Shift+R (Mac)
- Clear browser cache
- Check that `CMS_SOURCE` in `cms-config.js` matches your active system

### Images from Airtable not loading
- Airtable URLs expire after ~2 hours (for security)
- This is normal - images will reload automatically
- Or, upload images to GitHub Photos/ folder and use ImagePath instead

---

## 📞 Support

For technical issues:
- Check the `CMS-SETUP-GUIDE.md` troubleshooting section
- Enable `DEBUG_MODE` in `cms-config.js` to see detailed logs
- Check browser console (F12) for errors

For user questions:
- Reference the appropriate `HOW-TO-USE-*.md` guide
- Most common tasks are covered with screenshots

---

## 🎉 You're Done!

Your mother can now manage products without touching code. The website will automatically update whenever she makes changes in Airtable or Google Sheets.

**Welcome to the future of product management! 🚀**
