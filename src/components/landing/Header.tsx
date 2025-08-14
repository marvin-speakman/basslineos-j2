"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-secondary/80 backdrop-blur-lg shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-white">
              Baseline OS
            </Link>
          </div>
          <nav className="hidden md:flex md:space-x-8">
            <Link href="#features" className="text-text-secondary hover:text-white transition-colors">
              Features
            </Link>
            <Link href="#pricing" className="text-text-secondary hover:text-white transition-colors">
              Pricing
            </Link>
            <Link href="#testimonials" className="text-text-secondary hover:text-white transition-colors">
              Testimonials
            </Link>
          </nav>
          <div className="flex items-center">
            <Link href="/login" className="text-text-secondary hover:text-white transition-colors mr-4">
              Log In
            </Link>
            <Link href="/signup" className="bg-primary hover:bg-primary-light text-white font-bold py-2 px-4 rounded-lg transition-colors">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
