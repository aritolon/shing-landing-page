# 🎨 Shing Landing Page

A fully responsive landing page for **Shing** - a modern sharing platform. Built with React, TypeScript, Tailwind CSS v4, and Vite.

![Shing Landing Page](https://img.shields.io/badge/React-18.3.1-blue) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38bdf8) ![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178c6)

---

## 🌟 Features

- **📱 Fully Responsive Design**
  - Desktop view (≥768px): Full desktop layout with parallax effects
  - Mobile view (<768px): Optimized mobile layout
  - Tablet: Scaled desktop layout for medium screens

- **🎨 Design Highlights**
  - Vibrant, playful aesthetic with colorful background elements
  - Circular image masks for photos
  - Open Sans font family
  - Smooth scrolling and transitions

- **📦 Sections Included**
  - Hero area with CTA
  - Feature explanations
  - 3-step getting started guide
  - Pricing plans (Free, Pro, Premium)
  - Footer with social links

- **⚡ Performance**
  - Vite for fast development and builds
  - Optimized scaling logic for different viewports
  - Smooth scrolling performance

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** 16.x or higher
- **pnpm** (recommended) or npm

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/shing-landing-page.git

# Navigate to project directory
cd shing-landing-page

# Install dependencies
pnpm install
# or: npm install

# Start development server
pnpm dev
# or: npm run dev
```

The app will open at **http://localhost:5173**

---

## 📁 Project Structure

```
shing-landing-page/
├── src/
│   ├── app/
│   │   ├── App.tsx                 # Main app component with responsive logic
│   │   └── components/             # Reusable React components
│   │       ├── ParallaxDemo.tsx
│   │       ├── ParallaxWrapper.tsx
│   │       └── figma/
│   │           └── ImageWithFallback.tsx
│   ├── imports/                    # Figma-imported components
│   │   ├── Desktop3.tsx            # Desktop layout component
│   │   ├── IPhone161.tsx           # Mobile layout component
│   │   ├── *.svg                   # SVG assets
│   │   └── svg-*.tsx/.ts           # SVG path data
│   └── styles/
│       ├── fonts.css               # Font imports
│       ├── index.css               # Main CSS entry
│       ├── tailwind.css            # Tailwind directives
│       └── theme.css               # Design tokens
├── package.json
├── vite.config.ts
└── tsconfig.json
```

---

## 🎯 Key Technologies

| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 18.3.1 | UI framework |
| **TypeScript** | 5.x | Type safety |
| **Tailwind CSS** | 4.1.12 | Utility-first styling |
| **Vite** | 6.3.5 | Build tool & dev server |
| **Motion** | 12.23.24 | Animations (Framer Motion) |
| **Material-UI** | 7.3.5 | Component library |
| **React Router** | 7.13.0 | Routing (if needed) |

---

## 🔧 Configuration

### Responsive Breakpoints

The app uses a custom scaling system defined in `App.tsx`:

- **Mobile** (<768px): Scales from 393px base width (IPhone161 component)
- **Tablet** (768px-1024px): Desktop layout at 60% scale
- **Desktop** (1024px-1440px): Desktop layout with proportional scaling
- **Large Desktop** (≥1440px): Desktop layout at 100%

### Fonts

The project uses **Open Sans** with weights: 400, 600, 700, 800

Imported in `/src/styles/fonts.css`

---

## 🎨 Customization

### Changing Colors

Edit design tokens in `/src/styles/theme.css`:

```css
:root {
  --primary: #030213;
  --secondary: oklch(0.95 0.0058 264.53);
  /* ... more tokens */
}
```

### Modifying Layout

- **Desktop layout**: Edit `/src/imports/Desktop3.tsx`
- **Mobile layout**: Edit `/src/imports/IPhone161.tsx`
- **Responsive logic**: Edit `/src/app/App.tsx`

---

## 🤝 Working with AI Assistants

This repository is designed to be easily understood by AI assistants (ChatGPT, Claude, etc.)

### To share with an AI:

1. **Share the repository URL**:
   ```
   "Here's my project: https://github.com/YOUR_USERNAME/shing-landing-page"
   ```

2. **Ask specific questions**:
   - "Can you help me change the kayak image in Desktop3.tsx, Group15?"
   - "How do I add a new section to the mobile layout?"
   - "Can you optimize the scaling logic in App.tsx?"

3. **For code changes**: The AI can provide exact file edits that you can apply directly

---

## 📝 Available Scripts

```bash
# Development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

---

## 🐛 Troubleshooting

### Figma Assets Not Loading

This project uses special `figma:asset` imports that are handled by Figma Make's build system. If you're running this locally outside of Figma Make:

- Assets use the format: `import img from "figma:asset/[hash].png"`
- These need to be converted to regular imports or URLs

### Scaling Issues

If the page doesn't scale properly:
- Check browser width matches expected breakpoints
- Verify scroll container has correct class: `scroll-container`
- Check console for any errors

---

## 📄 License

This project is intended for demonstration and educational purposes.

---

## 🙏 Credits

- **Design**: Imported from Figma
- **Images**: Adobe Stock, Pexels
- **Fonts**: Google Fonts (Open Sans)

---

## 📞 Support

For questions or issues:
- Open an issue on GitHub
- Share the repo URL with an AI assistant for help

---

**Built with ❤️ using Figma Make**
