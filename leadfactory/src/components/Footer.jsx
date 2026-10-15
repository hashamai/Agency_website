import Logo from "./Logo.jsx";
import { BRAND, footerColumns } from "../content.js";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="blue">
      <div className="wrap">
        <div className="grid">
          <div>
            <Logo label={`${BRAND} home`} />
            <p className="blurb">
              AI growth and automation for service businesses. We answer every call, follow up every lead and wake
              up old quotes.
            </p>
          </div>
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4>{col.title}</h4>
              <ul>
                {col.links.map((l) => (
                  <li key={l.label}><a href={l.href}>{l.label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="base">
          <span>© {year} {BRAND}</span>
          <span>Built for businesses that run on booked jobs.</span>
        </div>
      </div>
    </footer>
  );
}
