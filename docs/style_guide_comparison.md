# Beverage Brand Website Style Guide Comparison

[TOC]



## Recommendations for Mushroom Beverage Startup

Based on this analysis, consider which positioning aligns with your brand:

### Wellness-Focused (OLIPOP Style)
- Hunter greens, earthy tones
- Clean sans-serif typography
- Health benefit callouts
- Natural product photography
- Educational content about ingredients

### Premium Natural (Fiji/Evian Style)
- Minimalist design with generous whitespace
- Soft, natural color palettes
- Premium typography (custom fonts)
- Sustainability messaging
- Sophisticated, aspirational imagery

### Bold Disruptor (Liquid Death Style)
- High contrast design
- Edgy, memorable branding
- Strong brand voice
- Minimal, industrial aesthetic
- Social media-first approach

### Playful Functional (LaCroix Style)
- Vibrant, colorful palette
- Animated elements
- Product-specific color coding
- Whimsical brand personality
- Lifestyle photography

**Key Takeaway:** Mushroom beverages sit at the intersection of wellness and innovation—consider blending OLIPOP's health-conscious design with either Liquid Death's bold disruption or LaCroix's playful approachability, depending on your target demographic.

## Key Patterns Across Brands

### Color Psychology
- **Blues** → Trust, refreshment, hydration (Smartwater, Fiji, Red Bull)
- **Greens** → Health, wellness, natural (OLIPOP)
- **Red** → Energy, excitement, boldness (Coca-Cola, Red Bull)
- **Black/White** → Premium, sophistication, rebellion (Liquid Death, Evian)
- **Vibrant Multi-color** → Playfulness, variety, joy (LaCroix)

### Typography Trends
- Custom brand fonts for differentiation (Bull, Acumin Pro, Graphik, Ano)
- Standard weights: 400 (regular), 600-700 (bold)
- System fallbacks: Helvetica, Arial, sans-serif
- Large heading ranges: 32-96px desktop, 12-16px body

### Button Styles
- **Pill-shaped trending** → High border radius (8000px, 9999px for full pills)
- **Minimal rounding** → 2-24px for modern clean look
- **Clear states** → Distinct hover, pressed, disabled, focus treatments
- **Accessibility** → 48px+ minimum touch targets

### Spacing Systems
- **8px increment scales** → Consistent spacing (8, 16, 24, 32, 40, etc.)
- **Mobile-first responsive** → Smaller gutters mobile (16-22px), larger desktop (24-55px)
- **Generous whitespace** → Premium brands use more spacing
- **Grid-based layouts** → 12-column systems common

### Design Aesthetic Spectrum
- **Minimalist Luxury** → Evian, Fiji (clean, white space, natural imagery)
- **Bold Rebellion** → Liquid Death (high contrast, edgy, industrial)
- **Playful Wellness** → LaCroix, OLIPOP (vibrant, whimsical, health-focused)
- **Premium Energy** → Red Bull (dark, immersive, high-tech)
- **Classic Brand Power** → Coca-Cola (iconic colors, traditional meets modern)

---

## Brand-by-Brand Analysis

