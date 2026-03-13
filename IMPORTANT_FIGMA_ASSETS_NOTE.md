# ⚠️ Important: Figma Assets

**Critical information about the `figma:asset` imports in your project**

---

## 🎯 What Are Figma Assets?

Your project uses a special import system for images:

```tsx
import imgKayak from "figma:asset/6fad46b3d851d137893f8d62de5eff1ad42c323f.png";
```

These are **raster images** (PNG, JPG) that were imported from your Figma design.

---

## 🔍 Where You'll See Them

**Files that use figma:asset imports:**
- `src/imports/Desktop3.tsx`
- `src/imports/IPhone161.tsx`

**Example from your code:**
```tsx
// Line 4 in Desktop3.tsx
import imgAdobeStock1179706453 from "figma:asset/1f795ef72faabede2d14aaae2358611783f2c762.png";

// Line 8 in Desktop3.tsx
import imgAdobeStock1040110533 from "figma:asset/6fad46b3d851d137893f8d62de5eff1ad42c323f.png";

// And many more...
```

---

## ⚡ How It Works (In Figma Make)

### In Figma Make Environment:
- ✅ `figma:asset` is a **virtual module scheme**
- ✅ Figma Make's build system automatically resolves these
- ✅ Images load perfectly
- ✅ No additional setup needed

### The Virtual Module System:
```tsx
import img from "figma:asset/[hash].png"
// ↓ Figma Make automatically converts to:
// Actual image URL that works in the browser
```

---

## 🚨 Important for GitHub Upload

### What AI Assistants Will See

When you upload to GitHub and share with ChatGPT/Claude:

✅ **They CAN see:**
- The import statements
- The component structure
- How images are used (masked, positioned, etc.)
- All the code logic

