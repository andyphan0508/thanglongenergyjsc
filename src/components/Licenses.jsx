import { useState } from "react";
import { Row, Col, Image } from "antd";
import { SafetyCertificateOutlined, EyeOutlined } from "@ant-design/icons";
import { licenseDocs } from "../data/content";
import { useLang } from "../i18n/LanguageContext";
import { licensesPage as copy } from "../i18n/copy";

export default function Licenses() {
  const { t } = useLang();
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewIndex, setPreviewIndex] = useState(0);

  return (
    <section className="tl-section">
      <div className="tl-container">
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

        <div style={{ display: "none" }}>
          <Image.PreviewGroup
            preview={{
              visible: previewVisible,
              current: previewIndex,
              onVisibleChange: setPreviewVisible,
              onChange: setPreviewIndex
            }}
          >
            {licenseDocs.map((d, i) => (
              <Image key={i} src={d.src} alt={t(d.title)} />
            ))}
          </Image.PreviewGroup>
        </div>

        <Row gutter={[16, 16]} style={{ marginTop: 32 }}>
          {licenseDocs.map((d, i) => (
            <Col xs={12} sm={8} lg={4} key={i}>
              <div className="tl-doc">
                <div
                  className="tl-doc-img-wrap"
                  onClick={() => {
                    setPreviewIndex(i);
                    setPreviewVisible(true);
                  }}
                  role="button"
                  tabIndex={0}
                >
                  <img src={d.src} alt={t(d.title)} loading="lazy" />
                  <div className="tl-gallery-overlay-icon">
                    <EyeOutlined />
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      bottom: 8,
                      left: 8,
                      background: "rgba(255, 255, 255, 0.9)",
                      border: "1px solid var(--border)",
                      borderRadius: 4,
                      padding: "2px 6px",
                      fontSize: 10.5,
                      color: "var(--gold-dark)",
                      fontWeight: 700
                    }}
                  >
                    {t(copy.docLabel)} 0{i + 1}
                  </div>
                </div>

                <div className="tl-doc-cap">
                  <b>
                    <SafetyCertificateOutlined
                      style={{ color: "var(--gold-dark)", marginRight: 6 }}
                    />
                    {t(d.title)}
                  </b>
                  <span
                    style={{
                      fontSize: 12,
                      color: "var(--text-muted)",
                      marginTop: "auto",
                      lineHeight: 1.45
                    }}
                  >
                    {t(d.desc)}
                  </span>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
}
