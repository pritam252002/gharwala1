# GharKa (घर का) - Homestyle Tiffin Service Delhi NCR

> **"Ghar jaisa khana, roz."**  
> A modern, mobile-first, responsive multi-page website built for Delhi NCR's premium home-style tiffin subscription service.

---

## 🎨 Brand Identity & Design System

- **Warm Saffron / Turmeric Orange (`#E8830C`)**: Symbolizing warm aromatic tadka, desi cow ghee, haldi, and sunlit Indian afternoons.
- **Deep Forest Green (`#2F5D3A`)**: Symbolizing farm-fresh mandi vegetables, coriander, hygiene, and wholesome health.
- **Warm Cream Canvas (`#FFF8EC`)**: Soft, culinary background evoking comforting warmth and malai/rabdi hues.
- **Typography**: Clean, friendly, modern paired typography using Google Fonts (**Outfit** for bold, welcoming headings and **Plus Jakarta Sans** for readable body copy).

---

## 📁 Project Architecture & Clean URLs

The site is built with clean, zero-dependency, ultra-performant HTML5, CSS3, and modern Vanilla JavaScript, configured for **100/100 Lighthouse Performance** and ready for one-click deployment to **Vercel**, **Netlify**, or any static host with clean URLs:

```
gharka-tiffin-website/
├── index.html                   # 1. Home Page (/)
├── about/
│   └── index.html               # 2. About Us (/about)
├── menu/
│   └── index.html               # 3. Weekly Rotating Menu (/menu)
├── services/
│   └── index.html               # 4. Subscription Plans & Calculator (/services)
├── contact/
│   └── index.html               # 5. Contact & Lead Form (/contact)
├── privacy-policy/
│   └── index.html               # 6. Privacy Policy (/privacy-policy)
├── sitemap.xml                  # Complete XML Sitemap with all 6 URLs
├── robots.txt                   # Search Engine Directive pointing to sitemap.xml
├── vercel.json                  # Clean URLs & Cache Control configuration for Vercel
├── assets/
│   ├── css/
│   │   └── style.css            # Comprehensive responsive CSS design system
│   ├── images/
│   │   ├── logo.svg             # Handcrafted SVG 3-tier Indian steel tiffin logo
│   │   └── favicon.svg          # Stylized tiffin favicon
│   └── js/
│       ├── main.js              # Header scroll, mobile drawer, modal, pincode checker, GA4 lead helper
│       ├── menu-data.js         # Complete weekly rotating dishes database (Mon-Sun, 4 categories)
│       ├── menu.js              # Interactive diet category tabs & day-of-week switcher
│       ├── calculator.js        # Interactive subscription plan customizer & price calculator
│       ├── testimonials.js      # Customer reviews carousel with autoplay & mobile touch swipe
│       └── contact.js           # Working enquiry form validation & GA4 generate_lead dispatch
└── README.md
```

---

## 🚀 Key Features & Interactivity

1. **Shared Responsive Header & Mobile Drawer:**
   - Sticky header with frosted glass backdrop blur.
   - Live delivery status indicator in announcement bar.
   - Animated mobile hamburger toggle and slide-in off-canvas navigation drawer with focus management.
   - "Order Trial Tiffin" header CTA accessible on every page.

2. **Weekly Rotating Menu System (`/menu`):**
   - 4 Dietary Categories: **Classic Veg Thali**, **Jain Satvik** (Strictly no onion, no garlic, no root vegetables), **Light & Diet** (High protein, low carb/oil, multigrain), and **Student Budget Special** (Hearty, pocket-friendly comfort).
   - Day-of-the-Week Switcher (Monday to Sunday) showcasing rotating lunch and dinner preparations with calories, protein breakdown, full box inclusions, and direct WhatsApp order button.

3. **Interactive Plan Customizer & Price Calculator (`/services`):**
   - Interactive slider (1 to 30 days) and schedule switcher (Lunch Only, Dinner Only, Both).
   - Dynamic live price, per-meal cost, and savings calculation comparing against restaurant takeout.
   - Pre-fills a WhatsApp message with the exact configured meal choices for 1-click checkout.

4. **Customer Testimonials Slider (`/`):**
   - Verified reviews from Delhi professionals, students, doctors, and senior residents.
   - Autoplay every 5 seconds, pause-on-hover, next/previous buttons, dot indicators, and touch swipe gestures for mobile phones.

5. **Instant Delhi NCR Pincode Checker (`/` & `/services`):**
   - Validates user's 6-digit PIN code against serviceable zones in South Delhi, Central Delhi, North Campus, West Delhi, Noida, and Gurgaon.

6. **Order a Trial Tiffin Modal:**
   - Accessible pop-up dialog available sitewide allowing users to order a 1-day trial box (₹139) with direct WhatsApp dispatch.

7. **Working Contact & Lead Generation Form (`/contact`):**
   - Client-side validation: Indian 10-digit mobile number, email regex, full name, delivery area, and diet preference.
   - Success confirmation banner upon submission with direct WhatsApp fallback.
   - Dispatches Google Analytics 4 event:
     ```javascript
     gtag('event', 'generate_lead', {
       event_category: 'Contact',
       event_label: 'Main Enquiry Form',
       value: estimatedPlanValue,
       currency: 'INR'
     });
     ```

8. **Sticky "Order on WhatsApp" Button:**
   - High-contrast floating pill on mobile devices with pulsating online badge and prefilled greeting text.

---

## 🔍 SEO & Technical Implementation

- **Unique `<title>` and `<meta name="description">`** customized for every single page.
- **One `<h1>` per page** structured with logical `<h2>` and `<h3>` heading hierarchies.
- **Schema.org LocalBusiness (`FoodEstablishment`) JSON-LD** embedded in all `<head>` sections with Delhi postal address, geo coordinates, opening hours, and price range.
- **Google Analytics 4 Tag Placeholder** (`G-XXXXXXXXXX`) ready in `<head>` on all 6 pages.
- **Image Optimization:** High-resolution culinary imagery with descriptive filenames, explicit `alt` attributes, and `loading="lazy"`.
- **Search Engine Assets:** Valid `sitemap.xml` and `robots.txt` generated.

---

## 💻 Local Testing & Deployment

### Run Locally:
Open `index.html` directly in any web browser, or serve using any static web server:

```bash
# Using Node's npx serve
npx serve .

# Or using Python
python -m http.server 8000
```

### Deploy to Vercel:
The project includes a ready-to-deploy `vercel.json` with clean URLs enabled:
```bash
vercel deploy --prod
```
Or simply drag-and-drop the `gharka-tiffin-website` folder into the [Vercel Dashboard](https://vercel.com).
