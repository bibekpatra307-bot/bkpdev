import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <h2 className="text-4xl font-bold text-white mb-4">404 - Page Not Found</h2>
      <p className="text-slate-400 mb-8 max-w-md mx-auto">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link href="/" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-colors">
        Return Home
      </Link>
    </div>
  );
}
