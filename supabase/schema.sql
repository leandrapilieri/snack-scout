create extension if not exists "uuid-ossp";

create table if not exists public.products (
  id uuid primary key default uuid_generate_v4(),
  slug text unique not null,
  name text not null,
  brand text not null,
  category text not null,
  calories int not null,
  added_sugar_g numeric not null,
  fiber_g numeric not null,
  protein_g numeric not null,
  sodium_mg numeric not null,
  ingredients text[] not null,
  allergens text[] not null default '{}',
  flags text[] not null default '{}',
  image text not null,
  created_at timestamptz not null default now()
);

create table if not exists public.saved_items (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid not null,
  product_id uuid not null references public.products(id) on delete cascade,
  created_at timestamptz not null default now(),
  unique(user_id, product_id)
);

create table if not exists public.shopping_list (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid not null,
  product_id uuid not null references public.products(id) on delete cascade,
  quantity int not null default 1,
  created_at timestamptz not null default now(),
  unique(user_id, product_id)
);

create table if not exists public.user_preferences (
  user_id uuid primary key,
  low_sugar boolean not null default false,
  nut_free boolean not null default false,
  dairy_free boolean not null default false,
  gluten_aware boolean not null default false,
  dye_aware boolean not null default false,
  protein_focused boolean not null default false,
  lunchbox_friendly boolean not null default false,
  toddler_friendly boolean not null default false,
  avoid_artificial_sweeteners boolean not null default false,
  avoid_seed_oils boolean not null default false,
  updated_at timestamptz not null default now()
);
