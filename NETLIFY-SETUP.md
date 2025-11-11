# Netlify Setup Guide

## 🎯 Why Netlify?

Using Netlify with serverless functions keeps your API credentials secure:
- ✅ Credentials stored in Netlify (not in your code)
- ✅ Never exposed to browsers or GitHub
- ✅ Professional, industry-standard approach
- ✅ Free tier is more than enough for this site

---

## 🚀 Step 1: Deploy to Netlify

### Option A: Deploy from GitHub (Recommended)

1. **Go to Netlify**
   - Visit https://app.netlify.com
   - Sign up or log in (use your GitHub account)

2. **Import Repository**
   - Click "Add new site" → "Import an existing project"
   - Choose "Deploy with GitHub"
   - Authorize Netlify to access your repositories
   - Select `cpan47/crazymamascreations`

3. **Configure Build Settings**
   - **Build command**: Leave empty (static site)
   - **Publish directory**: `.` (root directory)
   - Click "Deploy site"

4. **Wait for Deployment**
   - First deployment takes 1-2 minutes
   - You'll get a random URL like `random-name-123.netlify.app`

### Option B: Manual Deploy (Drag & Drop)

1. Go to https://app.netlify.com
2. Drag your entire project folder onto the page
3. Netlify deploys it instantly

---

## 🔑 Step 2: Add Environment Variables

This is where you'll store your Airtable credentials securely.

1. **Go to Site Settings**
   - In your Netlify dashboard
   - Click on your site
   - Go to "Site settings"

2. **Add Environment Variables**
   - Click "Environment variables" in the left sidebar
   - Click "Add a variable"

3. **Add These Three Variables:**

   **Variable 1:**
   - Key: `AIRTABLE_API_KEY`
   - Value: `[Your Airtable Personal Access Token]`
   - Scopes: All (or select "Functions")
   - Click "Create variable"

   **Variable 2:**
   - Key: `AIRTABLE_BASE_ID`
   - Value: `[Your Airtable Base ID - starts with app...]`
   - Scopes: All (or select "Functions")
   - Click "Create variable"

   **Variable 3:**
   - Key: `AIRTABLE_TABLE_NAME`
   - Value: `Products`
   - Scopes: All (or select "Functions")
   - Click "Create variable"

   > **Note:** Contact Conner for the actual values to use here.

4. **Save and Redeploy**
   - After adding all variables
   - Go to "Deploys" tab
   - Click "Trigger deploy" → "Deploy site"
   - Wait for redeploy (1-2 minutes)

---

## 🌐 Step 3: Set Up Custom Domain

### Link Your Domain (crazymamascreations.love)

1. **In Netlify Dashboard**
   - Go to "Domain management"
   - Click "Add custom domain"
   - Enter: `crazymamascreations.love`
   - Click "Verify"

2. **Configure DNS**

   You have two options:

   **Option A: Use Netlify DNS (Easier)**
   - Netlify will give you nameservers
   - Go to your domain registrar (where you bought the domain)
   - Update nameservers to Netlify's nameservers
   - Wait 24-48 hours for DNS propagation

   **Option B: Keep Existing DNS**
   - In your domain's DNS settings, add:
     - **A Record**: `75.2.60.5` (Netlify's load balancer)
     - **CNAME for www**: `random-name-123.netlify.app`

3. **Enable HTTPS**
   - Netlify automatically provisions SSL certificate
   - Your site will be https://crazymamascreations.love

---

## ✅ Step 4: Verify Everything Works

### Test the Netlify Function

1. Open your site
2. Open browser console (F12)
3. Look for log messages:
   - `✓ Loaded X products from CMS`

4. If you see this, it's working!

### Test Product Management

1. Add a test product in Airtable
2. Wait 5 minutes (for cache to expire)
3. Refresh your website
4. Product should appear!

---

## 🔧 Troubleshooting

### Products Not Loading

**Check Browser Console**
- Press F12 to open developer tools
- Look for errors in the Console tab
- Common errors:

   **"Function error: 404"**
   - Functions aren't deployed
   - Go to Netlify dashboard → "Functions" tab
   - Should see `get-products` function listed
   - If not, trigger a new deploy

   **"Server configuration error"**
   - Environment variables not set
   - Go to "Site settings" → "Environment variables"
   - Make sure all 3 variables are there
   - Trigger new deploy after adding them

   **"Failed to fetch"**
   - CORS issue or network problem
   - Check if Netlify site is actually deployed
   - Try hard refresh: Ctrl+F5 or Cmd+Shift+R

### Function Logs

1. **View Function Logs**
   - Netlify dashboard → "Functions" tab
   - Click on "get-products"
   - Click "Logs"
   - See real-time function execution logs

2. **Common Log Messages**
   - "Missing environment variables" → Add them in settings
   - "Airtable API error" → Check your API token is valid

---

## 💰 Netlify Pricing

**Free Tier Includes:**
- ✅ 100GB bandwidth/month (plenty!)
- ✅ 125,000 function requests/month (plenty!)
- ✅ Unlimited sites
- ✅ SSL certificates
- ✅ Continuous deployment from GitHub

**You'll never need to pay** for a site this size.

---

## 🎨 Additional Netlify Features You Can Use

### 1. Deploy Previews
- Every time you push to GitHub
- Netlify creates a preview URL
- Test changes before going live

### 2. Branch Deploys
- Create a `dev` branch for testing
- Netlify auto-deploys each branch
- Example: `dev--yoursite.netlify.app`

### 3. Forms (If Needed Later)
- Built-in form handling
- No server code needed
- Just add `netlify` attribute to forms

### 4. Analytics
- See visitor stats
- Costs $9/month (optional)
- Or use free Google Analytics

---

## 📱 Managing After Setup

### Your Mother's Workflow
1. Opens Airtable (web or app)
2. Adds/edits products
3. Changes appear on website within 5 minutes (cache)

### Your Workflow
1. Edit code locally
2. Push to GitHub: `git push`
3. Netlify auto-deploys in 1-2 minutes
4. Done!

---

## 🔒 Security Benefits

**With Netlify Functions:**
- ✅ API keys never exposed in browser
- ✅ API keys never in GitHub
- ✅ API keys only in Netlify environment
- ✅ Functions run on server, not client
- ✅ No way for visitors to steal credentials

**Without Netlify Functions (old way):**
- ❌ API keys in JavaScript code
- ❌ Anyone can view source and steal keys
- ❌ GitHub security scanners block pushes

---

## 🆘 Need Help?

### Netlify Support
- Community forum: https://answers.netlify.com
- Documentation: https://docs.netlify.com

### Common Issues
1. **Forgot to add environment variables** → Add them and redeploy
2. **DNS not working** → Wait 24-48 hours for propagation
3. **Functions not deploying** → Check `netlify.toml` is in root
4. **Airtable errors** → Check API token is still valid

---

## ✨ You're Done!

Your site is now:
- ✅ Deployed on Netlify
- ✅ Using secure serverless functions
- ✅ API credentials protected
- ✅ Auto-deploys from GitHub
- ✅ Free SSL certificate
- ✅ Custom domain configured

**Welcome to modern web development! 🚀**
