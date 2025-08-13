import Link from 'next/link';
import AuthForm from '@/components/auth/AuthForm';

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-8 space-y-8 bg-secondary rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center text-white">Log In</h1>
        <AuthForm mode="login" />
        <p className="text-sm text-center text-text-secondary">
          Don't have an account?{' '}
          <Link href="/signup" className="font-medium text-primary-light hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
