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
import { useLang } from "../i18n/LanguageContext";
import { hero as copy, footer as footerCopy } from "../i18n/copy";
import heroImage from "../assets/derived/hero-skyline.jpg";

const statIcons = [
  <ThunderboltOutlined key="0" />,
  <BuildOutlined key="1" />,
  <AppstoreOutlined key="2" />,
  <TeamOutlined key="3" />
];

export default function Hero() {
  const { t } = useLang();

  return (
    <section className="tl-hero">
      <div className="tl-container">
        <div className="tl-hero-grid">
          <div>
            <div className="tl-eyebrow">
              <span>{copy.eyebrow}</span>
            </div>

            <h1 className="tl-hero-title">
              {t(copy.titlePre)}
              <em style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", color: "var(--gold-dark)" }}>
                {t(copy.titleEm)}
              </em>
              {t(copy.titlePost)}
            </h1>

            <p className="tl-lede" style={{ fontSize: 17, maxWidth: 560 }}>
              {t(copy.lede)}
            </p>

            <Space size={14} wrap style={{ marginTop: 32 }}>
              <Link to="/du-an">
                <Button
                  className="tl-btn-gold"
                  size="large"
                  icon={<ArrowRightOutlined />}
                  iconPosition="end"
                >
                  {t(copy.ctaPrimary)}
                </Button>
              </Link>
              <Link to="/phap-ly">
                <Button
                  className="tl-btn-ghost"
                  size="large"
                  icon={<FileProtectOutlined style={{ color: "var(--gold-dark)" }} />}
                >
                  {t(copy.ctaSecondary)}
                </Button>
              </Link>
            </Space>

            <div className="tl-stat-row">
              {heroStats.map((s, index) => (
                <div className="tl-stat-card" key={index}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start"
                    }}
                  >
                    <div className="tl-stat-value">{t(s.value)}</div>
                    <span style={{ color: "var(--gold-dark)", fontSize: 18 }}>
                      {statIcons[index]}
                    </span>
                  </div>
                  <div className="tl-stat-label">{t(s.label)}</div>
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
                {t({ vi: company.nameVi, en: company.nameEn })}
              </span>
              <span style={{ opacity: 0.3 }}>•</span>
              <span>
                {t(footerCopy.taxCodeLabel)}:{" "}
                <strong style={{ color: "var(--text)" }}>{company.taxCode}</strong>
              </span>
              <span style={{ opacity: 0.3 }}>•</span>
              <span>
                {t(footerCopy.capitalLabel)}:{" "}
                <strong style={{ color: "var(--text)" }}>
                  {company.charterCapital}
                </strong>
              </span>
            </div>
          </div>

          <div className="tl-hero-visual">
            <img src={heroImage} alt={copy.visualCaption.en} loading="eager" />
            <div className="tl-hero-visual-caption">{t(copy.visualCaption)}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
