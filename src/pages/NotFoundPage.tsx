import { Link } from 'react-router';

export default function NotFoundPage() {
  return (
    <section className="route-page not-found-page">
      <div className="page-container">
        <p className="eyebrow">404 — Page not found</p>
        <h1 className="section-title">This page took a wrong turn.</h1>
        <Link className="button button-primary" to="/">Back to homepage</Link>
      </div>
    </section>
  );
}
