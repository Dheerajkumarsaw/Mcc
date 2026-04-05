# Marketing Command Center

AI-powered marketing campaign generator that turns any product URL into a complete, multi-channel marketing kit in seconds.

Paste a product URL and your affiliate link — get ready-to-publish content for **Email, Twitter, Instagram & Facebook**, each with a marketing slogan and an AI-generated image prompt.

## Features

- **Multi-Channel Content** — Generates email snippets, Twitter posts (x3), Instagram captions, and Facebook posts from a single URL
- **Affiliate Link Guaranteed** — Every piece of content includes your affiliate link, validated post-generation
- **Visual Hooks** — Each channel gets a catchy marketing slogan + a detailed text-to-image prompt (for Midjourney, DALL-E, etc.)
- **Smart Scraping** — Automatically extracts product title and description using Cheerio
- **One-Click Copy** — Copy any content piece or image prompt to clipboard instantly
- **Animated UI** — Smooth entrance animations, loading step indicators, and interactive hover effects
- **Responsive Design** — Fully responsive across desktop, tablet, and mobile
- **Multi-Page Site** — Home, Services, About, Testimonials, Contact, and Generate pages

## Tech Stack

| Technology | Purpose |
|------------|---------|
| [Next.js 16](https://nextjs.org/) (App Router) | React framework with server-side API routes |
| [TypeScript](https://www.typescriptlang.org/) | Type-safe codebase |
| [Tailwind CSS v4](https://tailwindcss.com/) | Utility-first styling |
| [Cheerio](https://cheerio.js.org/) | Lightweight HTML parsing for URL scraping |
| [Qwen 3.5 via osmAPI](https://osmapi.com/) | LLM-powered content generation |

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/marketing-command-center.git
cd marketing-command-center

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
```

### Environment Variables

Create a `.env.local` file in the root directory:

```env
OSM_API_KEY=your_osm_api_key_here
```

Get your API key from [osmAPI](https://osmapi.com/).

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
app/
├── page.tsx                 # Home page — hero, features, how it works
├── layout.tsx               # Root layout with navbar + footer
├── globals.css              # Tailwind + custom animations
├── generate/page.tsx        # Campaign generator tool
├── services/page.tsx        # Services overview
├── about/page.tsx           # Company story, values, team
├── testimonials/page.tsx    # User testimonials
├── contact/page.tsx         # Contact form + info
└── api/generate/route.ts    # POST API — scrape + AI generate

components/
├── Navbar.tsx               # Sticky nav with mobile menu
├── Footer.tsx               # Site footer
├── CampaignForm.tsx         # Form with animated loading steps
├── HeroSection.tsx          # Reusable hero component
└── ResultCard.tsx           # Content card with visual banner + copy

lib/
├── types.ts                 # Shared TypeScript interfaces
├── scraper.ts               # Cheerio-based URL metadata extraction
└── qwen.ts                  # Qwen AI client, prompts, response parsing
```

## How It Works

1. **Paste a URL** — Enter any product or article page URL
2. **Add your affiliate link** — Your unique tracking link
3. **AI generates content** — Qwen 3.5 creates platform-specific marketing copy
4. **Get your kit** — Email, Twitter, Instagram, Facebook content + slogans + image prompts
5. **Copy & publish** — One-click copy for each piece

## API Endpoint

```
POST /api/generate
Content-Type: application/json

{
  "productUrl": "https://example.com/product",
  "affiliateLink": "https://your-affiliate-link.com/ref/123"
}
```

**Response:**

```json
{
  "success": true,
  "data": {
    "email": "Subject: ...\n\nBody...",
    "twitter": ["Tweet 1...", "Tweet 2...", "Tweet 3..."],
    "instagram": "Caption with #hashtags...",
    "facebook": "Engaging post...",
    "visuals": {
      "email": { "slogan": "...", "imagePrompt": "..." },
      "twitter": { "slogan": "...", "imagePrompt": "..." },
      "instagram": { "slogan": "...", "imagePrompt": "..." },
      "facebook": { "slogan": "...", "imagePrompt": "..." }
    }
  }
}
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Landing page with features, stats, and how-it-works |
| `/generate` | The campaign generator tool |
| `/services` | Detailed service descriptions with flow diagram |
| `/about` | Company story, values, and team |
| `/testimonials` | User reviews with ratings |
| `/contact` | Contact form, FAQ, and office info |

## Deploy on Vercel

The easiest way to deploy is with [Vercel](https://vercel.com/new):

1. Push your code to GitHub
2. Import the repo on Vercel
3. Add `OSM_API_KEY` to Environment Variables
4. Deploy

## License

MIT
