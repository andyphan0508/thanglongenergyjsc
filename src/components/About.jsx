import { Row, Col } from "antd";
import {
  BankOutlined,
  EnvironmentOutlined,
  IdcardOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import { company } from "../data/content";

const facts = [
  { icon: <BankOutlined />, label: "Vốn điều lệ", value: company.charterCapital },
  { icon: <IdcardOutlined />, label: "Mã số doanh nghiệp", value: company.taxCode },
  { icon: <CalendarOutlined />, label: "Thành lập", value: company.established },
  { icon: <EnvironmentOutlined />, label: "Trụ sở chính", value: "Quận 1, TP. Hồ Chí Minh" },
];

export default function About() {
  return (
    <section className="tl-section" id="gioi-thieu">
      <div className="tl-container">
        <Row gutter={[56, 40]} align="top">
          <Col xs={24} lg={11}>
            <span className="tl-eyebrow">Giới thiệu</span>
            <h2 className="tl-heading" style={{ fontSize: "clamp(28px,3.4vw,40px)" }}>
              Doanh nghiệp năng lượng &amp; <em>hạ tầng công nghiệp</em> quốc tế
            </h2>
            <p className="tl-lede" style={{ marginTop: 20 }}>
              {company.nameVi} ({company.nameEn}) hoạt động trong lĩnh vực đầu tư phát
              triển năng lượng tái tạo, hạ tầng công nghiệp và bất động sản khu kinh tế.
              Công ty quy tụ đội ngũ lãnh đạo giàu kinh nghiệm quốc tế, hợp tác cùng các
              tập đoàn kỹ thuật hàng đầu để triển khai các dự án điện gió, khu công
              nghiệp đường sắt và khu kinh tế cửa khẩu quy mô lớn tại Việt Nam.
            </p>
            <p className="tl-lede" style={{ marginTop: 14 }}>
              Trụ sở chính đặt tại {company.address}.
            </p>
          </Col>

          <Col xs={24} lg={13}>
            <Row gutter={[16, 16]}>
              {facts.map((f) => (
                <Col xs={12} key={f.label}>
                  <div className="tl-card" style={{ padding: "24px 22px", height: "100%" }}>
                    <div style={{ color: "var(--gold)", fontSize: 22 }}>{f.icon}</div>
                    <div
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontSize: 20,
                        marginTop: 14,
                        color: "var(--text)",
                      }}
                    >
                      {f.value}
                    </div>
                    <div style={{ fontSize: 12.5, color: "var(--text-muted)", marginTop: 4 }}>
                      {f.label}
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
