import { hvacPoints, transcript } from "../content.js";

export default function Hvac() {
  return (
    <section className="blue" id="hvac">
      <div className="wrap hvac">
        <div>
          <div className="eyebrow light">Built general. Going deep on HVAC.</div>
          <h2 className="title-gap">
            For HVAC companies, peak season is <span className="it">when the leaks get expensive.</span>
          </h2>
          <p className="lede light">
            A no-cool call in July that goes to voicemail is a lost $400 repair and maybe a lost $9,000 system. Our
            first industry playbook is built around how HVAC shops actually make money.
          </p>
          <div className="hvac-list">
            {hvacPoints.map((h) => (
              <div key={h.label}><b>{h.label}</b><span>{h.body}</span></div>
            ))}
          </div>
        </div>
        <div className="frame">
          <div className="panel call" aria-label="Example AI receptionist conversation">
            <div className="meta"><span>Inbound · 9:47 PM · Saturday</span><span>Example transcript</span></div>
            {transcript.map((m, i) => (
              <div className={`bubble ${m.who}`} key={i}>
                <small>{m.who === "c" ? "Caller" : "AI receptionist"}</small>
                {m.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
