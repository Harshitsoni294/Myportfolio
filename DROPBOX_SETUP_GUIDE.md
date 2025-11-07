# Dropbox Setup Guide for Photo Uploads

## Step 1: Create Dropbox App

1. Go to [Dropbox Developers Console](https://www.dropbox.com/developers/apps)
2. Click **"Create App"**
3. Choose:
   - **API**: Scoped access
   - **Access Type**: Full Dropbox
   - **App Name**: `PortfolioFeedbackPhotos` (or any name you prefer)
4. Click **"Create App"**

## Step 2: Configure Permissions

1. Go to the **"Permissions"** tab
2. Enable these permissions:
   - ✅ `files.content.write` (Upload files)
   - ✅ `files.content.read` (Read files)
   - ✅ `sharing.write` (Create shared links)
   - ✅ `sharing.read` (Read shared links)
3. Click **"Submit"** at the bottom

## Step 3: Generate Access Token

1. Go to the **"Settings"** tab
2. Scroll down to **"OAuth 2"** section
3. Under **"Generated access token"**, click **"Generate"**
4. Copy the access token (it will look like: `sl.xxxxxxxxxxxxxxxxxxxxxxxxxx`)
5. **Important**: Save this token securely - you won't be able to see it again!

## Step 4: Add Token to Your Project

### Option A: Environment Variable (Recommended)

1. Create a `.env` file in the root of your project:
```bash
# In Myportfolio folder
VITE_DROPBOX_ACCESS_TOKEN=your_token_here
```

2. Add `.env` to `.gitignore` to keep your token secret:
```bash
echo ".env" >> .gitignore
```

3. The code will automatically use this environment variable.

### Option B: Direct in Code (Less Secure)

If you're not deploying publicly, you can add it directly in `FeedbackPage.tsx` line 70:
```typescript
const DROPBOX_ACCESS_TOKEN = 'sl.your-actual-token-here';
```

## Step 5: Test Upload

1. Run your app: `npm run dev`
2. Go to `/feedback` page
3. Try uploading an image
4. Check your Dropbox app folder for the uploaded file

## Troubleshooting

### Error: "Invalid access token"
- Make sure you copied the complete token
- Check if permissions are enabled
- Regenerate token if needed

### Error: "Path not found"
- Dropbox will auto-create the `/feedback-photos/` folder on first upload
- Make sure your app has write permissions

### Error: "File size too large"
- Max size is 5MB
- Compress images before upload if needed

## Alternative: Use Cloudinary (Easier)

If Dropbox is too complex, consider using Cloudinary's unsigned upload:

1. Sign up at [Cloudinary](https://cloudinary.com)
2. Get your cloud name and upload preset
3. Much simpler - no backend needed!

I can help you switch to Cloudinary if you prefer! 🚀
