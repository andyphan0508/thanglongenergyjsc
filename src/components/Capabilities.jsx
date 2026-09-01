import { useState } from "react";
import { Tabs, Image } from "antd";
import { capabilityGroups } from "../data/content";

export default function Capabilities() {
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewIndex, setPreviewIndex] = useState(0);
  const [activeKey, setActiveKey] = useState(capabilityGroups[0].key);

  const activeGroup = capabilityGroups.find((g) => g.key === activeKey);

  return (
    <section className="tl-section" id="nang-luc">
      <div className="tl-container">
        <span className="tl-eyebrow">Năng lực triển khai</span>
        <h2 className="tl-heading" style={{ fontSize: "clamp(28px,3.4vw,40px)", maxWidth: 700 }}>
          Thiết bị, công nghệ &amp; <em>kinh nghiệm thi công thực địa</em>
        </h2>
        <p className="tl-lede" style={{ marginTop: 16 }}>
          Đội ngũ và đối tác kỹ thuật của Thăng Long Energy sở hữu năng lực thi công
          điện gió ngoài khơi, sản xuất thép công nghiệp và hạ tầng nền móng quy mô lớn.
        </p>

        <Tabs
          activeKey={activeKey}
          onChange={setActiveKey}
          style={{ marginTop: 32 }}
          items={capabilityGroups.map((g) => ({ key: g.key, label: g.label }))}
        />

        <div style={{ display: "none" }}>
          <Image.PreviewGroup
            preview={{
              visible: previewVisible,
              current: previewIndex,
              onVisibleChange: setPreviewVisible,
              onChange: setPreviewIndex,
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
              onClick={() => { setPreviewIndex(i); setPreviewVisible(true); }}
            >
              <img src={it.src} alt={it.caption} loading="lazy" />
              <div className="tl-gallery-cap">{it.caption}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
