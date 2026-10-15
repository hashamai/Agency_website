import Logo from "./Logo.jsx";
import { BRAND, BOOKING_URL, navLinks } from "../content.js";

export default function Nav() {
  return (
    <nav className="top" aria-label="Main">
      <div className="wrap">
        <Logo label={`${BRAND} home`} />
        <div className="links">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </div>
        <a className="nav-cta" href={BOOKING_URL}>Book a call</a>
      </div>
    </nav>
  );
}
