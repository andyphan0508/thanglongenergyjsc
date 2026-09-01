import { Link } from "react-router-dom";
import { Button, Space } from "antd";
import {
  ArrowRightOutlined,
  FileProtectOutlined,
  ThunderboltOutlined,
  BuildOutlined,
  AppstoreOutlined,
  TeamOutlined
} from "@ant-design/icons";
import { heroStats, company } from "../data/content";

const statIcons = [
  <ThunderboltOutlined key="0" />,
  <BuildOutlined key="1" />,
  <AppstoreOutlined key="2" />,
  <TeamOutlined key="3" />
];

export default function Hero() {
  return (
    <section className="tl-hero">
      {/* Background ambient lighting effects */}
      <div className="tl-hero-bg-glow-1" />
      <div className="tl-hero-bg-glow-2" />
      <div className="tl-hero-grid-pattern" />

      <div className="tl-container" style={{ position: "relative", zIndex: 1 }}>
        <div className="tl-eyebrow">
          <span className="tl-eyebrow-dot" />
          <span>Thang Long International Energy JSC</span>
        </div>

        <h1 className="tl-hero-title">
          Kiến tạo hạ tầng <em>năng lượng &amp; công nghiệp</em> tương lai
        </h1>

        <p className="tl-lede" style={{ fontSize: 17.5, maxWidth: 680 }}>
          Đầu tư và phát triển tổ hợp sản xuất tuabin điện gió 2.000MW, KCN
          đường sắt tốc độ cao và KCN Mộc Bài trên hành lang kinh tế Xuyên Á.
        </p>

        <Space size={14} wrap style={{ marginTop: 32 }}>
          <Link to="/du-an">
            <Button
              className="tl-btn-gold"
              size="large"
              icon={<ArrowRightOutlined />}
              iconPosition="end"
            >
              3 Đại dự án trọng điểm
            </Button>
          </Link>
          <Link to="/phap-ly">
            <Button
              className="tl-btn-ghost"
              size="large"
              icon={<FileProtectOutlined style={{ color: "var(--gold-dark)" }} />}
            >
              Hồ sơ pháp lý
            </Button>
          </Link>
        </Space>

        <div className="tl-stat-row">
          {heroStats.map((s, index) => (
            <div className="tl-stat-card" key={s.label}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start"
                }}
              >
                <div className="tl-stat-value">{s.value}</div>
                <span style={{ color: "var(--gold-dark)", fontSize: 20 }}>
                  {statIcons[index]}
                </span>
              </div>
              <div className="tl-stat-label">{s.label}</div>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: 26,
            display: "inline-flex",
            alignItems: "center",
            gap: 12,
            padding: "8px 18px",
            background: "#ffffff",
            border: "1px solid var(--border)",
            borderRadius: "var(--radius-full)",
            fontSize: 12.5,
            color: "var(--text-muted)",
            boxShadow: "var(--shadow-sm)",
            flexWrap: "wrap"
          }}
        >
          <span style={{ color: "var(--gold-dark)", fontWeight: 700 }}>
            {company.nameVi}
          </span>
          <span style={{ opacity: 0.3 }}>•</span>
          <span>
            MST:{" "}
            <strong style={{ color: "var(--text)" }}>{company.taxCode}</strong>
          </span>
          <span style={{ opacity: 0.3 }}>•</span>
          <span>
            Vốn ĐL:{" "}
            <strong style={{ color: "var(--text)" }}>
              {company.charterCapital}
            </strong>
          </span>
        </div>
      </div>
    </section>
  );
}
