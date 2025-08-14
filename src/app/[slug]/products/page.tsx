"use client";

import { loadStripe } from '@stripe/stripe-js';

// Placeholder for product data
const sampleProducts = [
  { id: 'prod_1', name: 'T-Shirt', price: 2500, imageUrl: 'https://via.placeholder.com/300' },
  { id: 'prod_2', name: 'Stickers (Sheet)', price: 1000, imageUrl: 'https://via.placeholder.com/300' },
  { id: 'prod_3', name: 'USB Drive with exclusive mix', price: 4000, imageUrl: 'https://via.placeholder.com/300' },
  { id: 'prod_4', name: 'Signed Poster', price: 5000, imageUrl: 'https://via.placeholder.com/300' },
];

// Load Stripe.js outside of a component’s render to avoid
// recreating the Stripe object on every render.
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function ProductListPage() {

  const handleCheckout = async (product: typeof sampleProducts[0]) => {
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          productId: product.id,
          productName: product.name,
          priceInCents: product.price,
        }),
      });

      const { sessionId } = await response.json();
      const stripe = await stripePromise;
      if (stripe) {
        await stripe.redirectToCheckout({ sessionId });
      }
    } catch (error) {
      console.error('Error during checkout:', error);
      alert('Checkout failed. Please try again.');
    }
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-white mb-8">Merchandise</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {sampleProducts.map((product) => (
          <div key={product.id} className="bg-secondary rounded-lg overflow-hidden group">
            <div className="h-64 bg-gray-700">
                {/* Image placeholder */}
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold text-white">{product.name}</h3>
              <p className="text-xl font-semibold text-primary-light mt-2">${(product.price / 100).toFixed(2)}</p>
              <button
                onClick={() => handleCheckout(product)}
                className="w-full mt-4 bg-primary text-white py-2 rounded-lg"
              >
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
