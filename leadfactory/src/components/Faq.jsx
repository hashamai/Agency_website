import { faqs } from "../content.js";

export default function Faq() {
  return (
    <section className="dark" id="faq">
      <div className="wrap">
        <h2 className="faq-title center" data-reveal>FAQs</h2>
        <div className="faq-list">
          {faqs.map((f, i) => (
            <details key={f.q} data-reveal style={{ "--d": Math.min(i, 4) }}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
