# Snack Scout MVP

Snack Scout is a mobile-first Next.js app for parents and caregivers to quickly evaluate kids snacks as **Great**, **Okay**, or **Skip**.

## Stack
- Next.js (App Router) + TypeScript
- Tailwind CSS
- shadcn/ui-style reusable UI components
- Supabase schema + seed scripts
- Vercel-ready layout

## MVP features delivered
- Landing page with polished value proposition, CTAs, 3-step flow, and example result cards
- Search page with category chips, filters, recent searches, and trending products
- Product result page with score, verdict, nutrition highlights, reasons, ingredient/allergen flags, swaps, and quick actions
- Saved page with tabs for saved / recent / shopping list and empty state
- Preferences page for household toggles
- Compare page for 2-3 products with recommendation tags
- Scan page UI flow with barcode scanner placeholder + fallback routes
- Upload label placeholder page wired for OCR extension

## Scoring logic
Scoring starts at 100 and applies deterministic adjustments for:
- Added sugar (negative)
- Fiber (positive)
- Protein (slight positive)
- Sodium (negative)
- Artificial dyes (negative)
- Simpler ingredient list (positive)
- Whole grain / fruit-forward signals (positive)

Verdict mapping:
- Great: 75+
- Okay: 50-74
- Skip: < 50

## Local development
1. Install dependencies:
   ```bash
   npm install
   ```
2. Create `.env.local`:
   ```bash
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```
3. Run dev server:
   ```bash
   npm run dev
   ```

## Supabase setup
1. Create a Supabase project.
2. Run SQL from `supabase/schema.sql`.
3. Seed starter rows from `supabase/seed.sql`.
4. (Optional) Replace mock local data source with Supabase queries in server actions.

## Project structure
- `app/` pages and route UI
- `components/ui/` base shadcn-style primitives
- `components/snack/` reusable snack product components
- `lib/scoring.ts` scoring and reason helpers
- `lib/data/products.ts` mock dataset (20 snacks)
- `lib/supabase/client.ts` Supabase client stub
- `supabase/` SQL schema and seed scripts

## What is mocked now
- Auth is stubbed (no sign-in flow)
- Save/shopping actions are UI only
- Scanner and label OCR are placeholders
- Search/filter chips are non-persisted client-side MVP interactions

## Recommended next steps
1. Connect products, preferences, saved items, and shopping list to Supabase.
2. Add auth (Supabase Auth magic link or OAuth).
3. Integrate barcode lookup + nutrition API provider abstraction.
4. Add OCR parser pipeline for uploaded label images.
5. Add robust tests and analytics.
