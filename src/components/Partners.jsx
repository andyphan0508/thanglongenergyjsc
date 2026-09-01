import { useState } from "react";
import { Row, Col, Image } from "antd";
import { EyeOutlined, GlobalOutlined } from "@ant-design/icons";
import { partnerLogos, partnerPages } from "../data/content";

export default function Partners() {
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewIndex, setPreviewIndex] = useState(0);

  return (
    <section className="tl-section">
      <div className="tl-container">
        <div className="tl-eyebrow">
          <span className="tl-eyebrow-dot" />
          <span>Hệ sinh thái đối tác</span>
        </div>

        <h2
          className="tl-heading"
          style={{
            fontSize: "clamp(28px,3.2vw,40px)",
            maxWidth: 720,
            marginTop: 16
          }}
        >
          Đồng hành cùng <em>các tập đoàn kỹ thuật quốc tế</em>
        </h2>

        <p className="tl-lede" style={{ marginTop: 14 }}>
          Mạng lưới nhà thầu và đối tác chuyển giao công nghệ hàng đầu từ Hoa
          Kỳ, CHLB Đức, Hàn Quốc và Việt Nam.
        </p>

        {/* Partner Logos Grid / Tags */}
        <div
          style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 28 }}
        >
          {partnerLogos.map((p) => (
            <div className="tl-partner-tag" key={p}>
              {p}
            </div>
          ))}
        </div>

        {/* Scanned partner catalog overview */}
        <div style={{ display: "none" }}>
          <Image.PreviewGroup
            preview={{
              visible: previewVisible,
              current: previewIndex,
              onVisibleChange: setPreviewVisible,
              onChange: setPreviewIndex
            }}
          >
            {partnerPages.map((src, i) => (
              <Image
                key={i}
                src={src}
                alt={`Đối tác & Khách hàng trang ${i + 1}`}
              />
            ))}
          </Image.PreviewGroup>
        </div>

        <div style={{ marginTop: 32 }}>
          <div
            style={{
              fontSize: 14,
              color: "var(--gold-dark)",
              fontWeight: 700,
              marginBottom: 12,
              display: "flex",
              alignItems: "center",
              gap: 6
            }}
          >
            <GlobalOutlined /> Danh mục đối tác &amp; khách hàng theo hồ sơ năng
            lực
          </div>
          <Row gutter={[16, 16]}>
            {partnerPages.map((src, i) => (
              <Col xs={24} sm={12} key={i}>
                <div
                  className="tl-doc-img-wrap"
                  style={{
                    aspectRatio: "16/10",
                    borderRadius: "var(--radius-md)",
                    border: "1px solid var(--border)",
                    position: "relative"
                  }}
                  onClick={() => {
                    setPreviewIndex(i);
                    setPreviewVisible(true);
                  }}
                  role="button"
                  tabIndex={0}
                >
                  <img
                    src={src}
                    alt={`Partner & Customer ${i + 1}`}
                    loading="lazy"
                  />
                  <div className="tl-gallery-overlay-icon">
                    <EyeOutlined />
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      bottom: 10,
                      left: 12,
                      background: "rgba(255, 255, 255, 0.9)",
                      backdropFilter: "blur(6px)",
                      border: "1px solid var(--border)",
                      borderRadius: "var(--radius-full)",
                      padding: "4px 12px",
                      fontSize: 12,
                      color: "var(--gold-dark)",
                      fontWeight: 700,
                      boxShadow: "0 2px 6px rgba(15, 23, 42, 0.08)"
                    }}
                  >
                    Danh mục đối tác — Trang {i + 1}
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </section>
  );
}
