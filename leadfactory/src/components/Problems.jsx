import { ArrowIcon, CheckIcon, XIcon } from "./Icons.jsx";
import { fixes } from "../content.js";

export default function Problems() {
  return (
    <section className="dark" id="problems">
      <div className="wrap">
        <div className="sec-head" data-reveal>
          <h2>
            Win more jobs without hiring more people <span className="it">or chasing more leads.</span>
          </h2>
          <p className="lede">
            Most service businesses don't have a lead problem. They have a follow-up problem, a missed-call problem
            and a too-much-admin problem. Here is what we fix.
          </p>
        </div>
        <div className="fixes">
          <div className="tube" aria-hidden="true" data-reveal><span>Revenue recovered</span></div>
          <div className="rows">
            {fixes.map((f, i) => (
              <div className="row" key={f.pain} data-reveal style={{ "--d": i }}>
                <span className="grp">
                  <span className="ic x"><XIcon /></span>
                  <span className="pain">{f.pain}</span>
                </span>
                <ArrowIcon className="arrow" size={18} />
                <span className="grp">
                  <span className="ic v"><CheckIcon /></span>
                  <span className="fix">{f.fix}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
