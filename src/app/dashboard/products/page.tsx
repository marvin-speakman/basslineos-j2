"use client";

import { useState } from 'react';

// Placeholder for product data
const sampleProducts = [
  { id: 1, name: 'T-Shirt', price: 2500, stock: 50 },
  { id: 2, name: 'Stickers (Sheet)', price: 1000, stock: 100 },
  { id: 3, name: 'USB Drive with exclusive mix', price: 4000, stock: 20 },
];

export default function ProductManagerPage() {
  const [products, setProducts] = useState(sampleProducts);

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-white">Product Manager</h1>
        <button className="bg-primary hover:bg-primary-light text-white font-bold py-2 px-4 rounded-lg">
          Add Product
        </button>
      </div>
      <div className="bg-secondary rounded-lg shadow">
        <table className="w-full text-left">
          <thead className="border-b border-gray-700">
            <tr>
              <th className="p-4 font-semibold text-white">Product Name</th>
              <th className="p-4 font-semibold text-white">Price</th>
              <th className="p-4 font-semibold text-white">Stock</th>
              <th className="p-4 font-semibold text-white">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="border-b border-gray-700">
                <td className="p-4 text-text-secondary">{product.name}</td>
                <td className="p-4 text-text-secondary">${(product.price / 100).toFixed(2)}</td>
                <td className="p-4 text-text-secondary">{product.stock}</td>
                <td className="p-4">
                  <button className="text-sm text-primary-light hover:underline mr-4">Edit</button>
                  <button className="text-sm text-red-500 hover:underline">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
