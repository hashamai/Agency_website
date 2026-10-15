import { auditSteps, leakRows, leakTotal } from "../content.js";

export default function Audit() {
  return (
    <section className="blue" id="audit">
      <div className="wrap audit">
        <div>
          <div data-reveal>
            <div className="eyebrow light">The free AI growth audit</div>
            <h2 className="title-gap">We find the leak <span className="it">before we ask for a dollar.</span></h2>
            <p className="lede light">
              A 30-minute call plus a short written report. You keep it whether you work with us or not.
            </p>
          </div>
          <ol className="check">
            {auditSteps.map((s, i) => (
              <li key={s.title} data-reveal style={{ "--d": i }}>
                <i aria-hidden="true">{i + 1}</i>
                <div><b>{s.title}</b><span>{s.body}</span></div>
              </li>
            ))}
          </ol>
        </div>
        <div className="leak" data-reveal style={{ "--d": 2 }}>
          <span className="eyebrow">Sample audit · Revenue leak estimate</span>
          <h3>Example: a 12-truck HVAC company</h3>
          <table>
            <tbody>
              {leakRows.map(([label, value]) => (
                <tr key={label}><td>{label}</td><td>{value}</td></tr>
              ))}
              <tr className="total"><td>{leakTotal[0]}</td><td>{leakTotal[1]}</td></tr>
            </tbody>
          </table>
          <small>
            Illustrative numbers to show the format. Your audit uses your own call logs, estimates and ticket sizes,
            with every assumption shown.
          </small>
        </div>
      </div>
    </section>
  );
}
