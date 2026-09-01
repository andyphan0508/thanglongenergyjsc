import { useState } from "react";
import { Row, Col, Image } from "antd";
import { SafetyCertificateOutlined } from "@ant-design/icons";
import { licenseDocs } from "../data/content";

export default function Licenses() {
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewIndex, setPreviewIndex] = useState(0);

  return (
    <section className="tl-section" id="phap-ly">
      <div className="tl-container">
        <span className="tl-eyebrow">Hồ sơ pháp lý</span>
        <h2 className="tl-heading" style={{ fontSize: "clamp(28px,3.4vw,40px)", maxWidth: 700 }}>
          Giấy phép &amp; <em>chứng nhận đầu tư</em>
        </h2>
        <p className="tl-lede" style={{ marginTop: 16 }}>
          Đầy đủ giấy chứng nhận đăng ký doanh nghiệp và chứng nhận đăng ký đầu tư cho
          các dự án thành phần, được cấp bởi cơ quan quản lý nhà nước có thẩm quyền.
        </p>

        <div style={{ display: "none" }}>
          <Image.PreviewGroup
            preview={{
              visible: previewVisible,
              current: previewIndex,
              onVisibleChange: setPreviewVisible,
              onChange: setPreviewIndex,
            }}
          >
            {licenseDocs.map((d, i) => (
              <Image key={i} src={d.src} alt={d.title} />
            ))}
          </Image.PreviewGroup>
        </div>

        <Row gutter={[20, 20]} style={{ marginTop: 36 }}>
          {licenseDocs.map((d, i) => (
            <Col xs={12} sm={8} lg={4} key={i}>
              <div className="tl-doc">
                <div
                  className="tl-doc-img-wrap"
                  onClick={() => { setPreviewIndex(i); setPreviewVisible(true); }}
                >
                  <img src={d.src} alt={d.title} loading="lazy" />
                </div>
                <div className="tl-doc-cap">
                  <b>
                    <SafetyCertificateOutlined style={{ color: "var(--gold)", marginRight: 6 }} />
                    {d.title}
                  </b>
                  {d.desc}
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
}
