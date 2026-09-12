import { Row, Col } from "antd";
import {
  BankOutlined,
  EnvironmentOutlined,
  IdcardOutlined,
  CalendarOutlined,
  SafetyCertificateOutlined,
  GlobalOutlined,
  RocketOutlined
} from "@ant-design/icons";
import { company } from "../data/content";
import { useLang } from "../i18n/LanguageContext";
import { about as copy } from "../i18n/copy";
import bannerImage from "../assets/derived/about-industrial-park.jpg";

const factIcons = [BankOutlined, IdcardOutlined, CalendarOutlined, EnvironmentOutlined];
const pillarIcons = [RocketOutlined, GlobalOutlined, SafetyCertificateOutlined];

export default function About() {
  const { t } = useLang();

  return (
    <section className="tl-section">
      <div className="tl-container">
        <Row gutter={[56, 40]} align="center">
          <Col xs={24} lg={11}>
            <div className="tl-eyebrow">
              <span>{t(copy.eyebrow)}</span>
            </div>

            <h2
              className="tl-heading"
              style={{ fontSize: "clamp(28px,3.2vw,40px)", marginTop: 16 }}
            >
              {t(copy.headingPre)}
              <em>{t(copy.headingEm)}</em>
              {t(copy.headingPost)}
            </h2>

            <p className="tl-lede" style={{ marginTop: 18 }}>
              <strong style={{ color: "var(--text)" }}>{company.nameVi}</strong>{" "}
              ({company.nameEn}) {t(copy.lede)}
            </p>

            <div style={{ marginTop: 24, display: "grid", gap: 12 }}>
              {copy.pillars.map((p, i) => {
                const Icon = pillarIcons[i];
                return (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 14,
                      padding: "12px 16px",
                      background: "#ffffff",
                      border: "1px solid var(--border)",
                      borderRadius: "var(--radius-md)"
                    }}
                  >
                    <div
                      style={{
                        width: 32,
                        height: 32,
                        borderRadius: "50%",
                        background: "var(--gold-light)",
                        border: "1px solid var(--border-gold)",
                        color: "var(--gold-dark)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 14,
                        flexShrink: 0,
                        marginTop: 2
                      }}
                    >
                      <Icon />
                    </div>
                    <div>
                      <div style={{ color: "var(--text)", fontWeight: 700, fontSize: 14.5 }}>
                        {t(p.title)}
                      </div>
                      <div style={{ color: "var(--text-muted)", fontSize: 13, marginTop: 2 }}>
                        {t(p.desc)}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Col>

          <Col xs={24} lg={13}>
            <Row gutter={[16, 16]}>
              {copy.facts.map((f, i) => {
                const Icon = factIcons[i];
                return (
                  <Col xs={24} sm={12} key={i}>
                    <div
                      className="tl-card"
                      style={{
                        padding: "24px 20px",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between"
                      }}
                    >
                      <div>
                        <div
                          style={{
                            width: 44,
                            height: 44,
                            borderRadius: "var(--radius-md)",
                            background: "var(--gold-light)",
                            border: "1px solid var(--border-gold)",
                            color: "var(--gold-dark)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: 20
                          }}
                        >
                          <Icon />
                        </div>
                        <div
                          style={{
                            fontFamily: "var(--font-serif)",
                            fontSize: 20,
                            fontWeight: 700,
                            marginTop: 16,
                            color: "var(--text)",
                            lineHeight: 1.25
                          }}
                        >
                          {t(f.value) ?? (i === 0 ? company.charterCapital : company.taxCode)}
                        </div>
                      </div>
                      <div
                        style={{
                          marginTop: 14,
                          borderTop: "1px solid var(--border)",
                          paddingTop: 10
                        }}
                      >
                        <div style={{ fontSize: 13, color: "var(--gold-dark)", fontWeight: 700 }}>
                          {t(f.label)}
                        </div>
                        <div style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 2 }}>
                          {t(f.sub)}
                        </div>
                      </div>
                    </div>
                  </Col>
                );
              })}
            </Row>
          </Col>
        </Row>

        <div className="tl-banner" style={{ marginTop: 56 }}>
          <img src={bannerImage} alt={t(copy.bannerCaption)} loading="lazy" />
          <div className="tl-banner-caption">{t(copy.bannerCaption)}</div>
        </div>
      </div>
    </section>
  );
}
