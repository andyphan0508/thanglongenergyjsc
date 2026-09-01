import { useState } from "react";
import { Image, Tag, Button } from "antd";
import {
  EnvironmentOutlined,
  CheckCircleOutlined,
  PictureOutlined,
  EyeOutlined,
  ThunderboltOutlined
} from "@ant-design/icons";
import { projects } from "../data/content";

function ProjectShowcase({ project, reversed }) {
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
              <img src={project.cover} alt={project.title} loading="lazy" />
              <div className="tl-project-cover-badge">
                <PictureOutlined />
                <span>{project.gallery.length} hình ảnh</span>
              </div>
            </div>
          </div>

          <div style={reversed ? { direction: "ltr" } : undefined}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span className="tl-project-index">DỰ ÁN {project.index}</span>
              <span style={{ color: "var(--border-strong)" }}>|</span>
              <span
                style={{
                  color: "var(--gold-dark)",
                  fontSize: 13,
                  fontWeight: 700
                }}
              >
                {project.subtitle}
              </span>
            </div>

            <h3
              className="tl-heading"
              style={{
                fontSize: "clamp(24px,2.6vw,32px)",
                margin: "10px 0 6px"
              }}
            >
              {project.title}
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
              {project.location}
            </p>

            <p className="tl-lede" style={{ margin: "14px 0 0" }}>
              {project.lede}
            </p>

            {/* Key stats */}
            <div className="tl-project-stats-grid">
              {project.stats.map((s) => (
                <div className="tl-project-stat-box" key={s.label}>
                  <div className="tl-project-stat-box-val">{s.value}</div>
                  <div className="tl-project-stat-box-lbl">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Facilities and details */}
            <div style={{ margin: "16px 0 22px" }}>
              {list.map((f) => (
                <div className="tl-facility-card" key={f.title}>
                  <div className="tl-facility-title">
                    <CheckCircleOutlined
                      style={{ color: "var(--gold-dark)", fontSize: 14 }}
                    />
                    <span>{f.title}</span>
                  </div>
                  <div className="tl-facility-desc">{f.desc}</div>
                </div>
              ))}
              {extra?.map((h, idx) => (
                <div className="tl-facility-card" key={idx}>
                  <div className="tl-facility-title">
                    <ThunderboltOutlined
                      style={{ color: "var(--gold-dark)", fontSize: 14 }}
                    />
                    <span style={{ fontWeight: 600, fontSize: 13.5 }}>{h}</span>
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
              Xem bộ ảnh chi tiết ({project.gallery.length} hình)
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
              <Image key={i} src={g.src} alt={g.caption} />
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
              <img src={g.src} alt={g.caption} loading="lazy" />
              <div className="tl-gallery-overlay-icon">
                <EyeOutlined />
              </div>
              <div className="tl-gallery-cap">{g.caption}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section>
      <div
        className="tl-container"
        style={{ paddingTop: 100, borderTop: "1px solid var(--border)" }}
      >
        <div className="tl-eyebrow">
          <span className="tl-eyebrow-dot" />
          <span>Dự án trọng điểm</span>
        </div>

        <h2
          className="tl-heading"
          style={{
            fontSize: "clamp(28px,3.2vw,40px)",
            maxWidth: 720,
            marginTop: 16
          }}
        >
          Ba trụ cột hạ tầng <em>quy mô quốc gia</em>
        </h2>

        <p className="tl-lede" style={{ marginTop: 14 }}>
          Tập trung vào 3 lĩnh vực then chốt: sản xuất thiết bị điện gió, công
          nghiệp đường sắt tốc độ cao và khu kinh tế cửa khẩu Xuyên Á.
        </p>

        <div
          style={{ marginTop: 22, display: "flex", gap: 10, flexWrap: "wrap" }}
        >
          {projects.map((p) => (
            <a href={`#${p.id}`} key={p.id} className="tl-tag tl-tag-active">
              Dự án {p.index}: {p.title}
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
