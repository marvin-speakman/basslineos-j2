-- Enum for subscription tiers
CREATE TYPE subscription_tier AS ENUM ('Starter', 'Pro', 'Studio');

-- Users table to store public profile information
-- This table will have a one-to-one relationship with auth.users
CREATE TABLE users (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  username TEXT UNIQUE NOT NULL,
  full_name TEXT,
  avatar_url TEXT,
  -- Subscription details
  subscription_status subscription_tier DEFAULT 'Starter',
  stripe_customer_id TEXT,
  stripe_subscription_id TEXT
);

-- Sites table to store data for each DJ's public website
CREATE TABLE sites (
  id SERIAL PRIMARY KEY,
  user_id UUID UNIQUE NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  site_slug TEXT UNIQUE NOT NULL, -- for URLs like dj-platform.com/[site_slug]
  header_image_url TEXT,
  bio TEXT,
  mixcloud_url TEXT,
  instagram_url TEXT,
  google_calendar_url TEXT,
  -- Theme options
  accent_color TEXT DEFAULT '#6D28D9',
  -- Timestamps
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Social Links Table
CREATE TABLE social_links (
  id SERIAL PRIMARY KEY,
  site_id INTEGER NOT NULL REFERENCES sites(id) ON DELETE CASCADE,
  platform TEXT NOT NULL, -- e.g., 'Facebook', 'Twitter', 'SoundCloud'
  url TEXT NOT NULL,
  -- Timestamps
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Music, Images, Videos (for Pro/Studio)
-- A single table for media uploads can simplify things
CREATE TYPE media_type AS ENUM ('audio', 'video', 'image');

CREATE TABLE media (
  id SERIAL PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  file_path TEXT NOT NULL, -- Path in Supabase Storage
  file_name TEXT,
  file_type media_type NOT NULL,
  title TEXT,
  description TEXT,
  -- Timestamps
  uploaded_at TIMESTAMPTZ DEFAULT NOW()
);

-- Products Table (for Studio)
CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  description TEXT,
  price_in_cents INTEGER NOT NULL,
  image_url TEXT,
  stripe_product_id TEXT,
  -- Timestamps
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Function to create a user profile when a new user signs up in auth
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.users (id, username)
  VALUES (new.id, new.email); -- Using email as initial username, can be changed by user
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger to call the function after a new user is created
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();
