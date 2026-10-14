import Link from "next/link";

export default function NotFound() {
  return (
    <section className="wrap section">
      <h1>Page not found</h1>
      <p className="mt-4 text-slate">The page you were looking for does not exist or has moved.</p>
      <Link href="/en" className="btn btn-primary mt-8">
        Go to the home page
      </Link>
    </section>
  );
}
