import { useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import {
  ArrowRightOutlined,
  ArrowUpOutlined,
  FileProtectOutlined,
  ThunderboltOutlined,
  BuildOutlined,
  AppstoreOutlined,
  TeamOutlined,
  EnvironmentOutlined,
  GlobalOutlined
} from "@ant-design/icons";
import { heroStats, company, projects, partnerLogos } from "../data/content";
import { useLang } from "../i18n/LanguageContext";
import { hero as copy, footer as footerCopy } from "../i18n/copy";
import heroImage from "../assets/derived/hero-skyline.jpg";

const statIcons = [
  <ThunderboltOutlined key="0" />,
  <BuildOutlined key="1" />,
  <AppstoreOutlined key="2" />,
  <TeamOutlined key="3" />
];

// Pointer-driven 3D tilt. Writes CSS vars straight to the node (no React
// state) so the animation never triggers a re-render.
function useTilt() {
  const ref = useRef(null);
  const frame = useRef(0);

  const onPointerMove = (e) => {
    const el = ref.current;
    if (!el || e.pointerType === "touch") return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      el.style.setProperty("--rx", `${(-y * 7).toFixed(2)}deg`);
      el.style.setProperty("--ry", `${(x * 9).toFixed(2)}deg`);
      el.style.setProperty("--mx", `${((x + 0.5) * 100).toFixed(1)}%`);
      el.style.setProperty("--my", `${((y + 0.5) * 100).toFixed(1)}%`);
    });
  };

  const onPointerLeave = () => {
    cancelAnimationFrame(frame.current);
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
  };

  return { ref, onPointerMove, onPointerLeave };
}

function HeroVisual() {
  const { t } = useLang();
  const tilt = useTilt();

  return (
    <div className="tl-hero-stage tl-rise" style={{ "--i": 3 }} {...tilt}>
      <div className="tl-hero-visual">
        <img src={heroImage} alt={copy.visualCaption.en} loading="eager" />
        <div className="tl-hero-visual-sheen" />
        <div className="tl-hero-visual-caption">{t(copy.visualCaption)}</div>
      </div>

      <div className="tl-float-card tl-float-a">
        <div className="tl-float-icon">
          <ThunderboltOutlined />
        </div>
        <div>
          <div className="tl-float-value">2.000 MW</div>
          <div className="tl-float-label">{t(copy.floatCapacity)}</div>
        </div>
        <div className="tl-float-bars" aria-hidden="true">
          {[38, 62, 48, 80, 66, 94].map((h, i) => (
            <span key={i} style={{ "--h": `${h}%`, "--i": i }} />
          ))}
        </div>
      </div>

      <div className="tl-float-card tl-float-b">
        <GlobalOutlined className="tl-float-b-icon" />
        <span>{t(copy.floatCorridor)}</span>
      </div>
    </div>
  );
}

function PartnerMarquee() {
  const { t } = useLang();
  const row = partnerLogos.slice(0, 22);

  return (
    <section className="tl-marquee-band" aria-label={t(copy.partnersLabel)}>
      <div className="tl-container">
        <div className="tl-marquee-label">{t(copy.partnersLabel)}</div>
      </div>
      <div className="tl-marquee">
        {/* Rendered twice so translateX(-50%) loops seamlessly. */}
        <div className="tl-marquee-track">
          {[...row, ...row].map((name, i) => (
            <span className="tl-marquee-item" key={i} aria-hidden={i >= row.length}>
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectBento() {
  const { t } = useLang();

  return (
    <section className="tl-home-projects">
      <div className="tl-container">
        <div className="tl-home-projects-head">
          <div>
            <div className="tl-eyebrow">
              <span>{t(copy.projectsEyebrow)}</span>
            </div>
            <h2 className="tl-heading" style={{ fontSize: "clamp(28px, 3.4vw, 42px)", marginTop: 18 }}>
              {t(copy.projectsTitlePre)}
              <em>{t(copy.projectsTitleEm)}</em>
            </h2>
          </div>
          <Link to="/du-an">
            <Button className="tl-btn-ghost" icon={<ArrowRightOutlined />} iconPosition="end">
              {t(copy.projectsCta)}
            </Button>
          </Link>
        </div>

        <div className="tl-bento">
          {projects.map((p, i) => (
            <Link
              to="/du-an"
              key={p.id}
              className={`tl-bento-tile tl-reveal ${i === 0 ? "tl-bento-lead" : ""}`}
              style={{ "--i": i }}
            >
              <img src={p.cover} alt={t(p.title)} loading="lazy" />
              <div className="tl-bento-index">{p.index}</div>
              <div className="tl-bento-glass">
                <div style={{ minWidth: 0 }}>
                  <div className="tl-bento-title">{t(p.title)}</div>
                  <div className="tl-bento-meta">
                    <EnvironmentOutlined /> {t(p.location)}
                  </div>
                </div>
                <span className="tl-bento-arrow" aria-label={t(copy.projectsOpen)}>
                  <ArrowUpOutlined />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Hero() {
  const { t } = useLang();

  return (
    <>
      <section className="tl-hero">
        <div className="tl-hero-grid-lines" aria-hidden="true" />
        <div className="tl-container">
          <div className="tl-hero-grid">
            <div>
              <div className="tl-status-pill tl-rise" style={{ "--i": 0 }}>
                <span className="tl-status-dot" />
                {t(copy.status)}
              </div>

              <h1 className="tl-hero-title tl-rise" style={{ "--i": 1 }}>
                {t(copy.titlePre)}
                <em>{t(copy.titleEm)}</em>
                {t(copy.titlePost)}
              </h1>

              <p className="tl-lede tl-rise" style={{ "--i": 2, fontSize: 17, maxWidth: 540 }}>
                {t(copy.lede)}
              </p>

              <div className="tl-hero-ctas tl-rise" style={{ "--i": 3 }}>
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
              </div>

              <div className="tl-hero-meta tl-rise" style={{ "--i": 4 }}>
                <span style={{ color: "var(--gold-dark)", fontWeight: 700 }}>
                  {t({ vi: company.nameVi, en: company.nameEn })}
                </span>
                <span className="tl-hero-meta-sep" />
                <span>
                  {t(footerCopy.taxCodeLabel)}: <strong>{company.taxCode}</strong>
                </span>
              </div>
            </div>

            <HeroVisual />
          </div>

          <div className="tl-stat-row">
            {heroStats.map((s, index) => (
              <div className="tl-stat-card tl-rise" style={{ "--i": 5 + index }} key={index}>
                <span className="tl-stat-icon">{statIcons[index]}</span>
                <div className="tl-stat-value">{t(s.value)}</div>
                <div className="tl-stat-label">{t(s.label)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PartnerMarquee />
      <ProjectBento />
    </>
  );
}