❌ **They CANNOT see:**
- The actual image files (they're not in your repository)
- What the images look like
- The visual result

### Example:

**AI sees this:**
```tsx
import imgKayak from "figma:asset/6fad46b3d851d137893f8d62de5eff1ad42c323f.png";

<img src={imgKayak} className="absolute inset-0 object-cover" />
```

**AI understands:**
- There's an image called imgKayak
- It's absolutely positioned and covers its container
- It uses object-cover for sizing

**AI can help with:**
- Changing the positioning
- Modifying the styling (scale, transform, etc.)
- Adjusting the circular mask
- Responsive behavior

---

## 🤖 How This Affects AI Collaboration

### ✅ AI Can Still Help With:

1. **Layout & Positioning**
   ```
   "Move the kayak image 50px to the right"
   → AI can modify the left/top values
   ```

2. **Styling & Transforms**
   ```
   "Scale the kayak image by 1.5x"
   → AI can add transform: scale(1.5)
   ```

3. **Responsive Design**
   ```
   "Make the images smaller on mobile"
   → AI can adjust sizes and breakpoints
   ```

4. **Masks & Effects**
   ```
   "Change the circular mask to an oval"
   → AI can modify the mask properties
   ```

### ⚠️ AI Cannot Help With:

1. **Replacing Images**
   - AI can't swap out figma:asset images
   - You'd need to do this in Figma Make

2. **Visual Debugging**
   - AI can't see what the page looks like
   - You need to describe visual issues

3. **Image Quality Issues**
   - AI can't fix blurry or pixelated images
   - This is source image quality

---

## 💡 Best Practices When Working with AI

### ✅ DO:

**Be descriptive about what you see:**
```
"The kayak image in Group15 is too far left. It should be centered 
in the circular mask."
```

**Specify which component/image:**
```
"In Desktop3.tsx, the image imported as 'imgAdobeStock1040110533' 
(around line 200 in Group15)"
```

**Focus on code changes:**
```
"Can you adjust the transform and position values to move the image?"
```

### ❌ DON'T:

**Don't ask AI to change the image itself:**
```
❌ "Can you make this kayak image brighter?"
→ AI can't edit the image file
```

**Don't ask AI to see the visual result:**
```
❌ "Does this look centered to you?"
→ AI can't see the rendered page
```

**Don't expect AI to replace images:**
```
❌ "Can you swap this kayak for a boat image?"
→ You need to do this in Figma Make
```

---

## 🎯 Typical AI Collaboration Scenarios

### Scenario 1: Repositioning an Image

**Your message:**
```
Repository: https://github.com/YOUR_USERNAME/shing-landing-page
File: src/imports/Desktop3.tsx
Component: Group15 (around line 200)

The kayak image (imgAdobeStock1040110533) needs to move 100px right 
and 50px down. Can you adjust the positioning?
```

**AI can:**
- Find the component
- Locate the positioning code
- Adjust left/top values
- Provide the updated code

### Scenario 2: Scaling an Image

**Your message:**
```
In Desktop3.tsx, Group15, I need to scale the kayak image by 1.5x 
while keeping it centered in the circular mask.
```

**AI can:**
- Add transform: scale(1.5)
- Adjust transform-origin
- Update positioning if needed

### Scenario 3: Responsive Images

**Your message:**
```
The images in IPhone161.tsx are too large on very small screens 
(< 350px). Can you add responsive scaling?
```

**AI can:**
- Add media query logic
- Adjust image container sizes
- Modify the scaling in App.tsx

---

## 📋 Image Reference

### Images in Your Project

**Desktop3.tsx uses:**
- `imgAdobeStock1179706453` - Person in circular mask (hero section)
- `imgPexelsGuilhermealmeida18581752` - Another person image
- `imgAdobeStock1040110533` - Kayak image (the one you recently adjusted)
- `imgAdobeStock6520281513` - Another image
- `imgPexelsCottonbro48816192` - Person image
- `imgPexelsOlly32891671` - Person image
- `imgPexelsFauxels31844181` - Person image
- `imgImage102` - Logo/icon
- `imgAsset730X2` - Asset
- `imgAsset230X2` - Asset
- `imgAsset130X1` - Asset
- `imgAsset530X1` - Asset

**IPhone161.tsx uses:**
- Similar set of images for mobile layout

---

## 🔧 Technical Details

### The Import Pattern

```tsx
// Pattern:
import [variableName] from "figma:asset/[hash].[extension]";

// Examples:
import imgKayak from "figma:asset/6fad46b3d851d137893f8d62de5eff1ad42c323f.png";
import imgPerson from "figma:asset/1f795ef72faabede2d14aaae2358611783f2c762.png";
```

### How They're Used

```tsx
// In circular mask:
<div 
  className="absolute h-[370px] w-[600px]"
  style={{ maskImage: `url('${maskSvg}')` }}
>
  <img src={imgKayak} className="absolute inset-0 object-cover" />
</div>
```

### Important Notes:
- ✅ `figma:asset` is NOT a file path
- ✅ It's a virtual module handled by Figma Make
- ✅ Don't try to prefix it with `./` or `../`
- ✅ The hash is a content hash (ensures uniqueness)

---

## 🆘 If Someone Asks to Run Your Project Locally

If someone tries to run your project outside of Figma Make:

### They'll See Errors:
```
Cannot find module 'figma:asset/...'
```

### Why:
- The `figma:asset` scheme only works in Figma Make
- Regular Vite/Webpack don't understand it

### Solutions:

**Option 1: Keep it in Figma Make**
- Recommended for this project
- Everything works out of the box

**Option 2: Convert Assets (Advanced)**
- Export images from Figma
- Place in `/public/images/`
- Change imports to regular paths
- This is complex and not recommended

---

## ✅ Summary

### For GitHub Upload:
- ✅ Upload all `.tsx` and `.ts` files as-is
- ✅ Include the `figma:asset` import statements
- ✅ Don't try to "fix" or change them
- ✅ AI assistants will understand the code structure

### For AI Collaboration:
- ✅ AI can help with positioning, styling, transforms
- ✅ Describe what you want to achieve
- ✅ Be specific about which image/component
- ✅ Focus on code-level changes

### Limitations:
- ❌ Images won't load outside Figma Make
- ❌ AI can't see the visual result
- ❌ Can't replace images through GitHub alone

---

## 🎯 Bottom Line

**The `figma:asset` imports are fine!** 

- Upload them to GitHub exactly as they are
- AI assistants can still help you with code
- Everything will work when you run it in Figma Make
- Focus your AI questions on layout, styling, and behavior

---

**Questions about Figma assets?** Ask me and I'll clarify!
