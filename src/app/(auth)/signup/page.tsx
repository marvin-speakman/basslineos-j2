import Link from 'next/link';
import AuthForm from '@/components/auth/AuthForm';

export default function SignupPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-8 space-y-8 bg-secondary rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center text-white">Create Account</h1>
        <AuthForm mode="signup" />
        <p className="text-sm text-center text-text-secondary">
          Already have an account?{' '}
          <Link href="/login" className="font-medium text-primary-light hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
