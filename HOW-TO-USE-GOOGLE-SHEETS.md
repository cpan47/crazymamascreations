# How to Manage Products with Google Sheets

**For: Krissy (Crazy Mamas Creations)**

This guide will show you how to add, edit, and manage your band shirt products using Google Sheets.

---

## 🎯 What You Need to Know

- **Google Sheets is like Excel** - if you've used spreadsheets before, you'll feel right at home
- **Changes appear on your website within seconds**
- **You can use it on your computer, phone, or tablet**
- **Images must be uploaded to GitHub first** (Conner can help with this)

---

## 📱 Getting Started

### Opening Your Product Sheet
1. Open your web browser
2. Go to **Google Sheets** (sheets.google.com)
3. Find and open **"Crazy Mamas Products"**
4. You'll see a spreadsheet with all your shirts

### Using on Phone/Tablet
1. Download **"Google Sheets"** app from App Store or Google Play
2. Log in with your Google account
3. Open "Crazy Mamas Products"
4. Now you can edit from anywhere!

---

## 📋 Understanding Your Spreadsheet

Your sheet has these columns:

| Column A | Column B | Column C | Column D | Column E | Column F | Column G |
|----------|----------|----------|----------|----------|----------|----------|
| **Title** | **Description** | **ImagePath** | **Category** | **Price** | **InStock** | **Featured** |

