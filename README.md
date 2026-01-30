# Find A Way CIC Website

A modern Next.js website for Find A Way CIC, a family psychology service in Yorkshire.

## Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Installation

1. Unzip the project folder

2. Open a terminal in the project directory

3. Install dependencies:
```bash
npm install
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
findaway-website/
├── app/
│   ├── globals.css      # Global styles & Tailwind
│   ├── layout.js        # Root layout with metadata
│   └── page.jsx         # Main website component
├── public/
│   ├── favicon.svg      # SVG favicon
│   ├── favicon-16x16.png
│   ├── favicon-32x32.png
│   ├── favicon-48x48.png
│   ├── favicon-512x512.png
│   └── apple-touch-icon.png
├── next.config.js       # Next.js configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── postcss.config.js    # PostCSS configuration
└── package.json         # Dependencies & scripts
```

## Brand Colours

| Colour | Hex | Usage |
|--------|-----|-------|
| Cream | `#FDF8F3` | Main background |
| Warm White | `#FEFCFA` | Alternate background |
| Peach | `#FFE8D6` | Soft accent |
| Coral | `#D27056` | Primary accent |
| Sage | `#81B29A` | Secondary accent |
| Navy | `#3D405B` | Text & headings |
| Gold | `#F2CC8F` | Tertiary accent |
| Soft Pink | `#F4E4DC` | Subtle tints |

## Building for Production

```bash
npm run build
npm run start
```

## Deployment

This site can be deployed to:
- Vercel (recommended for Next.js)
- Netlify
- Any Node.js hosting platform

For Vercel, simply connect your Git repository and it will auto-deploy.
