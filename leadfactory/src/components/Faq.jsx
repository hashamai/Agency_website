import { faqs } from "../content.js";

export default function Faq() {
  return (
    <section className="dark" id="faq">
      <div className="wrap">
        <h2 className="faq-title center">FAQs</h2>
        <div className="faq-list">
          {faqs.map((f) => (
            <details key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
