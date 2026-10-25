import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main" className="mx-auto w-full max-w-xl px-5 py-24 text-center">
      <p className="text-xs font-extrabold tracking-[0.18em] text-muted uppercase">404</p>
      <h1 className="mt-3 font-serif text-5xl font-semibold tracking-tight">This page is not in the stash.</h1>
      <p className="mt-4 text-lg text-body">The link may be old. Home is still where you left it.</p>
      <Link href="/" className="btn btn-primary mt-8">
        Back to Stashin
      </Link>
    </main>
  );
}
