import { ArrowIcon } from "./Icons.jsx";
import { BOOKING_URL, trustPoints } from "../content.js";

export default function Close() {
  return (
    <section className="blue close center" id="book">
      <div className="wrap">
        <div data-reveal>
          <div className="eyebrow light">Next step</div>
          <h2 className="title-gap">Not sure where AI fits <span className="it">in your business?</span></h2>
          <p className="lede light">
            That is exactly what the free audit is for. Book a call and we'll show you where the money is leaking and
            what to fix first.
          </p>
        </div>
        <div className="trust">
          {trustPoints.map((t, i) => (
            <div key={t.title} data-reveal style={{ "--d": i }}><b>{t.title}</b><span>{t.body}</span></div>
          ))}
        </div>
        <div className="pill-group" data-reveal style={{ "--d": 3 }}>
          <a className="btn white" href={BOOKING_URL}>Book a 30-minute call <ArrowIcon /></a>
          <a className="btn ghost" href="#audit">See what the audit covers</a>
        </div>
      </div>
    </section>
  );
}
