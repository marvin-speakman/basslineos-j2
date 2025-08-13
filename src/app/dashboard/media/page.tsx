"use client";

import { useState } from 'react';

// This is a placeholder for the actual media data
const sampleMedia = [
    { name: 'My Awesome Mix.mp3', type: 'audio', size: '10.5 MB' },
    { name: 'promo-pic.jpg', type: 'image', size: '2.1 MB' },
    { name: 'live-set.mp4', type: 'video', size: '150.7 MB' },
];

export default function MediaPage() {
  const [media, setMedia] = useState(sampleMedia);

  const handleUpload = () => {
    // File upload logic will go here
    alert('Upload functionality coming soon!');
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-white">Media Manager</h1>
        <button
          onClick={handleUpload}
          className="bg-primary hover:bg-primary-light text-white font-bold py-2 px-4 rounded-lg transition-colors"
        >
          Upload Media
        </button>
      </div>
      <div className="bg-secondary rounded-lg shadow">
        <ul className="divide-y divide-gray-700">
          {media.map((item, index) => (
            <li key={index} className="p-4 flex justify-between items-center">
              <div>
                <p className="font-medium text-white">{item.name}</p>
                <p className="text-sm text-gray-400">{item.type} - {item.size}</p>
              </div>
              <button className="text-red-500 hover:text-red-400">Delete</button>
            </li>
          ))}
        </ul>
      </div>
       <p className="text-sm text-gray-500 mt-4">Showing {media.length} of 10 files. (Pro Plan Limit)</p>
    </div>
  );
}
