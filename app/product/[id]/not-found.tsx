import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-pad space-y-3">
      <h1 className="text-2xl font-semibold">Snack not found</h1>
      <p className="text-sm text-stone-600">Try searching for another product from the catalog.</p>
      <Link href="/search" className="text-primary underline">
        Back to search
      </Link>
    </div>
  );
}
