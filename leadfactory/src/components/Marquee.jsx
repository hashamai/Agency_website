import { tools } from "../content.js";

// The list renders twice so the CSS slide can loop seamlessly; the copy is hidden from screen readers.
export default function Marquee() {
  return (
    <div className="marquee" aria-label="Tools we work with">
      <div className="track">
        {tools.map((t) => <span key={t}>{t}</span>)}
        {tools.map((t) => <span key={`${t}-copy`} aria-hidden="true">{t}</span>)}
      </div>
    </div>
  );
}
