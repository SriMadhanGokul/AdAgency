import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-4 pt-36 pb-24">
      <p className="text-[11px] font-bold tracking-[0.18em] text-aqua uppercase">404</p>
      <h1 className="font-display mt-3 text-5xl tracking-[-0.04em]">This page is not on the site.</h1>
      <Link to="/" className="btn btn-primary mt-8">Back home</Link>
    </div>
  );
}
