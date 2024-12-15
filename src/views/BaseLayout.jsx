import { Link, Outlet } from 'react-router-dom';

const BaseLayout = () => (
  <div className="layout">
    <header>
      <Link to="/">Purrfect Adoption</Link>
      <nav>
        <Link to="/available-cats">Available Cats</Link>
        <Link to="/contact-us">Contact Us</Link>
        <Link to="/about-us">About Us</Link>
      </nav>
    </header>
    <main>
      <Outlet />
    </main>
    <footer>© 2024 Purrfect Adoption</footer>
  </div>
);

export default BaseLayout;
