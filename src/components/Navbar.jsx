import { useEffect, useState } from "react";
import { Button, Drawer, Space } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { navLinks } from "../data/content";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="tl-nav" style={{ boxShadow: scrolled ? "0 8px 30px rgba(0,0,0,0.35)" : "none" }}>
      <div className="tl-nav-inner">
        <a href="#top" className="tl-brand">
          <span className="tl-brand-mark" />
          <span>
            Thăng Long Energy
            <small>International JSC</small>
          </span>
        </a>

        <Space size={10} className="tl-nav-desktop-wrap">
          <nav className="tl-nav-links tl-nav-desktop">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
          </nav>
          <Button className="tl-btn-gold tl-nav-cta" href="#lien-he">
            Liên hệ
          </Button>
          <Button
            className="tl-nav-burger"
            shape="circle"
            icon={<MenuOutlined />}
            onClick={() => setOpen(true)}
          />
        </Space>
      </div>

      <Drawer
        placement="right"
        open={open}
        onClose={() => setOpen(false)}
        width={280}
        styles={{
          body: { background: "#0e0e10", padding: 24 },
          header: { background: "#0e0e10", borderColor: "rgba(255,255,255,0.09)" },
        }}
        title={<span style={{ fontFamily: "var(--font-serif)" }}>Thăng Long Energy</span>}
      >
        <Space direction="vertical" size={18} style={{ width: "100%" }}>
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} style={{ fontSize: 16 }}>
              {l.label}
            </a>
          ))}
          <Button className="tl-btn-gold" block href="#lien-he" onClick={() => setOpen(false)}>
            Liên hệ
          </Button>
        </Space>
      </Drawer>

      <style>{`
        .tl-nav-desktop { display: none; }
        .tl-nav-cta { display: none; }
        .tl-nav-burger { display: inline-flex; }
        @media (min-width: 900px) {
          .tl-nav-desktop { display: flex; }
          .tl-nav-cta { display: inline-flex; }
          .tl-nav-burger { display: none; }
        }
      `}</style>
    </header>
  );
}
