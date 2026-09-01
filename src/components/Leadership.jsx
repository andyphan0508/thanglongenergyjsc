import {
  CheckOutlined,
  CrownOutlined,
  SafetyCertificateOutlined
} from "@ant-design/icons";
import { leadership } from "../data/content";

const badges = [
  "40+ năm Công nghệ cao Hoa Kỳ",
  "Cựu Chủ tịch NCC (Irvine, California)",
  "Chuyên gia Điện rác Plasma & Năng lượng tái tạo",
  "Công nghệ tấm 3D (Cộng hòa Áo)"
];

export default function Leadership() {
  return (
    <section className="tl-section">
      <div className="tl-container">
        <div className="tl-eyebrow">
          <span className="tl-eyebrow-dot" />
          <span>Ban lãnh đạo cấp cao</span>
        </div>

        <h2
          className="tl-heading"
          style={{
            fontSize: "clamp(28px,3.2vw,40px)",
            maxWidth: 700,
            marginTop: 16
          }}
        >
          Kinh nghiệm quốc tế, tầm nhìn <em>công nghệ &amp; năng lượng</em>
        </h2>

        <p className="tl-lede" style={{ marginTop: 14 }}>
          Hơn 4 thập kỷ cống hiến trong công nghiệp máy tính, tài chính bất động
          sản và năng lượng sạch tại Hoa Kỳ và quốc tế.
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
                background: "rgba(255, 255, 255, 0.92)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(217, 119, 6, 0.3)",
                borderRadius: "var(--radius-full)",
                padding: "6px 16px",
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                color: "var(--gold-dark)",
                fontSize: 12.5,
                fontWeight: 700,
                boxShadow: "0 2px 8px rgba(15, 23, 42, 0.08)"
              }}
            >
              <CrownOutlined style={{ color: "var(--gold-dark)" }} />
              Chủ tịch HĐQT
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
                ({leadership.nameEn}, sinh năm {leadership.born})
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
              <span
                style={{
                  color: "var(--gold-dark)",
                  fontSize: 14.5,
                  fontWeight: 700
                }}
              >
                {leadership.title}
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
                <SafetyCertificateOutlined
                  style={{ color: "var(--gold-dark)" }}
                />{" "}
                {leadership.nationality}
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
              {badges.map((b, idx) => (
                <span
                  key={idx}
                  style={{
                    fontSize: 12,
                    padding: "4px 12px",
                    background: "#fef3c7",
                    border: "1px solid rgba(217, 119, 6, 0.25)",
                    borderRadius: "var(--radius-full)",
                    color: "var(--gold-dark)",
                    fontWeight: 600
                  }}
                >
                  {b}
                </span>
              ))}
            </div>

            <div style={{ marginTop: 10 }}>
              {leadership.achievements.map((a, i) => (
                <div className="tl-lead-achieve" key={i}>
                  <div className="tl-lead-achieve-icon">
                    <CheckOutlined />
                  </div>
                  <span
                    style={{
                      color: "var(--text-secondary)",
                      fontSize: 13.5,
                      lineHeight: 1.6
                    }}
                  >
                    {a}
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
