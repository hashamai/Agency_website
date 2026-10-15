import { CheckIcon } from "./Icons.jsx";
import { expectations } from "../content.js";

export default function Expect() {
  return (
    <section className="dark" id="expect">
      <div className="wrap">
        <div className="sec-head center">
          <div className="eyebrow">What to expect</div>
          <h2>Busy owners <span className="it">welcome.</span></h2>
          <p className="lede">You run the business. We keep you in the loop without filling your calendar.</p>
        </div>
        <div className="expect">
          {expectations.map((col) => (
            <div key={col.title}>
              <h3>{col.title}</h3>
              <ul>
                {col.items.map((i) => (
                  <li key={i.lead}><CheckIcon /><span><b>{i.lead}</b> {i.rest}</span></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
