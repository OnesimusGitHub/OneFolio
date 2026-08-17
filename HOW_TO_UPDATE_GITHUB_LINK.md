# How to Update Your PERN Project GitHub Link

## 📝 Current Status

Your PERN stack POS & Inventory project has been added with a placeholder GitHub link.

**Current Link:** `https://github.com/OnesimusGitHub`

## 🔧 How to Update the GitHub Link

### Option 1: Direct Edit (Quick)

1. Open this file:
   ```
   frontend/src/constants/index.js
   ```

2. Find the PERN project (id: 4):
   ```javascript
   {
     id: 4,
     title: "POS and Inventory Management System",
     description: "...",
     href: "https://github.com/OnesimusGitHub",  // ← Change this line
     // ...
   }
   ```

3. Replace with your actual repository URL:
   ```javascript
   href: "https://github.com/YourUsername/YourPERNProjectRepo",
   ```

4. Save the file

### Option 2: If You Don't Have a GitHub Repo Yet

If your PERN project isn't on GitHub yet, you can:

#### A. Keep the Placeholder
The current link goes to your profile, which is fine.

#### B. Remove the Link Temporarily
Change the href to an empty string or "#":
```javascript
href: "#",
```

#### C. Create a GitHub Repository

1. Go to https://github.com/new
2. Create a new repository for your PERN project
3. Name it something like: `PERN-POS-Inventory-System`
4. Update the href with the new repository URL

## 📂 File Structure Reference

```
frontend/
└── src/
    └── constants/
        └── index.js  ← Edit this file
            └── myProjects array
                └── Project with id: 4 (PERN stack)
```

## 🎯 Complete Project Object Structure

Here's the full structure if you need to make other changes:

```javascript
{
  id: 4,
  title: "POS and Inventory Management System",
  description: "Main description here...",
  subDescription: [
    "Feature 1...",
    "Feature 2...",
    "Feature 3...",
    "Feature 4...",
  ],
  href: "YOUR_GITHUB_LINK_HERE",  // ← Update this
  logo: "",
  image: [
    "/assets/img/PharmaSys/image1.jpg",
    // ... more images
  ],
  tags: [
    { id: 1, name: "PostgreSQL", path: "/assets/img/postgre.png" },
    { id: 2, name: "Express.js", path: "/assets/img/express.png" },
    { id: 3, name: "React", path: "/assets/img/react.png" },
    { id: 4, name: "Node.js", path: "/assets/img/node.png" },
    { id: 5, name: "JavaScript", path: "/assets/img/javascript.png" },
  ],
}
```

## 🔄 After Making Changes

1. **If Dev Server is Running:**
   - Changes will hot-reload automatically
   - Refresh your browser if needed

2. **If Dev Server is Not Running:**
   ```bash
   cd frontend
   npm run dev
   ```

3. **For Production:**
   ```bash
   cd frontend
   npm run build
   ```

## ✏️ Other Things You Might Want to Customize

### Project Title
```javascript
title: "Your Custom Title Here",
```

### Main Description
```javascript
description: "Your custom description...",
```

### Feature Descriptions
```javascript
subDescription: [
  "Your feature 1...",
  "Your feature 2...",
  // Add or remove features as needed
],
```

### Tech Stack Tags
Add, remove, or reorder the tech stack icons:
```javascript
tags: [
  { id: 1, name: "PostgreSQL", path: "/assets/img/postgre.png" },
  { id: 2, name: "Express.js", path: "/assets/img/express.png" },
  // Add more technologies...
],
```

## 📸 Adding More Images

If you have more screenshots:

1. Put them in: `frontend/public/assets/img/PharmaSys/`
2. Update the image array:
   ```javascript
   image: [
     "/assets/img/PharmaSys/screenshot1.jpg",
     "/assets/img/PharmaSys/screenshot2.jpg",
     "/assets/img/PharmaSys/screenshot3.jpg",
     // Add more...
   ],
   ```

## 🎨 Current Tech Stack Icons Available

Located in `/assets/img/`:
- ✅ postgre.png (PostgreSQL)
- ✅ express.png (Express.js)
- ✅ react.png (React)
- ✅ node.png (Node.js)
- ✅ javascript.png (JavaScript)
- ✅ tailwindcss.png (if you used Tailwind)
- ✅ vite.png (if you used Vite)

## 🚀 Quick Commands

### Start Development Server
```bash
cd frontend
npm run dev
```
Then visit: http://localhost:5175/

### Build for Production
```bash
cd frontend
npm run build
```

### Preview Production Build
```bash
cd frontend
npm run preview
```

## 📍 Testing Your Changes

1. Start the dev server
2. Navigate to the Projects section
3. Scroll down to project #4 (PERN stack)
4. Click the "View on GitHub" button
5. Verify it goes to the correct repository

## ⚠️ Important Notes

- Always use **forward slashes** (/) in paths, even on Windows
- Image paths are relative to the `/public` folder
- Don't include `/public` in the image paths
- The dev server will show errors if images are missing

## 🆘 Troubleshooting

### Link Not Working?
- Check for typos in the URL
- Make sure the repository is public
- Verify the URL format: `https://github.com/username/repo-name`

### Images Not Showing?
- Check the file path is correct
- Verify images exist in `/public/assets/img/PharmaSys/`
- Use browser DevTools to check for 404 errors

### Changes Not Appearing?
- Hard refresh: `Ctrl + F5`
- Clear browser cache
- Restart the dev server

---

**Need help?** Check the browser console (F12) for errors!
