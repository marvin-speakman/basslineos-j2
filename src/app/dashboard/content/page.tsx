"use client";

// This will be a client component to handle form state and interactions.
import { useState } from 'react';

export default function ContentPage() {
  const [bio, setBio] = useState('');
  const [headerImageUrl, setHeaderImageUrl] = useState('');

  const handleSave = () => {
    // Logic to save the content to Supabase will go here
    console.log({ bio, headerImageUrl });
    alert('Content saved! (Simulation)');
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-8">Site Content</h1>
      <div className="space-y-8 max-w-2xl">
        <div>
          <label htmlFor="bio" className="block text-sm font-medium text-gray-300 mb-2">
            Your Bio
          </label>
          <textarea
            id="bio"
            rows={5}
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            className="block w-full px-3 py-2 bg-background border border-gray-600 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
            placeholder="Tell the world about yourself..."
          />
        </div>
        <div>
          <label htmlFor="headerImage" className="block text-sm font-medium text-gray-300 mb-2">
            Header Image URL
          </label>
          <input
            id="headerImage"
            type="text"
            value={headerImageUrl}
            onChange={(e) => setHeaderImageUrl(e.target.value)}
            className="block w-full px-3 py-2 bg-background border border-gray-600 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
            placeholder="https://example.com/your-image.jpg"
          />
           <p className="text-xs text-gray-500 mt-2">For now, please provide a URL. File uploads will be implemented later.</p>
        </div>
        <div>
          <button
            onClick={handleSave}
            className="bg-primary hover:bg-primary-light text-white font-bold py-2 px-4 rounded-lg transition-colors"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
