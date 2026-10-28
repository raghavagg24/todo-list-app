import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="not-found">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>Bhai, ye page exist nahi karta!</p>
      <Link to="/" className="back-home">
        Go to Home
      </Link>
    </section>
  );
}

export default NotFound;