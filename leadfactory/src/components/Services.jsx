import { CheckIcon } from "./Icons.jsx";
import { services } from "../content.js";

export default function Services() {
  return (
    <section className="blue" id="services">
      <div className="wrap">
        <div className="sec-head center" data-reveal>
          <div className="eyebrow">What we do</div>
          <h2>
            Marketers. Automation engineers. <span className="it">Voice AI builders.</span> One team.
          </h2>
          <p className="lede light">
            Most businesses hire an ad agency, a web designer and a software person, then spend their week making
            them talk to each other. We do all three and connect them into one system.
          </p>
        </div>
        <div className="svc-grid">
          {services.map((s, i) => (
            <div className="svc" key={s.title} data-reveal style={{ "--d": i }}>
              <span className="chip-label">{s.label}</span>
              <h3>{s.title}</h3>
              <ul>
                {s.items.map((i) => (
                  <li key={i.name}>
                    <CheckIcon />
                    <div><b>{i.name}</b><span>{i.body}</span></div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="quote" data-reveal>“Ads without follow-up is a leaking bucket with a nicer logo.”</p>
      </div>
    </section>
  );
}
