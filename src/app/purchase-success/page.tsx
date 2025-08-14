import Link from 'next/link';

export default function PurchaseSuccessPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-3xl font-bold mb-4 text-green-400">Purchase Successful!</h1>
      <p className="text-text-secondary mb-8">
        Thank you for your order. A confirmation has been sent to your email.
      </p>
      <Link href="/" className="bg-primary hover:bg-primary-light text-white font-bold py-2 px-4 rounded-lg">
        Return to Home
      </Link>
    </div>
  );
}
