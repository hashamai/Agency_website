import { ArrowIcon, SearchIcon } from "./Icons.jsx";
import { BOOKING_URL, heroEvents } from "../content.js";

export default function Hero() {
  return (
    <header className="hero blue" id="top">
      <div className="wrap hero-grid">
        <div data-reveal>
          <div className="eyebrow">The AI growth &amp; automation agency for service businesses</div>
          <h1>
            The money is already in your pipeline. <span className="it">We go get it.</span>
          </h1>
          <p className="lede">
            Missed calls, cold leads and quotes nobody followed up. We find where revenue is leaking, then plug it
            with ads, a CRM, AI workflows and voice agents built around how your team already works. We answer to
            booked jobs and revenue, not clicks.
          </p>
          <div className="pill-group">
            <a className="btn white" href={BOOKING_URL}>Book a call <ArrowIcon /></a>
            <a className="btn ghost" href="#audit">Get a free AI audit <SearchIcon /></a>
          </div>
          <p className="fine">Free audit · custom plan · no long contracts</p>
        </div>

        <aside className="frame" aria-label="Example of the system at work" data-reveal style={{ "--d": 3 }}>
          <div className="panel">
            <div className="panel-head">
              <span>Tonight's front office</span>
              <span className="live">Live</span>
            </div>
            {heroEvents.map((e) => (
              <div className="ev" key={e.time}>
                <time>{e.time}</time>
                <div>
                  <b>{e.title}</b>
                  <span>{e.body}</span>
                  <br />
                  <span className={`tag ${e.tone}`}>{e.tag}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="panel panel-foot">
            <div>
              <small>Revenue in play tonight</small>
              <span className="big">$8,820</span>
            </div>
            <span className="note">Illustrative example of the workflow, not client data.</span>
          </div>
        </aside>
      </div>
    </header>
  );
}
