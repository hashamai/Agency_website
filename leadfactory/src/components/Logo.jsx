import { BRAND } from "../content.js";

export default function Logo({ label }) {
  return (
    <a className="logo" href="#top" aria-label={label}>
      <svg viewBox="0 0 24 28" aria-hidden="true" focusable="false">
        <path d="M2 4h20l-7.5 9v9l-5 3V13z" fill="#fff" />
        <circle cx="19" cy="23" r="3" fill="#fff" opacity=".55" />
      </svg>
      <span>{BRAND}</span>
    </a>
  );
}
