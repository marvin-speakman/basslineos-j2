import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-background border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-text-secondary">&copy; {new Date().getFullYear()} Baseline OS. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <Link href="#features" className="text-text-secondary hover:text-white transition-colors">
              Features
            </Link>
            <Link href="#pricing" className="text-text-secondary hover:text-white transition-colors">
              Pricing
            </Link>
            <Link href="/terms" className="text-text-secondary hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/privacy" className="text-text-secondary hover:text-white transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
