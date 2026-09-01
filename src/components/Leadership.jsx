import { CheckCircleFilled } from "@ant-design/icons";
import { leadership } from "../data/content";

export default function Leadership() {
  return (
    <section className="tl-section" id="lanh-dao">
      <div className="tl-container">
        <span className="tl-eyebrow">Ban lãnh đạo</span>
        <h2 className="tl-heading" style={{ fontSize: "clamp(28px,3.4vw,40px)", maxWidth: 640 }}>
          Kinh nghiệm quốc tế, tầm nhìn <em>công nghệ &amp; năng lượng</em>
        </h2>

        <div className="tl-card tl-lead-card" style={{ marginTop: 44 }}>
          <div
            className="tl-lead-photo"
            style={{ backgroundImage: `url(${leadership.photo})` }}
          />
          <div className="tl-lead-body">
            <div style={{ display: "flex", alignItems: "baseline", gap: 12, flexWrap: "wrap" }}>
              <h3 style={{ fontFamily: "var(--font-serif)", fontSize: 26, margin: 0 }}>
                {leadership.name}
              </h3>
              <span style={{ color: "var(--text-faint)", fontSize: 14 }}>
                ({leadership.nameEn}, {leadership.born})
              </span>
            </div>
            <p style={{ color: "var(--gold-soft)", fontSize: 14, marginTop: 6, fontWeight: 500 }}>
              {leadership.title} · {leadership.nationality}
            </p>

            <div style={{ marginTop: 18 }}>
              {leadership.achievements.map((a, i) => (
                <div className="tl-lead-achieve" key={i}>
                  <CheckCircleFilled />
                  <span>{a}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
