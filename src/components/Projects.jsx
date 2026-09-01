import { useState } from "react";
import { Image, Tag } from "antd";
import { EnvironmentOutlined, RightCircleOutlined, PictureOutlined } from "@ant-design/icons";
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
            <div className="tl-project-cover" onClick={() => { setPreviewIndex(0); setPreviewVisible(true); }} role="button">
              <img src={project.cover} alt={project.title} />
            </div>
          </div>

          <div style={reversed ? { direction: "ltr" } : undefined}>
            <span className="tl-project-index">DỰ ÁN {project.index}</span>
            <h3 className="tl-heading" style={{ fontSize: "clamp(24px,2.6vw,32px)", margin: "10px 0 4px" }}>
              {project.title}
            </h3>
            <p style={{ color: "var(--gold-soft)", fontSize: 14, margin: "0 0 4px" }}>{project.subtitle}</p>
            <p style={{ color: "var(--text-faint)", fontSize: 13, display: "flex", gap: 6, alignItems: "center" }}>
              <EnvironmentOutlined /> {project.location}
            </p>

            <p className="tl-lede" style={{ margin: "18px 0 0" }}>{project.lede}</p>

            <div className="tl-project-stats">
              {project.stats.map((s) => (
                <div key={s.label}>
                  <div className="tl-project-stat-value">{s.value}</div>
                  <div className="tl-project-stat-label">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="tl-project-list">
              {list.map((f) => (
                <div className="tl-project-list-item" key={f.title}>
                  <RightCircleOutlined />
                  <span><b>{f.title}.</b> {f.desc}</span>
                </div>
              ))}
              {extra?.map((h) => (
                <div className="tl-project-list-item" key={h}>
                  <RightCircleOutlined />
                  <span>{h}</span>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={() => { setPreviewIndex(0); setPreviewVisible(true); }}
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "transparent", border: "1px solid var(--border-strong)",
                color: "var(--text)", borderRadius: 999, padding: "10px 20px",
                fontSize: 13.5, cursor: "pointer",
              }}
            >
              <PictureOutlined /> Xem thư viện ảnh ({project.gallery.length})
            </button>
          </div>
        </div>

        {/* Hidden preview group driving the lightbox */}
        <div style={{ display: "none" }}>
          <Image.PreviewGroup
            preview={{
              visible: previewVisible,
              current: previewIndex,
              onVisibleChange: (v) => setPreviewVisible(v),
              onChange: (cur) => setPreviewIndex(cur),
            }}
          >
            {project.gallery.map((g, i) => (
              <Image key={i} src={g.src} alt={g.caption} />
            ))}
          </Image.PreviewGroup>
        </div>

        <div className="tl-gallery-grid" style={{ marginTop: 34 }}>
          {project.gallery.map((g, i) => (
            <div
              className="tl-gallery-item"
              key={i}
              onClick={() => { setPreviewIndex(i); setPreviewVisible(true); }}
            >
              <img src={g.src} alt={g.caption} loading="lazy" />
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
    <section id="du-an">
      <div className="tl-container" style={{ paddingTop: 108, borderTop: "1px solid var(--border)" }}>
        <span className="tl-eyebrow">Dự án trọng điểm</span>
        <h2 className="tl-heading" style={{ fontSize: "clamp(28px,3.4vw,40px)", maxWidth: 700 }}>
          Ba trụ cột hạ tầng <em>quy mô quốc gia</em>
        </h2>
        <p className="tl-lede" style={{ marginTop: 16 }}>
          Từ sản xuất thiết bị điện gió, hạ tầng đường sắt tốc độ cao đến khu kinh tế
          cửa khẩu — mỗi dự án đều gắn liền với công nghệ chuyển giao quốc tế và cam
          kết phát triển bền vững.
        </p>
        <div style={{ marginTop: 20, display: "flex", gap: 8, flexWrap: "wrap" }}>
          {projects.map((p) => (
            <Tag className="tl-tag" key={p.id}>
              <a href={`#${p.id}`}>{p.title}</a>
            </Tag>
          ))}
        </div>
      </div>

      {projects.map((p, i) => (
        <ProjectShowcase project={p} key={p.id} reversed={i % 2 === 1} />
      ))}
    </section>
  );
}
