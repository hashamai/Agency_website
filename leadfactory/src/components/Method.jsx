import { CheckIcon } from "./Icons.jsx";
import { phases } from "../content.js";

export default function Method() {
  return (
    <section className="dark pt-0" id="method">
      <div className="wrap">
        <div className="sec-head" data-reveal>
          <div className="eyebrow">How we work</div>
          <h2>
            A step-by-step method that starts <span className="it">with the fastest money.</span>
          </h2>
          <p className="lede">We don't build everything at once. Each phase pays for the next.</p>
        </div>
        <div className="phases">
          {phases.map((p) => (
            <div className="phase" key={p.n} data-reveal>
              <span className="n">{p.n}</span>
              <div>
                <span className="when">{p.when}</span>
                <h3>{p.title}</h3>
                <ul>
                  {p.items.map((i) => (
                    <li key={i}><CheckIcon />{i}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
