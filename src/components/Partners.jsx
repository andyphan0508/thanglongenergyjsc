import { partnerLogos } from "../data/content";
import { useLang } from "../i18n/LanguageContext";
import { partners as copy } from "../i18n/copy";

export default function Partners() {
  const { t } = useLang();

  return (
    <section className="tl-section">
      <div className="tl-container">
        <div className="tl-partners-head">
          <div>
            <div className="tl-eyebrow">
              <span>{t(copy.eyebrow)}</span>
            </div>

            <h2
              className="tl-heading"
              style={{
                fontSize: "clamp(28px,3.2vw,40px)",
                maxWidth: 720,
                marginTop: 16
              }}
            >
              {t(copy.headingPre)}
              <em>{t(copy.headingEm)}</em>
              {t(copy.headingPost)}
            </h2>

            <p className="tl-lede" style={{ marginTop: 14, maxWidth: 620 }}>
              {t(copy.lede)}
            </p>
          </div>

          <div className="tl-partners-count">
            <strong>{partnerLogos.length}</strong>
            <span>{t(copy.countLabel)}</span>
          </div>
        </div>

        <ul className="tl-logo-wall">
          {partnerLogos.map((p, i) => (
            <li
              className="tl-logo-tile tl-reveal"
              key={p.name}
              style={{ "--i": i % 6 }}
              title={p.name}
            >
              <img src={p.logo} alt={p.name} loading="lazy" />
              <span className="tl-logo-name">{p.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
