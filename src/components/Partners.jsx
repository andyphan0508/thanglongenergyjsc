import { useState } from "react";
import { Tag, Row, Col, Image } from "antd";
import { partnerLogos, partnerPages } from "../data/content";

export default function Partners() {
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewIndex, setPreviewIndex] = useState(0);

  return (
    <section className="tl-section" id="doi-tac">
      <div className="tl-container">
        <span className="tl-eyebrow">Đối tác &amp; khách hàng</span>
        <h2 className="tl-heading" style={{ fontSize: "clamp(28px,3.4vw,40px)", maxWidth: 700 }}>
          Đồng hành cùng <em>các tập đoàn kỹ thuật hàng đầu</em>
        </h2>
        <p className="tl-lede" style={{ marginTop: 16 }}>
          Mạng lưới đối tác thi công, tổng thầu và khách hàng trong lĩnh vực năng
          lượng, xây dựng hạ tầng và dầu khí trên toàn cầu.
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 34 }}>
          {partnerLogos.map((p) => (
            <Tag className="tl-partner-tag" key={p}>
              {p}
            </Tag>
          ))}
        </div>

        <div style={{ display: "none" }}>
          <Image.PreviewGroup
            preview={{
              visible: previewVisible,
              current: previewIndex,
              onVisibleChange: setPreviewVisible,
              onChange: setPreviewIndex,
            }}
          >
            {partnerPages.map((src, i) => (
              <Image key={i} src={src} alt={`Partner & Customer ${i + 1}`} />
            ))}
          </Image.PreviewGroup>
        </div>

        <Row gutter={[16, 16]} style={{ marginTop: 20 }}>
          {partnerPages.map((src, i) => (
            <Col xs={24} sm={12} key={i}>
              <div
                className="tl-doc-img-wrap"
                style={{ aspectRatio: "4/3", borderRadius: "var(--radius-md)", border: "1px solid var(--border)" }}
                onClick={() => { setPreviewIndex(i); setPreviewVisible(true); }}
              >
                <img src={src} alt={`Partner & Customer ${i + 1}`} loading="lazy" />
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
}
