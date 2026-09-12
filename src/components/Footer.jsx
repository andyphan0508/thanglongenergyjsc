import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "antd";
import {
  EnvironmentOutlined,
  PhoneOutlined,
  MailOutlined,
  ArrowUpOutlined,
  SafetyCertificateOutlined
} from "@ant-design/icons";
import { company, navLinks } from "../data/content";
import { useLang } from "../i18n/LanguageContext";
import { footer as copy } from "../i18n/copy";

export default function Footer() {
  const { t, lang } = useLang();
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="tl-footer">
      <div className="tl-container">
        <Row gutter={[48, 40]}>
          {/* Brand & Overview */}
          <Col xs={24} lg={10}>
            <div className="tl-brand" style={{ fontSize: 21 }}>
              <div className="tl-brand-mark">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <polygon points="12,5 19,17 5,17" fill="#96702c" />
                </svg>
              </div>
              <span>
                Thăng Long Energy
                <small>International JSC</small>
              </span>
            </div>

            <p
              className="tl-lede"
              style={{ marginTop: 16, fontSize: 14, lineHeight: 1.6 }}
            >
              {lang === "vi" ? company.nameVi : company.nameEn} — {t(copy.tagline)}
            </p>

            <div
              style={{
                marginTop: 20,
                display: "flex",
                gap: 10,
                flexWrap: "wrap"
              }}
            >
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  fontSize: 12,
                  color: "var(--gold-dark)",
                  background: "var(--gold-light)",
                  padding: "5px 12px",
                  borderRadius: "var(--radius-full)",
                  border: "1px solid var(--border-gold)",
                  fontWeight: 600
                }}
              >
                <SafetyCertificateOutlined /> {t(copy.taxCodeLabel)}: {company.taxCode}
              </span>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  fontSize: 12,
                  color: "var(--text-secondary)",
                  background: "var(--bg-subtle)",
                  padding: "5px 12px",
                  borderRadius: "var(--radius-full)",
                  border: "1px solid var(--border)",
                  fontWeight: 600
                }}
              >
                {t(copy.capitalLabel)}: {company.charterCapital}
              </span>
            </div>
          </Col>

          {/* Contact Details */}
          <Col xs={24} sm={14} lg={8}>
            <h4
              style={{
                color: "var(--text)",
                fontFamily: "var(--font-serif)",
                fontSize: 18,
                marginBottom: 16,
                fontWeight: 700
              }}
            >
              {t(copy.contactHeading)}
            </h4>

            <div style={{ display: "grid", gap: 10 }}>
              <div className="tl-contact-card">
                <div className="tl-contact-icon">
                  <EnvironmentOutlined />
                </div>
                <div>
                  <div
                    style={{
                      fontSize: 12,
                      color: "var(--gold-dark)",
                      fontWeight: 700
                    }}
                  >
                    {t(copy.officeLabel)}
                  </div>
                  <div
                    style={{
                      fontSize: 13,
                      color: "var(--text-secondary)",
                      marginTop: 2,
                      lineHeight: 1.45
                    }}
                  >
                    {company.address}
                  </div>
                </div>
              </div>

              <a
                href={`tel:${company.phone.replace(/\s+/g, "")}`}
                className="tl-contact-card"
              >
                <div className="tl-contact-icon">
                  <PhoneOutlined />
                </div>
                <div>
                  <div
                    style={{
                      fontSize: 12,
                      color: "var(--gold-dark)",
                      fontWeight: 700
                    }}
                  >
                    {t(copy.hotlineLabel)}
                  </div>
                  <div
                    style={{
                      fontSize: 14,
                      color: "var(--text)",
                      marginTop: 2,
                      fontWeight: 700
                    }}
                  >
                    {company.phone}
                  </div>
                </div>
              </a>

              <a
                href="mailto:lienhe@thanglongenergy.vn"
                className="tl-contact-card"
              >
                <div className="tl-contact-icon">
                  <MailOutlined />
                </div>
                <div>
                  <div
                    style={{
                      fontSize: 12,
                      color: "var(--gold-dark)",
                      fontWeight: 700
                    }}
                  >
                    {t(copy.emailLabel)}
                  </div>
                  <div
                    style={{
                      fontSize: 13.5,
                      color: "var(--text-secondary)",
                      marginTop: 2,
                      fontWeight: 500
                    }}
                  >
                    lienhe@thanglongenergy.vn
                  </div>
                </div>
              </a>
            </div>
          </Col>

          {/* Quick Links */}
          <Col xs={24} sm={10} lg={6}>
            <h4
              style={{
                color: "var(--text)",
                fontFamily: "var(--font-serif)",
                fontSize: 18,
                marginBottom: 16,
                fontWeight: 700
              }}
            >
              {t(copy.quickLinksHeading)}
            </h4>
            <div style={{ display: "grid", gap: 6 }}>
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  to={l.href}
                  style={{
                    fontSize: 14,
                    color: "var(--text-secondary)",
                    padding: "4px 0",
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    fontWeight: 500,
                    transition: "color 0.2s"
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--gold-dark)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--text-secondary)")
                  }
                >
                  <span style={{ color: "var(--gold-dark)", fontSize: 10 }}>
                    ›
                  </span>
                  {t(l.label)}
                </Link>
              ))}
            </div>
          </Col>
        </Row>

        {/* Bottom Bar */}
        <div
          style={{
            marginTop: 48,
            paddingTop: 20,
            borderTop: "1px solid var(--border)",
            fontSize: 13,
            color: "var(--text-muted)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12
          }}
        >
          <span>
            © {new Date().getFullYear()} {company.nameEn}. {t(copy.rightsReserved)}
          </span>
          <span>
            {t(copy.legalRepLabel)}:{" "}
            <strong style={{ color: "var(--text)" }}>
              {company.legalRepName} — {t(company.legalRepTitle)}
            </strong>
          </span>
        </div>
      </div>

      {/* Floating Back to Top */}
      {showTopBtn && (
        <button
          type="button"
          className="tl-back-to-top"
          onClick={scrollToTop}
          title={t(copy.backToTop)}
          aria-label={t(copy.backToTop)}
        >
          <ArrowUpOutlined />
        </button>
      )}
    </footer>
  );
}
