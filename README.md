# SV Web - Company Website

Official website for SV (dry.pe) - Software development services company.

## 🚀 Tech Stack

- **Framework:** Next.js 15.x (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4.x
- **UI Components:** Tailwind Plus "Radiant" template
- **Database:** Airtable (for contact form)
- **Deployment:** Vercel

## 📁 Project Structure

```
sv-web/
├── src/
│   ├── app/
│   │   ├── api/contact/       # Contact form API endpoint
│   │   ├── company/            # Company page
│   │   ├── form/               # Contact form page
│   │   ├── pricing/            # Pricing page
│   │   ├── thank-you/          # Thank you page
│   │   ├── layout.tsx          # Root layout
│   │   └── page.tsx            # Home page
│   ├── components/             # Reusable UI components
│   └── styles/                 # Global styles
├── public/                     # Static assets
├── CLAUDE.md                   # Project specifications
└── .env.local                  # Environment variables (not in git)
```

## 🔧 Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Variables

Create a `.env.local` file with:

```bash
AIRTABLE_TOKEN=your_airtable_personal_access_token
AIRTABLE_BASE_ID=your_airtable_base_id
AIRTABLE_CONTACTS_TABLE_ID=tblO9hrrMu1gfvKzU
AIRTABLE_COMPANIES_TABLE_ID=tblihUO6jVOu6jsFb
```

Get credentials from 1Password:
```bash
op item get "airtable sv contacts" --fields credential --reveal
op item get "airtable sv contacts" --fields "database id"
```

### 3. Run Development Server

```bash
npm run dev
```

Visit: http://localhost:3000

### 4. Test on Mobile (same WiFi)

Access from mobile device using your local network IP

## 📄 Pages

- **Home** (`/`) - Hero, features, testimonials
- **Pricing** (`/pricing`) - Service pricing tiers
- **Company** (`/company`) - About, team, investors
- **Contact** (`/form`) - Lead capture form
- **Thank You** (`/thank-you`) - Post-submission confirmation

## 🔌 API Endpoints

### POST `/api/contact`

Contact form submission with Airtable integration.

**Fields:**
- `email` (required)
- `contact_name` (required)
- `phone_number` (optional)
- `company` (optional)

**Features:**
- Auto-creates companies in Airtable if they don't exist
- Links contacts to companies automatically
- Returns success/error JSON response

## 🎨 Design System

**Colors:**
- Background: `#FAF9F6`
- Text: `#0F0F0F`
- CTA Buttons: `#0B6E4F`

**Fonts:**
- Switzer (via Fontshare)

## 🚀 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Connect repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

```bash
npm run build  # Verify build locally first
```

## 📝 Development

### Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Key Features

- ✅ Server-side rendering (SSR)
- ✅ Static site generation (SSG)
- ✅ TypeScript type safety
- ✅ Responsive design (mobile-first)
- ✅ SEO optimized
- ✅ Form validation
- ✅ Error handling

## 🔒 Security

- Environment variables never committed
- Airtable credentials via 1Password CLI
- Form validation on client and server
- HTTPS only in production

## 📚 Documentation

See `CLAUDE.md` for complete project specifications and implementation details.

## 👤 Author

**SV** - Software Services
Lima, Peru

---

Built with Next.js 15 and Tailwind CSS
