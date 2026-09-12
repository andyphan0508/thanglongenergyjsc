import { useState } from "react";
import { Image, Button } from "antd";
import {
  EnvironmentOutlined,
  CheckCircleOutlined,
  PictureOutlined,
  EyeOutlined,
  ThunderboltOutlined
} from "@ant-design/icons";
import { projects } from "../data/content";
import { useLang } from "../i18n/LanguageContext";
import { projectsPage as copy } from "../i18n/copy";

function ProjectShowcase({ project, reversed }) {
  const { t } = useLang();
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewIndex, setPreviewIndex] = useState(0);
  const list = project.facilities;
  const extra = project.highlights;

  return (
    <div className="tl-project" id={project.id}>
      <div className="tl-container">
        <div
          className="tl-project-grid"
          style={reversed ? { direction: "rtl" } : undefined}
        >
          <div style={reversed ? { direction: "ltr" } : undefined}>
            <div
              className="tl-project-cover"
              onClick={() => {
                setPreviewIndex(0);
                setPreviewVisible(true);
              }}
              role="button"
              tabIndex={0}
            >
              <img src={project.cover} alt={t(project.title)} loading="lazy" />
              <div className="tl-project-cover-badge">
                <PictureOutlined />
                <span>
                  {project.gallery.length} {t(copy.photosCount)}
                </span>
              </div>
            </div>
          </div>

          <div style={reversed ? { direction: "ltr" } : undefined}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span className="tl-project-index">
                {t(copy.badgePrefix)} {project.index}
              </span>
              <span style={{ color: "var(--border-strong)" }}>|</span>
              <span style={{ color: "var(--gold-dark)", fontSize: 13, fontWeight: 700 }}>
                {t(project.subtitle)}
              </span>
            </div>

            <h3
              className="tl-heading"
              style={{
                fontSize: "clamp(24px,2.6vw,32px)",
                margin: "10px 0 6px"
              }}
            >
              {t(project.title)}
            </h3>

            <p
              style={{
                color: "var(--text-muted)",
                fontSize: 13.5,
                display: "flex",
                gap: 6,
                alignItems: "center",
                fontWeight: 500
              }}
            >
              <EnvironmentOutlined style={{ color: "var(--gold-dark)" }} />{" "}
              {t(project.location)}
            </p>

            <p className="tl-lede" style={{ margin: "14px 0 0" }}>
              {t(project.lede)}
            </p>

            {/* Key stats */}
            <div className="tl-project-stats-grid">
              {project.stats.map((s, i) => (
                <div className="tl-project-stat-box" key={i}>
                  <div className="tl-project-stat-box-val">{t(s.value)}</div>
                  <div className="tl-project-stat-box-lbl">{t(s.label)}</div>
                </div>
              ))}
            </div>

            {/* Facilities and details */}
            <div style={{ margin: "16px 0 22px" }}>
              {list.map((f, i) => (
                <div className="tl-facility-card" key={i}>
                  <div className="tl-facility-title">
                    <CheckCircleOutlined style={{ color: "var(--gold-dark)", fontSize: 14 }} />
                    <span>{t(f.title)}</span>
                  </div>
                  <div className="tl-facility-desc">{t(f.desc)}</div>
                </div>
              ))}
              {extra?.map((h, idx) => (
                <div className="tl-facility-card" key={idx}>
                  <div className="tl-facility-title">
                    <ThunderboltOutlined style={{ color: "var(--gold-dark)", fontSize: 14 }} />
                    <span style={{ fontWeight: 600, fontSize: 13.5 }}>{t(h)}</span>
                  </div>
                </div>
              ))}
            </div>

            <Button
              className="tl-btn-ghost"
              onClick={() => {
                setPreviewIndex(0);
                setPreviewVisible(true);
              }}
              icon={<PictureOutlined style={{ color: "var(--gold-dark)" }} />}
            >
              {t(copy.galleryButton)} ({project.gallery.length} {t(copy.photosSuffix)})
            </Button>
          </div>
        </div>

        {/* Hidden preview group driving the lightbox */}
        <div style={{ display: "none" }}>
          <Image.PreviewGroup
            preview={{
              visible: previewVisible,
              current: previewIndex,
              onVisibleChange: (v) => setPreviewVisible(v),
              onChange: (cur) => setPreviewIndex(cur)
            }}
          >
            {project.gallery.map((g, i) => (
              <Image key={i} src={g.src} alt={t(g.caption)} />
            ))}
          </Image.PreviewGroup>
        </div>

        {/* Thumbnails grid */}
        <div className="tl-gallery-grid" style={{ marginTop: 32 }}>
          {project.gallery.map((g, i) => (
            <div
              className="tl-gallery-item"
              key={i}
              onClick={() => {
                setPreviewIndex(i);
                setPreviewVisible(true);
              }}
            >
              <img src={g.src} alt={t(g.caption)} loading="lazy" />
              <div className="tl-gallery-overlay-icon">
                <EyeOutlined />
              </div>
              <div className="tl-gallery-cap">{t(g.caption)}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const { t } = useLang();

  return (
    <section>
      <div
        className="tl-container"
        style={{ paddingTop: 100, borderTop: "1px solid var(--border)" }}
      >
        <div className="tl-eyebrow">
          <span>{t(copy.eyebrow)}</span>
        </div>

        <h2
          className="tl-heading"
          style={{
            fontSize: "clamp(28px,3.2vw,40px)",
            maxWidth: 720,
            marginTop: 16
          }}
        >
          {t(copy.headingPre)}
          <em>{t(copy.headingEm)}</em>
          {t(copy.headingPost)}
        </h2>

        <p className="tl-lede" style={{ marginTop: 14 }}>
          {t(copy.lede)}
        </p>

        <div style={{ marginTop: 22, display: "flex", gap: 10, flexWrap: "wrap" }}>
          {projects.map((p) => (
            <a href={`#${p.id}`} key={p.id} className="tl-tag tl-tag-active">
              {t(copy.tagPrefix)} {p.index}: {t(p.title)}
            </a>
          ))}
        </div>
      </div>

      {projects.map((p, i) => (
        <ProjectShowcase project={p} key={p.id} reversed={i % 2 === 1} />
      ))}
    </section>
  );
}
