"use client";

export default function Error({ error }: { error: Error & { digest?: string } }) {
  return (
    <div className="container-pad">
      <h1 className="text-2xl font-semibold">Something went wrong</h1>
      <p className="mt-2 text-sm text-stone-600">Please refresh and try again. {error.digest ? `Ref: ${error.digest}` : ""}</p>
    </div>
  );
}
