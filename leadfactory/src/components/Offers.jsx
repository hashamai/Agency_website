import { useMemo, useState } from "react";
import { engineOffer, finderMap, finderOptions, offerNames, offers } from "../content.js";

// Rank offers by how many selected problems point to them; 3+ distinct offers means the all-in retainer leads.
function pickOffers(selected) {
  const score = {};
  selected.forEach((id) => finderMap[id].forEach((o) => { score[o] = (score[o] || 0) + 1; }));
  const ranked = Object.keys(score).sort((a, b) => score[b] - score[a]);
  return ranked.length >= 3 ? ["engine", ...ranked.slice(0, 2)] : ranked;
}

function OfferCard({ offer, match, delay = 0 }) {
  const cls = ["offer", offer.feature && "feature", offer.wide && "wide", match && "match"].filter(Boolean).join(" ");
  return (
    <article className={cls} data-reveal style={{ "--d": delay }}>
      <span className="kind">{offer.kind}</span>
      <h3>{offer.title}</h3>
      <div className="price">
        {offer.price}
        {offer.priceNote && <> <small>{offer.priceNote}</small></>}
      </div>
      {offer.body && <p>{offer.body}</p>}
      {offer.bullets && (
        <ul>{offer.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
      )}
      {offer.badge
        ? <span className="badge">{offer.badge}</span>
        : <span className="badge rec">Recommended for you</span>}
    </article>
  );
}

export default function Offers() {
  const [selected, setSelected] = useState([]);
  const picked = useMemo(() => pickOffers(selected), [selected]);

  const toggle = (id) =>
    setSelected((cur) => (cur.includes(id) ? cur.filter((x) => x !== id) : [...cur, id]));

  return (
    <section className="dark" id="offers">
      <div className="wrap">
        <div className="sec-head center" data-reveal>
          <div className="eyebrow">Pricing</div>
          <h2>Pick where to start. <span className="it">We'll grow from there.</span></h2>
        </div>

        <div className="finder" role="group" aria-labelledby="finder-q" data-reveal>
          <h3 id="finder-q">Which of these are <span className="it">costing you</span> right now?</h3>
          <div className="chips">
            {finderOptions.map((o) => (
              <label key={o.id}>
                <input
                  type="checkbox"
                  id={`p-${o.id}`}
                  checked={selected.includes(o.id)}
                  onChange={() => toggle(o.id)}
                />
                {o.label}
              </label>
            ))}
          </div>
          <p className="finder-out" aria-live="polite">
            {picked.length === 0 ? (
              "Pick one or more and we'll highlight where to start. Everyone starts with the free audit."
            ) : (
              <>
                Start with the free audit, then:{" "}
                {picked.map((p, i) => (
                  <span key={p}>{i > 0 && ", "}<b>{offerNames[p]}</b></span>
                ))}
                .
              </>
            )}
          </p>
        </div>

        <div className="offers">
          {offers.map((o, i) => (
            <OfferCard key={o.id} offer={o} match={picked.includes(o.id)} delay={i % 3} />
          ))}
        </div>
        <div className="offers single">
          <OfferCard offer={engineOffer} match={picked.includes(engineOffer.id)} />
        </div>
        <p className="price-note">
          Prices in USD. Every engagement starts with the free audit, and we confirm scope and price in writing
          before any work begins.
        </p>
      </div>
    </section>
  );
}
