import { Row, Col, Button } from "antd";
import {
  EnvironmentOutlined,
  PhoneOutlined,
  MailOutlined,
  ClockCircleOutlined,
  IdcardOutlined,
  BankOutlined,
  UserOutlined,
  ArrowRightOutlined
} from "@ant-design/icons";
import { company } from "../data/content";

const contactChannels = [
  {
    icon: <EnvironmentOutlined />,
    label: "Trụ sở điều hành",
    value: company.address
  },
  {
    icon: <PhoneOutlined />,
    label: "Hotline trực tiếp",
    value: company.phone,
    href: `tel:${company.phone.replace(/\s+/g, "")}`
  },
  {
    icon: <MailOutlined />,
    label: "Hộp thư điện tử",
    value: "lienhe@thanglongenergy.vn",
    href: "mailto:lienhe@thanglongenergy.vn"
  },
  {
    icon: <ClockCircleOutlined />,
    label: "Giờ làm việc",
    value: "Thứ 2 – Thứ 6, 08:00 – 17:30"
  }
];

const legalFacts = [
  { icon: <IdcardOutlined />, label: "Mã số thuế", value: company.taxCode },
  {
    icon: <BankOutlined />,
    label: "Vốn điều lệ",
    value: company.charterCapital
  },
  { icon: <UserOutlined />, label: "Đại diện pháp luật", value: company.legalRep }
];

export default function Contact() {
  return (
    <section className="tl-section" id="lien-he">
      <div className="tl-container">
        <div className="tl-eyebrow">
          <span className="tl-eyebrow-dot" />
          <span>Kết nối hợp tác</span>
        </div>

        <h2
          className="tl-heading"
          style={{ fontSize: "clamp(28px,3.2vw,40px)", maxWidth: 720, marginTop: 16 }}
        >
          Sẵn sàng đồng hành cùng <em>đối tác chiến lược</em>
        </h2>

        <p className="tl-lede" style={{ marginTop: 14, maxWidth: 640 }}>
          Đội ngũ {company.shortName} luôn sẵn sàng tiếp nhận thông tin hợp
          tác đầu tư, chuyển giao công nghệ và phát triển dự án. Liên hệ trực
          tiếp qua các kênh dưới đây.
        </p>

        <Row gutter={[48, 40]} style={{ marginTop: 36 }}>
          <Col xs={24} lg={14}>
            <div style={{ display: "grid", gap: 12 }}>
              {contactChannels.map((c) => {
                const Tag = c.href ? "a" : "div";
                return (
                  <Tag
                    key={c.label}
                    href={c.href}
                    className="tl-contact-card"
                    style={{ cursor: c.href ? "pointer" : "default" }}
                  >
                    <div className="tl-contact-icon">{c.icon}</div>
                    <div>
                      <div
                        style={{
                          fontSize: 12,
                          color: "var(--gold-dark)",
                          fontWeight: 700
                        }}
                      >
                        {c.label}
                      </div>
                      <div
                        style={{
                          fontSize: 14,
                          color: "var(--text)",
                          marginTop: 2,
                          fontWeight: 600,
                          lineHeight: 1.45
                        }}
                      >
                        {c.value}
                      </div>
                    </div>
                  </Tag>
                );
              })}
            </div>

            <Button
              className="tl-btn-gold"
              size="large"
              href="mailto:lienhe@thanglongenergy.vn"
              icon={<ArrowRightOutlined />}
              iconPosition="end"
              style={{ marginTop: 24 }}
            >
              Gửi email hợp tác
            </Button>
          </Col>

          <Col xs={24} lg={10}>
            <div
              className="tl-card"
              style={{ padding: "28px 24px", height: "100%" }}
            >
              <h4
                style={{
                  color: "var(--text)",
                  fontFamily: "var(--font-serif)",
                  fontSize: 18,
                  marginBottom: 18,
                  fontWeight: 700
                }}
              >
                Thông tin pháp nhân
              </h4>

              <div style={{ display: "grid", gap: 16 }}>
                <div>
                  <div
                    style={{
                      fontSize: 12,
                      color: "var(--text-muted)",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: 0.4
                    }}
                  >
                    Tên doanh nghiệp
                  </div>
                  <div
                    style={{
                      fontSize: 15,
                      color: "var(--text)",
                      fontWeight: 700,
                      marginTop: 4,
                      lineHeight: 1.4
                    }}
                  >
                    {company.nameVi}
                  </div>
                </div>

                {legalFacts.map((f) => (
                  <div
                    key={f.label}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      paddingTop: 14,
                      borderTop: "1px solid var(--border)"
                    }}
                  >
                    <div className="tl-contact-icon" style={{ flexShrink: 0 }}>
                      {f.icon}
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: 12,
                          color: "var(--gold-dark)",
                          fontWeight: 700
                        }}
                      >
                        {f.label}
                      </div>
                      <div
                        style={{
                          fontSize: 13.5,
                          color: "var(--text-secondary)",
                          marginTop: 2,
                          fontWeight: 600
                        }}
                      >
                        {f.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
}
