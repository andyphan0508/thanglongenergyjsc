import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Button, Drawer, Space } from "antd";
import {
  MenuOutlined,
  ArrowRightOutlined,
  PhoneOutlined,
  MailOutlined
} from "@ant-design/icons";
import { navLinks, company } from "../data/content";
import { useLang } from "../i18n/LanguageContext";
import { nav as navCopy } from "../i18n/copy";
import logoMark from "../assets/derived/logo-mark.png";

function LangToggle() {
  const { lang, toggleLang } = useLang();
  return (
    <div className="tl-lang-toggle">
      <button
        type="button"
        className={lang === "vi" ? "active" : ""}
        onClick={() => lang !== "vi" && toggleLang()}
      >
        VI
      </button>
      <span>|</span>
      <button
        type="button"
        className={lang === "en" ? "active" : ""}
        onClick={() => lang !== "en" && toggleLang()}
      >
        EN
      </button>
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const { pathname } = useLocation();
  const { t } = useLang();

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress =
        totalScroll > 0 ? (window.scrollY / totalScroll) * 100 : 0;
      setScrollProgress(currentProgress);
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  return (
    <>
      <div
        className="tl-scroll-progress"
        style={{ width: `${scrollProgress}%` }}
      />
      <header
        className="tl-nav"
        style={{
          boxShadow: scrolled ? "0 4px 20px rgba(28, 22, 12, 0.06)" : "none",
          borderColor: scrolled ? "var(--border-gold)" : "var(--border)"
        }}
      >
        <div className="tl-nav-inner">
          <Link to="/" className="tl-brand">
            <div className="tl-brand-mark">
              <img src={logoMark} alt="Thăng Long International Energy JSC" />
            </div>
            <span>
              Thăng Long International Energy
              <small>JSC</small>
            </span>
          </Link>

          <Space size={16} className="tl-nav-desktop-wrap">
            <nav className="tl-nav-links tl-nav-desktop">
              {navLinks.map((l) => (
                <NavLink
                  key={l.href}
                  to={l.href}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  {t(l.label)}
                </NavLink>
              ))}
            </nav>
            <span className="tl-nav-desktop">
              <LangToggle />
            </span>
            <Link to="/lien-he">
              <Button
                className="tl-btn-gold tl-nav-cta"
                icon={<ArrowRightOutlined />}
                iconPosition="end"
              >
                {t(navCopy.contactCta)}
              </Button>
            </Link>
            <Button
              className="tl-nav-burger"
              shape="circle"
              icon={<MenuOutlined />}
              onClick={() => setOpen(true)}
              style={{
                background: "#ffffff",
                borderColor: "var(--border-strong)",
                color: "var(--gold-dark)"
              }}
            />
          </Space>
        </div>

        <Drawer
          placement="right"
          open={open}
          onClose={() => setOpen(false)}
          width={300}
          styles={{
            body: { background: "#ffffff", padding: "28px 24px" },
            header: {
              background: "var(--bg-soft)",
              borderColor: "var(--border)"
            }
          }}
          title={
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div className="tl-brand-mark" style={{ width: 28, height: 28 }}>
                <img src={logoMark} alt="Thăng Long International Energy JSC" />
              </div>
              <span
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: 15.5,
                  color: "var(--text)",
                  fontWeight: 700,
                  lineHeight: 1.25
                }}
              >
                Thăng Long International Energy JSC
              </span>
            </div>
          }
        >
          <Space direction="vertical" size={16} style={{ width: "100%" }}>
            <LangToggle />
            <div style={{ display: "grid", gap: 6 }}>
              {navLinks.map((l) => (
                <NavLink
                  key={l.href}
                  to={l.href}
                  onClick={() => setOpen(false)}
                  style={({ isActive }) => ({
                    fontSize: 15,
                    fontWeight: 600,
                    color: isActive ? "var(--gold-dark)" : "var(--text-secondary)",
                    padding: "10px 14px",
                    borderRadius: "var(--radius-md)",
                    background: isActive ? "var(--gold-light)" : "transparent",
                    display: "block"
                  })}
                >
                  {t(l.label)}
                </NavLink>
              ))}
            </div>

            <div
              style={{
                borderTop: "1px solid var(--border)",
                paddingTop: 20,
                marginTop: 10
              }}
            >
              <Link to="/lien-he" onClick={() => setOpen(false)}>
                <Button
                  className="tl-btn-gold"
                  block
                  icon={<ArrowRightOutlined />}
                  iconPosition="end"
                >
                  {t(navCopy.drawerCta)}
                </Button>
              </Link>
              <div
                style={{
                  marginTop: 20,
                  fontSize: 13,
                  color: "var(--text-muted)",
                  display: "grid",
                  gap: 8
                }}
              >
                <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                  <PhoneOutlined style={{ color: "var(--gold-dark)" }} />{" "}
                  {company.phone}
                </div>
                <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                  <MailOutlined style={{ color: "var(--gold-dark)" }} />{" "}
                  lienhe@thanglongenergy.vn
                </div>
              </div>
            </div>
          </Space>
        </Drawer>

        <style>{`
          .tl-nav-desktop { display: none; }
          .tl-nav-cta { display: none; }
          .tl-nav-burger { display: inline-flex; align-items: center; justify-content: center; }
          @media (min-width: 960px) {
            .tl-nav-desktop { display: flex; }
            .tl-nav-cta { display: inline-flex; }
            .tl-nav-burger { display: none; }
          }
        `}</style>
      </header>
    </>
  );
}
