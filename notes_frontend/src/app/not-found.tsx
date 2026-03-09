import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center px-6">
      <section
        className="w-full max-w-xl rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
        role="alert"
        aria-live="assertive"
      >
        <p className="text-xs font-semibold tracking-widest text-slate-500">
          404
        </p>
        <h1 className="mt-2 text-3xl font-semibold text-slate-900">
          Page not found
        </h1>
        <p className="mt-2 text-sm text-slate-600">
          The page you’re looking for doesn’t exist (or was moved).
        </p>

        <div className="mt-6">
          <Link
            className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            href="/"
          >
            Back to home
          </Link>
        </div>
      </section>
    </main>
  );
}
