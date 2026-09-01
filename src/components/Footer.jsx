import { Row, Col } from "antd";
import { EnvironmentOutlined, PhoneOutlined, MailOutlined, IdcardOutlined } from "@ant-design/icons";
import { company, navLinks } from "../data/content";

export default function Footer() {
  return (
    <footer className="tl-footer" id="lien-he">
      <div className="tl-container">
        <Row gutter={[40, 40]}>
          <Col xs={24} md={10}>
            <div className="tl-brand" style={{ fontSize: 20 }}>
              <span className="tl-brand-mark" />
              <span>
                Thăng Long Energy
                <small>International JSC</small>
              </span>
            </div>
            <p className="tl-lede" style={{ marginTop: 18, fontSize: 14 }}>
              {company.nameVi} — phát triển hạ tầng năng lượng tái tạo và khu công
              nghiệp quy mô lớn tại Việt Nam.
            </p>
          </Col>

          <Col xs={24} sm={12} md={7}>
            <h4 style={{ color: "var(--text)", fontFamily: "var(--font-serif)", fontSize: 16 }}>
              Liên hệ
            </h4>
            <Row gutter={[10, 14]} style={{ marginTop: 14 }}>
              <ContactLine icon={<EnvironmentOutlined />} text={company.address} />
              <ContactLine icon={<PhoneOutlined />} text={company.phone} />
              <ContactLine icon={<IdcardOutlined />} text={`MST ${company.taxCode}`} />
              <ContactLine icon={<MailOutlined />} text="lienhe@thanglongenergy.vn" />
            </Row>
          </Col>

          <Col xs={24} sm={12} md={7}>
            <h4 style={{ color: "var(--text)", fontFamily: "var(--font-serif)", fontSize: 16 }}>
              Điều hướng
            </h4>
            <div style={{ display: "grid", gap: 10, marginTop: 14 }}>
              {navLinks.map((l) => (
                <a key={l.href} href={l.href} style={{ fontSize: 13.5, color: "var(--text-muted)" }}>
                  {l.label}
                </a>
              ))}
            </div>
          </Col>
        </Row>

        <div
          style={{
            marginTop: 56,
            paddingTop: 24,
            borderTop: "1px solid var(--border)",
            fontSize: 12.5,
            color: "var(--text-faint)",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 8,
          }}
        >
          <span>© {new Date().getFullYear()} {company.nameEn}. All rights reserved.</span>
          <span>Người đại diện pháp luật: {company.legalRep}</span>
        </div>
      </div>
    </footer>
  );
}

function ContactLine({ icon, text }) {
  return (
    <Col xs={24} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
      <span style={{ color: "var(--gold)", marginTop: 3 }}>{icon}</span>
      <span style={{ fontSize: 13.5, color: "var(--text-muted)", lineHeight: 1.6 }}>{text}</span>
    </Col>
  );
}
