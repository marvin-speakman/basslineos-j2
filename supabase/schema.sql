-- Enum for subscription tiers
CREATE TYPE subscription_tier AS ENUM ('Starter', 'Pro', 'Studio');
CREATE TYPE user_role AS ENUM ('user', 'admin');

-- Users table to store public profile information
CREATE TABLE users (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  username TEXT UNIQUE NOT NULL,
  full_name TEXT,
  avatar_url TEXT,
  role user_role DEFAULT 'user',
  -- Subscription details
  subscription_status subscription_tier DEFAULT 'Starter',
  stripe_customer_id TEXT,
  stripe_subscription_id TEXT
);

-- Sites table to store data for each DJ's public website
CREATE TABLE sites (
  id SERIAL PRIMARY KEY,
  user_id UUID UNIQUE NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  site_slug TEXT UNIQUE NOT NULL,
  header_image_url TEXT,
  bio TEXT,
  mixcloud_url TEXT,
  instagram_url TEXT,
  google_calendar_url TEXT,
  -- Theme options
  accent_color TEXT DEFAULT '#6D28D9',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Other tables (social_links, media, products) remain the same...

-- Function to create a user profile when a new user signs up in auth
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.users (id, username)
  VALUES (new.id, new.email);
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger to call the function after a new user is created
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();