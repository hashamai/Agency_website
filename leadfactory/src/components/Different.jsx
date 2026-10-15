import { FeatureIcon } from "./Icons.jsx";
import { BRAND, differences } from "../content.js";

export default function Different() {
  return (
    <section className="dark" id="different">
      <div className="wrap">
        <div className="sec-head center" data-reveal>
          <div className="eyebrow">Why {BRAND}</div>
          <h2>Six ways <span className="it">we're different.</span></h2>
        </div>
        <div className="diff">
          {differences.map((d, i) => (
            <div key={d.title} data-reveal style={{ "--d": i % 3 }}>
              <span className="ico"><FeatureIcon name={d.icon} /></span>
              <h3>{d.title}</h3>
              <p>{d.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
