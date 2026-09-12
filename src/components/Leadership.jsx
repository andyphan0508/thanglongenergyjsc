import {
  CheckOutlined,
  CrownOutlined,
  SafetyCertificateOutlined
} from "@ant-design/icons";
import { leadership } from "../data/content";
import { useLang } from "../i18n/LanguageContext";
import { leadership as copy } from "../i18n/copy";

export default function Leadership() {
  const { t } = useLang();

  return (
    <section className="tl-section">
      <div className="tl-container">
        <div className="tl-eyebrow">
          <span>{t(copy.eyebrow)}</span>
        </div>

        <h2
          className="tl-heading"
          style={{
            fontSize: "clamp(28px,3.2vw,40px)",
            maxWidth: 700,
            marginTop: 16
          }}
        >
          {t(copy.headingPre)}
          <em>{t(copy.headingEm)}</em>
          {t(copy.headingPost)}
        </h2>

        <p className="tl-lede" style={{ marginTop: 14 }}>
          {t(copy.lede)}
        </p>

        <div className="tl-lead-card" style={{ marginTop: 36 }}>
          <div
            className="tl-lead-photo"
            style={{ backgroundImage: `url(${leadership.photo})` }}
          >
            <div
              style={{
                position: "absolute",
                top: 18,
                left: 18,
                background: "rgba(255, 255, 255, 0.94)",
                border: "1px solid var(--border-gold)",
                borderRadius: "var(--radius-full)",
                padding: "6px 16px",
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                color: "var(--gold-dark)",
                fontSize: 12.5,
                fontWeight: 700
              }}
            >
              <CrownOutlined style={{ color: "var(--gold-dark)" }} />
              {t(leadership.title)}
            </div>
          </div>

          <div className="tl-lead-body">
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: 12,
                flexWrap: "wrap"
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: 26,
                  margin: 0,
                  color: "var(--text)",
                  fontWeight: 700
                }}
              >
                {leadership.name}
              </h3>
              <span style={{ color: "var(--text-muted)", fontSize: 14 }}>
                ({leadership.nameEn}, {t(copy.born)} {leadership.born})
              </span>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                marginTop: 6,
                flexWrap: "wrap"
              }}
            >
              <span style={{ color: "var(--gold-dark)", fontSize: 14.5, fontWeight: 700 }}>
                {t(leadership.title)}
              </span>
              <span style={{ color: "var(--text-faint)" }}>•</span>
              <span
                style={{
                  color: "var(--text-secondary)",
                  fontSize: 13.5,
                  display: "flex",
                  alignItems: "center",
                  gap: 4,
                  fontWeight: 500
                }}
              >
                <SafetyCertificateOutlined style={{ color: "var(--gold-dark)" }} />{" "}
                {t(leadership.nationality)}
              </span>
            </div>

            {/* Credential Pills */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 8,
                marginTop: 16,
                marginBottom: 10
              }}
            >
              {copy.badges.map((b, idx) => (
                <span
                  key={idx}
                  style={{
                    fontSize: 12,
                    padding: "4px 12px",
                    background: "var(--gold-light)",
                    border: "1px solid var(--border-gold)",
                    borderRadius: "var(--radius-full)",
                    color: "var(--gold-dark)",
                    fontWeight: 600
                  }}
                >
                  {t(b)}
                </span>
              ))}
            </div>

            <div style={{ marginTop: 10 }}>
              {leadership.achievements.map((a, i) => (
                <div className="tl-lead-achieve" key={i}>
                  <div className="tl-lead-achieve-icon">
                    <CheckOutlined />
                  </div>
                  <span style={{ color: "var(--text-secondary)", fontSize: 13.5, lineHeight: 1.6 }}>
                    {t(a)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