### 1. Coca-Cola
**Website:** [https://www.coca-cola.com](https://www.coca-cola.com)

#### Colors
- Primary Red: `#ea0000`
- Black: `#000000`
- White: `#ffffff`
- Grays: `#6c6c6c`, `#353535`, `#4f4f4f`, `#d5d5d5`

#### Typography
- Bold headings with -1.5px letter spacing
- Body: 12-16px sizes, 20-24px line heights
- Heading sizes: 32-96px on desktop

#### Buttons
- Ultra-rounded: `8000px` border radius (pill shape)
- States: default, hover `#353535`, pressed `#4f4f4f`, disabled `#6c6c6c`

#### Design Aesthetic
Bold brand presence with iconic red, modern and accessible, clean black/white contrast

---

### 2. Pepsi
**Website:** [https://www.pepsi.com](https://www.pepsi.com)

**Status:** Site blocked automated access (403 error)

---

### 3. Red Bull
**Website:** [https://www.redbull.com](https://www.redbull.com)

#### Colors
- Deep Navy: `#00162b`
- Brand Red: `#db0a40` (hover: `#f61a4f`)
- White: `#fff`
- Light Gray: `#f8f8f8`

#### Typography
- Font: "Bull" (weights 700-800, variable font "Bull VF")
- Body: "Bull Text" (400, 500, 700)
- Fallback: Helvetica, sans-serif

#### Buttons
- Pill-shaped: `border-radius: 18-24px`
- Backdrop blur effects with semi-transparent backgrounds
- Focus: Blue ring `#1b6aee` with white outline

#### Unique Elements
- Live pulse animations on badges
- Glassmorphism (backdrop blur + transparency)
- Smooth cubic-bezier transitions (`cubic-bezier(.35,0,0,1)`)
- Panoptikum carousel with zoom animations
- Floating sponsor cards
- Persistent header with progressive blur

#### Design Aesthetic
Dark, immersive, high-energy premium brand with modern minimalism

---

### 4. Gatorade
**Website:** [https://www.gatorade.com](https://www.gatorade.com)

**Status:** Site blocked automated access (403 error)

---

### 5. Evian
**Website:** [https://www.evian.com](https://www.evian.com)

#### Colors
- White: `#ffffff` (dominant)
- Black: `#000000`
- Pink/Rose: `#f78da7`, `#ffe1e7`
- Cyan-blue: `#0693e3`

#### Typography
- Font: "Neue Helvetica® W05"
- Weights: 35 Thin, 45 Light, 65 Medium, 75 Bold
- Sizes: 13px (small) to 42px (x-large)

#### Buttons
- Dark background: `#32373c`
- White text
- Fully rounded: `border-radius: 9999px`
- Padding: `calc(.667em + 2px) calc(1.333em + 2px)`

#### Layout
- CSS Grid/Flexbox implementation
- Default gap: 0.5em
- Column gaps: 2em
- Preset spacing scale: 0.44rem to 5.06rem

#### Design Aesthetic
Minimalist luxury, clean white space, Alpine water imagery, sophisticated elegance

---

### 6. Fiji Water
**Website:** [https://www.fijiwater.com](https://www.fijiwater.com)

#### Colors
- Primary Turquoise: `#00bfd6`
- Navy: `#041c2c`
- Accent Red: `#d52a23` (errors)
- White and neutral grays

#### Typography
- Font: Futura (primary)
- System-friendly sans-serif fallbacks
- Futura applied to form labels and promotional text

#### Buttons
- Light blue/turquoise backgrounds
- 48px minimum height (3rem) for accessibility
- Clean, minimal aesthetic
- "all: unset" CSS reset approach
- Focus states outlined; disabled states show "not-allowed" cursor

#### Layout
- 12-column responsive grid
- Mobile-first breakpoints: 580px, 768px, 1024px, 1280px
- Flexbox-based component layouts
- 1rem standard padding unit

#### Unique Elements
- Builder.io page composition system
- NProgress loading bar with custom styling
- CSS keyframe animations for reveals
- Skip navigation link (accessibility-focused)
- Pencil banner promotional component

#### Design Aesthetic
Clean luxury minimalism with tropical imagery, sustainability focus, professional aspirational tone

---

### 7. Smartwater
**Website:** [https://www.coca-cola.com/us/en/brands/smartwater](https://www.coca-cola.com/us/en/brands/smartwater)

#### Colors
- Primary Blue: `#0033a1`
- Hover Blue: `#2952af`
- Disabled: `#4c6eba`
- Dark Gray: `#1b2765`
- Light Gray: `#f4f4f4`
- White: `#ffffff`
- Black: `#000000`

**Status Colors:**
- Critical: `#bf1004`
- Positive: `#1d6e17`
- Warning: `#725d27`
- Info: `#0048ff`

#### Typography
- Font: "Graphik trial" (normal, bold)
- Line heights: 20px (body) to 112px (large headings)
- Bold weight for headings, normal for body/actions

#### Buttons
- Pill-style: `8000px` border radius
- Primary: Blue `#0033a1`, hover `#2952af`
- Secondary: White background with blue text
- Disabled: `#a3b3d8`
- Text buttons with interactive opacity changes

#### Spacing
- Mobile gutter: 16px, Desktop: 24px
- Mobile margins: 24px
- Spacing scale: 8px increments (xs: 8px to 5xl: 80px)
- Module-to-module vertical spacing: 56px mobile, 120px desktop

#### Unique Elements
- "Inverse" color variants for alternate backgrounds
- Floating action buttons with custom SVG icons
- Cookie preference management
- Dynamic data layer integration for analytics
- CSS custom properties for theme switching

#### Design Aesthetic
Smart hydration positioning, clean modern aesthetics, celebrity endorsement (Jennifer Aniston), emphasis on clarity through generous spacing

---

### 8. LaCroix
**Website:** [https://www.lacroixwater.com](https://www.lacroixwater.com)

#### Colors
- Navy Blue: `#001f5f` (primary brand)
- Light Cyan: `#ade5ff`

**Flavor-Specific Palette:**
- Pink: `#ffb9ea`, `#ffb2d7`
- Yellow/Lemon: `#feff65`, `#feff76`
- Green/Lime: `#aeff88`, `#b4ff79`
- Orange/Coral: `#ffa942`, `#ffae4e`
- Purple/Lavender: `#e8b7ff`, `#e0cdff`

#### Typography
- Structured typographic hierarchy
- Bold headings with larger point sizes
- Standard web-safe fonts for body text
- Consistent sizing and weight for navigation

#### Buttons
- "Find in store" prominent CTAs
- "Sign Up" newsletter buttons
- Navigation CTAs: "Recipes," "Shop," "Find In Store"
- Rounded, accessible styling

#### Layout
- Grid-based responsive layout
- Hero carousel sections for featured products
- Featured content cards with consistent spacing
- Footer organized in three column groups

#### Unique Elements
- **Animated SVG graphics** → Floating lemons, limes, sun, bubbles, trees
- **Flavor color system** → Each product gets personalized color treatment
- **Pencil bar** → Decorative messaging element with dynamic coloring
- **Product carousel** → Interactive flavor exploration
- **Emoji descriptions** → Fun character descriptions for flavor personality
- **UGC grid module** → User-generated content integration

#### Design Aesthetic
Playful, vibrant, modern with light airy color palette. "Taste of Wonder" messaging reinforces aspirational lifestyle positioning. Whimsical brand voice celebrating refreshment and positivity.

---

### 9. Liquid Death
**Website:** [https://www.liquiddeath.com](https://www.liquiddeath.com)

#### Colors
- Black: `#141414` (dominant background)
- White/Off-white: `#f6f6f6`, `#fff`
- Accent Blue: `rgba(37, 99, 235, 1)`
- Gray: `#333`, `#545454` (hover/borders)

#### Typography
- Font: 'Acumin Pro' (custom)
- Weights: 400 (regular), 600 (semibold), 700 (bold)
- Fallback: System font stack
- Custom font metrics: ascent 90%, descent 10%

#### Buttons
- Black backgrounds with white text
- Transparent backgrounds for secondary actions
- Hover state: Dark gray `#333`
- Sharp or minimal rounding
- Compact padding: 6-16px

#### Spacing
- Compact spacing: 6-16px padding standard
- Gap patterns: 8-20px between elements
- Max-width controls: 332px constraints on components
- Mobile-first design

#### Unique Elements
- Preview control bar with fixed positioning
- Custom variant indicators (A/B testing UI)
- Font metrics optimization to prevent layout shift
- Underline decoration on links

#### Design Aesthetic
Industrial, rebellious brand voice. High contrast black/white dominance with minimal ornamentation. Sharp, direct visual hierarchy. "Murder Your Thirst" branding suggests bold, aggressive positioning.

---

### 10. OLIPOP
**Website:** [https://www.drinkolipop.com](https://www.drinkolipop.com)

#### Colors
- Hunter Green: `#14433D` (primary brand color)
- White: `#ffffff`
- Dark Gray/Charcoal: `#3a3a3a` (body text, navigation)
- Light Gray: `#ebebeb` (borders)
- Sale Red: `#fa4545` (promotional)
- Soft Beige: `rgba(51, 50, 50, 0.05)` (subtle backgrounds)

#### Typography
- Headers: "Ano" (Regular, Bold, 900), "WindsorEF" (Ultra Heavy, Bold)
- Body: Helvetica, Arial, sans-serif stack
- Sizes: 12px (h6) to 65px (mega-title-large)

#### Buttons
- Hunter green backgrounds (`#3a3a3a` fallback)
- White text
- Minimal rounding: `2px` border radius
- Darkened state: `#212121`
- Transparent variant with 80% opacity
- Focus state: `#606060`

#### Links
- Body text color inherited
- 0.6 opacity on hover
- Focus: `#606060`
- Subtle transitions: 250ms default duration

#### Layout
- Site width: 1200px
- Desktop gutters: 55px, Mobile: 22px
- Section spacing: 55px standard, 35px reduced
- Input groups: 10-18px padding with 46px heights

#### Unique Elements
- **Wave SVG graphics** → `home-banner-new-wave.png`, `story-mission-wave.png` for organic section dividers
- **Custom SVG icons** → Ratings/emotions
- **Animated transitions** → Cubic-bezier easing curves throughout
- Natural product photography emphasis

#### Design Aesthetic
Clean modern minimalism with health-conscious positioning. Balances sophisticated typography with playful, colorful product imagery. Emphasis on digestive health benefits and natural ingredients.

---
