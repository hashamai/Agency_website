import { BRAND } from "../content.js";

// "Caught" mark: an L whose inner corner curves around a solid dot (the lead). Drawn on a 256 grid,
// viewBox cropped to the artwork. Master files live in brand/logo/.
export default function Logo({ label }) {
  return (
    <a className="logo" href="#top" aria-label={label}>
      <svg viewBox="40 32 176 192" aria-hidden="true" focusable="false">
        <path
          fill="currentColor"
          d="M56 32H88A16 16 0 0 1 104 48V100A60 60 0 0 0 164 160H200A16 16 0 0 1 216 176V208A16 16 0 0 1 200 224H56A16 16 0 0 1 40 208V48A16 16 0 0 1 56 32Z"
        />
        <circle fill="currentColor" cx="164" cy="100" r="44" />
      </svg>
      <span>{BRAND}</span>
    </a>
  );
}