**Row 1** = Column headers (DON'T EDIT THIS ROW!)
**Row 2 and below** = Your products (one product per row)

---

## ✅ How to Add a NEW Product

### Step 1: Go to Next Empty Row
1. Scroll to the bottom of your sheet
2. Find the first completely empty row
3. Click on it

### Step 2: Fill in Each Column

**Column A - Title** ⭐ REQUIRED
- Example: "Led Zeppelin - Stairway to Heaven"
- This is what customers see as the product name

**Column B - Description** ⭐ REQUIRED
- Example: "Classic Led Zeppelin design on vintage blue flannel with distressed graphics"
- Describe the shirt, colors, special features

**Column C - ImagePath** ⭐ REQUIRED
- This is the filename of your photo
- Example: `chris.jpeg` or `led-zeppelin-shirt.jpeg`
- **Important: Photo must already be in the Photos/ folder on GitHub**
- Ask Conner to upload photos for you, or use the upload script

**Column D - Category** ⭐ REQUIRED
- Type one of these (exactly):
  - `classic-rock` - Most band shirts (Led Zeppelin, Pink Floyd, etc.)
  - `alternative` - Alternative rock (Nirvana, Pearl Jam, etc.)
  - `punk` - Punk/Metal bands
  - `lifestyle` - Photos of people wearing shirts
  - `country` - Country music artists

**Column E - Price**
- Type: `85` (no dollar sign needed)
- Change only if you want a different price

**Column F - InStock** (TRUE or FALSE)
- Type: `TRUE` if ready to ship immediately
- Type: `FALSE` if needs to be made to order
- This shows "In Stock" or "Made to Order" on website

**Column G - Featured** (TRUE or FALSE)
- Type: `TRUE` if you want this on the homepage
- Type: `FALSE` for regular products
- Only feature your best 5-7 products!

### Step 3: Save
- Changes save automatically as you type!
- **Website updates within 30 seconds!**

---

## ✏️ How to EDIT an Existing Product

### Simple Editing:
1. Find the product row
2. Click on the cell you want to edit
3. Type your changes
4. Press Enter or click elsewhere
5. Done! Saves automatically

### Quick Tips:
- Double-click a cell to edit it
- Press Tab to move to next cell
- Press Shift+Tab to move to previous cell
- Copy/paste works just like Word or Excel

---

## 🖼️ How to Upload and Change Photos

**⚠️ Important: Google Sheets doesn't store images directly**

You have two options:

### Option 1: Ask Conner (Easiest)
1. Text or email Conner your product photo
2. Tell him what to name it (e.g., "led-zeppelin-blue.jpeg")
3. He'll upload it to GitHub
4. He'll give you the filename
5. You type that filename in Column C (ImagePath)

### Option 2: Use the Upload Script (Advanced)
1. Ask Conner to show you the upload script
2. Run it on your computer
3. Select your photo
4. It uploads to GitHub automatically
5. Copy the filename it gives you
6. Paste in Column C

---

## 📦 How to Mark Items In Stock / Out of Stock

1. Find your product row
2. Go to Column F (InStock)
3. Type one of these:
   - `TRUE` = In Stock (ships in 3-5 days)
   - `FALSE` = Made to Order (2-3 weeks)
4. Press Enter

**Why This Matters:**
- Customers see "✓ In Stock" or "⚡ Made to Order"
- Update this when you sell a one-of-a-kind shirt!

---

## 🗑️ How to Delete a Product

**⚠️ Warning: Once deleted, it's gone!**

### Method 1: Delete Entire Row
1. Click on the row number (far left) to select the whole row
2. Right-click on the row number
3. Choose "Delete row"
4. Product disappears from website in ~30 seconds

### Method 2: Hide Instead (Better!)
1. Instead of deleting, type `FALSE` in the Featured column
2. The product stays in your sheet but won't be prominently displayed
3. You can always bring it back later!

---

## 🎨 How to Feature Products on Homepage

The homepage shows "Featured Collection" - your best sellers or newest items.

1. Find the product row
2. Go to Column G (Featured)
3. Type: `TRUE`
4. Product appears in featured section!

**Best Practice:**
- Feature 5-7 items maximum
- Type `FALSE` for products you want to unfeature
- Rotate featured items monthly

---

## 📱 Using Google Sheets on Your Phone

### Opening on Phone:
1. Open Google Sheets app
2. Tap "Crazy Mamas Products"
3. Spreadsheet opens

### Editing on Phone:
1. Tap any cell to select it
2. Tap again to open keyboard and edit
3. Type your changes
4. Tap the checkmark ✓ or press Done
5. Saves automatically!

### Adding Rows on Phone:
1. Scroll to bottom
2. Tap on an empty cell in the last row
3. Fill in all the columns
4. Swipe left/right to move between columns

---

## 🔍 Finding Products Quickly

### Using Find (Search):
1. Press `Ctrl + F` (Windows) or `Cmd + F` (Mac)
2. Type part of the product name
3. Google Sheets highlights matching cells
4. Press Enter to jump to next match

### Sorting Products:
1. Click on any column letter (A, B, C, etc.)
2. Click "Data" menu at top
3. Choose "Sort sheet A to Z" or "Sort sheet Z to A"

### Filtering Products:
1. Select your header row (Row 1)
2. Click "Data" menu
3. Click "Create a filter"
4. Little dropdown arrows appear in each column header
5. Click arrow → Choose what to show/hide

---

## 💡 Pro Tips

### Tip 1: Use Data Validation for Categories
Ask Conner to set up a dropdown menu for categories so you can't mistype them!

### Tip 2: Copy Rows
1. Click on row number to select entire row
2. Right-click → "Copy"
3. Click on empty row
4. Right-click → "Paste"
5. Edit the copied product info
6. Faster than typing from scratch!

### Tip 3: Freeze the Header Row
- Keeps column headers visible when scrolling
- View menu → Freeze → 1 row

### Tip 4: Use Color Coding (Optional)
- Right-click on a row → "Color"
- Pick a color to mark special products
- Example: Green = In Stock, Yellow = Low Stock

---

## ⚙️ Data Validation Setup (Ask Conner)

To make editing easier, Conner can set up dropdowns:

**For Category column:**
- Dropdown with: classic-rock, alternative, punk, lifestyle, country

**For InStock and Featured columns:**
- Checkboxes instead of typing TRUE/FALSE

This prevents typos and makes editing faster!

---

## ❓ Troubleshooting

### "I added a product but don't see it on the website"
- Wait 30-60 seconds and hard refresh (Ctrl+F5 or Cmd+Shift+R)
- Check that you spelled column entries correctly
- Make sure ImagePath matches an actual file in Photos/ folder
- Verify you're looking at the live website (crazymamascreations.love)

### "Images aren't showing up"
- Check Column C (ImagePath) for typos
- Make sure the filename matches exactly (case-sensitive!)
- Example: `chris.jpeg` ≠ `Chris.jpeg` ≠ `chris.jpg`
- Ask Conner if the photo is actually uploaded to GitHub

### "I accidentally deleted a row!"
- Press `Ctrl + Z` (Windows) or `Cmd + Z` (Mac) immediately
- Or: File menu → Version history → See version history
- Find a version before you deleted it
- Click "Restore this version"

### "Website shows old data"
- Hard refresh your browser: `Ctrl + F5` or `Cmd + Shift + R`
- Clear browser cache
- Wait 1-2 minutes (cache needs to expire)

---

## 📸 Image Naming Best Practices

When asking Conner to upload images, use good filenames:

**Good:**
- `led-zeppelin-blue-flannel.jpeg`
- `pink-floyd-dark-side.jpeg`
- `grateful-dead-tie-dye.jpeg`

**Bad:**
- `IMG_1234.jpeg`
- `photo.jpeg`
- `new image final.jpeg`

**Why:**
- Easier to remember
- Easier to find
- Professional organization

---

## 🔒 Important Rules

1. **DON'T delete Row 1** (the headers!)
2. **DON'T change column order** (A-B-C-D-E-F-G must stay in that order)
3. **DO make sure spellings are exact** (especially Category column)
4. **DO ask Conner if you're unsure** about anything!

---

## 📞 Need Help?

**Call or text Conner:**
- He can upload photos for you
- He can set up data validation (dropdowns)
- He can recover deleted products
- He can troubleshoot any issues

---

## ✨ You're All Set!

Remember:
- ✅ Changes appear on website in ~30 seconds
- 📱 You can manage from phone or computer
- 💾 Everything saves automatically
- 📧 Ask Conner to upload photos

**Happy selling! 🎸**

---

## 🆚 Google Sheets vs Airtable

If you're wondering which to use:

**Use Google Sheets if:**
- You're comfortable with spreadsheets
- You want the simplest interface
- You don't mind asking Conner to upload photos

**Use Airtable if:**
- You want to upload images directly yourself
- You want a more visual, modern interface
- You want better mobile app experience

**Ask Conner to switch between them anytime!**
