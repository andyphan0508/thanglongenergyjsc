import { Row, Col } from "antd";
import {
  BankOutlined,
  EnvironmentOutlined,
  IdcardOutlined,
  CalendarOutlined,
  SafetyCertificateOutlined,
  GlobalOutlined,
  RocketOutlined
} from "@ant-design/icons";
import { company } from "../data/content";

const facts = [
  {
    icon: <BankOutlined />,
    label: "Vốn điều lệ",
    value: company.charterCapital,
    sub: "100% vốn đăng ký hợp pháp"
  },
  {
    icon: <IdcardOutlined />,
    label: "Mã số doanh nghiệp",
    value: company.taxCode,
    sub: "Sở KH&ĐT TP.HCM cấp"
  },
  {
    icon: <CalendarOutlined />,
    label: "Thời gian hoạt động",
    value: `Từ ${company.established}`,
    sub: `Đổi mới lần 2: ${company.amended}`
  },
  {
    icon: <EnvironmentOutlined />,
    label: "Trụ sở điều hành",
    value: "Vincom Center, Q.1, TP.HCM",
    sub: "Phòng 1508, 72 Lê Thánh Tôn"
  }
];

const pillars = [
  {
    icon: <RocketOutlined />,
    title: "Chuyển giao công nghệ cao",
    desc: "Đối tác trực tiếp W2E Germany & Aeronautica USA"
  },
  {
    icon: <GlobalOutlined />,
    title: "Hạ tầng liên vùng",
    desc: "Tuyến đường sắt TP.HCM – Cần Thơ & KKT Xuyên Á"
  },
  {
    icon: <SafetyCertificateOutlined />,
    title: "Năng lượng & vật liệu xanh",
    desc: "Điện gió ngoài khơi, tấm 3D và điện rác Plasma"
  }
];

export default function About() {
  return (
    <section className="tl-section">
      <div className="tl-container">
        <Row gutter={[56, 40]} align="top">
          <Col xs={24} lg={11}>
            <div className="tl-eyebrow">
              <span className="tl-eyebrow-dot" />
              <span>Hồ sơ doanh nghiệp</span>
            </div>

            <h2
              className="tl-heading"
              style={{ fontSize: "clamp(28px,3.2vw,40px)", marginTop: 16 }}
            >
              Hạ tầng công nghiệp &amp; <em>năng lượng tái tạo</em> quốc tế
            </h2>

            <p className="tl-lede" style={{ marginTop: 18 }}>
              <strong style={{ color: "var(--text)" }}>{company.nameVi}</strong>{" "}
              ({company.nameEn}) quy tụ năng lực kỹ thuật và hợp tác quốc tế để
              phát triển các dự án hạ tầng công nghiệp nặng, năng lượng tái tạo
              và bất động sản khu kinh tế quy mô lớn.
            </p>

            <div style={{ marginTop: 24, display: "grid", gap: 12 }}>
              {pillars.map((p, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 14,
                    padding: "12px 16px",
                    background: "#ffffff",
                    border: "1px solid var(--border)",
                    borderRadius: "var(--radius-md)",
                    boxShadow: "0 1px 3px rgba(15, 23, 42, 0.04)"
                  }}
                >
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: "50%",
                      background: "#fef3c7",
                      border: "1px solid rgba(217, 119, 6, 0.3)",
                      color: "var(--gold-dark)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 14,
                      flexShrink: 0,
                      marginTop: 2
                    }}
                  >
                    {p.icon}
                  </div>
                  <div>
                    <div
                      style={{
                        color: "var(--text)",
                        fontWeight: 700,
                        fontSize: 14.5
                      }}
                    >
                      {p.title}
                    </div>
                    <div
                      style={{
                        color: "var(--text-muted)",
                        fontSize: 13,
                        marginTop: 2
                      }}
                    >
                      {p.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Col>

          <Col xs={24} lg={13}>
            <Row gutter={[16, 16]}>
              {facts.map((f) => (
                <Col xs={24} sm={12} key={f.label}>
                  <div
                    className="tl-card"
                    style={{
                      padding: "24px 20px",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between"
                    }}
                  >
                    <div>
                      <div
                        style={{
                          width: 44,
                          height: 44,
                          borderRadius: 12,
                          background: "#fef3c7",
                          border: "1px solid rgba(217, 119, 6, 0.3)",
                          color: "var(--gold-dark)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: 20
                        }}
                      >
                        {f.icon}
                      </div>
                      <div
                        style={{
                          fontFamily: "var(--font-serif)",
                          fontSize: 20,
                          fontWeight: 700,
                          marginTop: 16,
                          color: "var(--text)",
                          lineHeight: 1.25
                        }}
                      >
                        {f.value}
                      </div>
                    </div>
                    <div
                      style={{
                        marginTop: 14,
                        borderTop: "1px solid var(--border)",
                        paddingTop: 10
                      }}
                    >
                      <div
                        style={{
                          fontSize: 13,
                          color: "var(--gold-dark)",
                          fontWeight: 700
                        }}
                      >
                        {f.label}
                      </div>
                      <div
                        style={{
                          fontSize: 12,
                          color: "var(--text-muted)",
                          marginTop: 2
                        }}
                      >
                        {f.sub}
                      </div>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </div>
    </section>
  );
}
