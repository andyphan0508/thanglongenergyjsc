import { Row, Col, Button } from "antd";
import {
  EnvironmentOutlined,
  PhoneOutlined,
  MailOutlined,
  ClockCircleOutlined,
  IdcardOutlined,
  BankOutlined,
  UserOutlined,
  ArrowRightOutlined
} from "@ant-design/icons";
import { company } from "../data/content";
import { useLang } from "../i18n/LanguageContext";
import { contactPage as copy } from "../i18n/copy";

export default function Contact() {
  const { t } = useLang();

  const contactChannels = [
    { icon: <EnvironmentOutlined />, label: t(copy.officeLabel), value: company.address },
    {
      icon: <PhoneOutlined />,
      label: t(copy.hotlineLabel),
      value: company.phone,
      href: `tel:${company.phone.replace(/\s+/g, "")}`
    },
    {
      icon: <MailOutlined />,
      label: t(copy.emailLabel),
      value: "lienhe@thanglongenergy.vn",
      href: "mailto:lienhe@thanglongenergy.vn"
    },
    { icon: <ClockCircleOutlined />, label: t(copy.hoursLabel), value: t(copy.hoursValue) }
  ];

  const legalFacts = [
    { icon: <IdcardOutlined />, label: t(copy.taxCodeLabel), value: company.taxCode },
    { icon: <BankOutlined />, label: t(copy.capitalLabel), value: company.charterCapital },
    {
      icon: <UserOutlined />,
      label: t(copy.legalRepLabel),
      value: `${company.legalRepName} — ${t(company.legalRepTitle)}`
    }
  ];

  return (
    <section className="tl-section" id="lien-he">
      <div className="tl-container">
        <div className="tl-eyebrow">
          <span>{t(copy.eyebrow)}</span>
        </div>

        <h2
          className="tl-heading"
          style={{ fontSize: "clamp(28px,3.2vw,40px)", maxWidth: 720, marginTop: 16 }}
        >
          {t(copy.headingPre)}
          <em>{t(copy.headingEm)}</em>
          {t(copy.headingPost)}
        </h2>

        <p className="tl-lede" style={{ marginTop: 14, maxWidth: 640 }}>
          {company.shortName} {t(copy.lede)}
        </p>

        <Row gutter={[48, 40]} style={{ marginTop: 36 }}>
          <Col xs={24} lg={14}>
            <div style={{ display: "grid", gap: 12 }}>
              {contactChannels.map((c) => {
                const Tag = c.href ? "a" : "div";
                return (
                  <Tag
                    key={c.label}
                    href={c.href}
                    className="tl-contact-card"
                    style={{ cursor: c.href ? "pointer" : "default" }}
                  >
                    <div className="tl-contact-icon">{c.icon}</div>
                    <div>
                      <div style={{ fontSize: 12, color: "var(--gold-dark)", fontWeight: 700 }}>
                        {c.label}
                      </div>
                      <div
                        style={{
                          fontSize: 14,
                          color: "var(--text)",
                          marginTop: 2,
                          fontWeight: 600,
                          lineHeight: 1.45
                        }}
                      >
                        {c.value}
                      </div>
                    </div>
                  </Tag>
                );
              })}
            </div>

            <Button
              className="tl-btn-gold"
              size="large"
              href="mailto:lienhe@thanglongenergy.vn"
              icon={<ArrowRightOutlined />}
              iconPosition="end"
              style={{ marginTop: 24 }}
            >
              {t(copy.emailButton)}
            </Button>
          </Col>

          <Col xs={24} lg={10}>
            <div className="tl-card" style={{ padding: "28px 24px", height: "100%" }}>
              <h4
                style={{
                  color: "var(--text)",
                  fontFamily: "var(--font-serif)",
                  fontSize: 18,
                  marginBottom: 18,
                  fontWeight: 700
                }}
              >
                {t(copy.legalHeading)}
              </h4>

              <div style={{ display: "grid", gap: 16 }}>
                <div>
                  <div
                    style={{
                      fontSize: 12,
                      color: "var(--text-muted)",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: 0.4
                    }}
                  >
                    {t(copy.companyNameLabel)}
                  </div>
                  <div
                    style={{
                      fontSize: 15,
                      color: "var(--text)",
                      fontWeight: 700,
                      marginTop: 4,
                      lineHeight: 1.4
                    }}
                  >
                    {company.nameVi}
                  </div>
                </div>

                {legalFacts.map((f) => (
                  <div
                    key={f.label}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      paddingTop: 14,
                      borderTop: "1px solid var(--border)"
                    }}
                  >
                    <div className="tl-contact-icon" style={{ flexShrink: 0 }}>
                      {f.icon}
                    </div>
                    <div>
                      <div style={{ fontSize: 12, color: "var(--gold-dark)", fontWeight: 700 }}>
                        {f.label}
                      </div>
                      <div
                        style={{
                          fontSize: 13.5,
                          color: "var(--text-secondary)",
                          marginTop: 2,
                          fontWeight: 600
                        }}
                      >
                        {f.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
}
