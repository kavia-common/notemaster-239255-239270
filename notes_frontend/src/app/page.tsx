import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center px-6">
      <section className="w-full max-w-2xl rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold tracking-widest text-slate-500">
              NOTEMASTER
            </p>
            <h1 className="mt-2 text-3xl font-semibold text-slate-900">
              Frontend is booting
            </h1>
            <p className="mt-2 text-sm text-slate-600">
              If you can see the card styling, border, spacing, and typography,
              Tailwind is applied correctly.
            </p>
          </div>

          <span className="inline-flex items-center rounded-full bg-cyan-50 px-3 py-1 text-xs font-medium text-cyan-700 ring-1 ring-inset ring-cyan-200">
            Styled
          </span>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl bg-slate-50 p-4 ring-1 ring-inset ring-slate-200">
            <p className="text-sm font-medium text-slate-900">Next.js</p>
            <p className="mt-1 text-sm text-slate-600">App Router + export</p>
          </div>
          <div className="rounded-xl bg-slate-50 p-4 ring-1 ring-inset ring-slate-200">
            <p className="text-sm font-medium text-slate-900">Tailwind</p>
            <p className="mt-1 text-sm text-slate-600">PostCSS plugin wired</p>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            href="/"
          >
            Create note (placeholder)
          </Link>
          <Link
            className="inline-flex items-center justify-center rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-900 ring-1 ring-inset ring-slate-200 hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-300"
            href="/"
          >
            View notes (placeholder)
          </Link>
        </div>
      </section>
    </main>
  );
}
