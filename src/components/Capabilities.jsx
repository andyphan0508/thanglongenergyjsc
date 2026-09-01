import { useState } from "react";
import { Tabs, Image } from "antd";
import { EyeOutlined } from "@ant-design/icons";
import { capabilityGroups } from "../data/content";

export default function Capabilities() {
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewIndex, setPreviewIndex] = useState(0);
  const [activeKey, setActiveKey] = useState(capabilityGroups[0].key);

  const activeGroup =
    capabilityGroups.find((g) => g.key === activeKey) || capabilityGroups[0];

  return (
    <section className="tl-section">
      <div className="tl-container">
        <div className="tl-eyebrow">
          <span className="tl-eyebrow-dot" />
          <span>Năng lực thực thi</span>
        </div>

        <h2
          className="tl-heading"
          style={{
            fontSize: "clamp(28px,3.2vw,40px)",
            maxWidth: 720,
            marginTop: 16
          }}
        >
          Thiết bị, công nghệ &amp; <em>kinh nghiệm thi công thực địa</em>
        </h2>

        <p className="tl-lede" style={{ marginTop: 14 }}>
          Năng lực toàn diện trong thi công điện gió ngoài khơi, thiết bị siêu
          trường siêu trọng, sản xuất ống thép và xử lý nền móng biển.
        </p>

        <div style={{ marginTop: 28, marginBottom: 20 }}>
          <Tabs
            activeKey={activeKey}
            onChange={setActiveKey}
            items={capabilityGroups.map((g) => ({
              key: g.key,
              label: (
                <span>
                  {g.label}{" "}
                  <span
                    style={{
                      fontSize: 11.5,
                      padding: "2px 8px",
                      borderRadius: "var(--radius-full)",
                      background: "#fef3c7",
                      color: "var(--gold-dark)",
                      fontWeight: 700,
                      marginLeft: 4
                    }}
                  >
                    {g.items.length}
                  </span>
                </span>
              )
            }))}
          />
        </div>

        {/* Hidden lightbox container */}
        <div style={{ display: "none" }}>
          <Image.PreviewGroup
            preview={{
              visible: previewVisible,
              current: previewIndex,
              onVisibleChange: setPreviewVisible,
              onChange: setPreviewIndex
            }}
          >
            {activeGroup.items.map((it, i) => (
              <Image key={i} src={it.src} alt={it.caption} />
            ))}
          </Image.PreviewGroup>
        </div>

        <div className="tl-gallery-grid">
          {activeGroup.items.map((it, i) => (
            <div
              className="tl-gallery-item"
              key={activeKey + i}
              onClick={() => {
                setPreviewIndex(i);
                setPreviewVisible(true);
              }}
            >
              <img src={it.src} alt={it.caption} loading="lazy" />
              <div className="tl-gallery-overlay-icon">
                <EyeOutlined />
              </div>
              <div className="tl-gallery-cap">{it.caption}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
