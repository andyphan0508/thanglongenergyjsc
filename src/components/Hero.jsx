import { Button, Space } from "antd";
import { ArrowRightOutlined, PlayCircleOutlined } from "@ant-design/icons";
import { heroStats, company } from "../data/content";

export default function Hero() {
  return (
    <section className="tl-hero" id="top">
      <div className="tl-container">
        <span className="tl-eyebrow">Thang Long International Energy JSC</span>
        <h1 className="tl-hero-title">
          Kiến tạo hạ tầng <em>năng lượng &amp; công nghiệp</em> cho tương lai Việt Nam
        </h1>
        <p className="tl-lede" style={{ fontSize: 17.5 }}>
          Từ tổ hợp nhà máy điện gió, khu công nghiệp đường sắt tốc độ cao đến các
          khu kinh tế cửa khẩu — chúng tôi phát triển những dự án hạ tầng quy mô lớn,
          bền vững, gắn với chuyển giao công nghệ từ các đối tác quốc tế hàng đầu.
        </p>

        <Space size={14} wrap style={{ marginTop: 34 }}>
          <Button className="tl-btn-gold" size="large" href="#du-an" icon={<ArrowRightOutlined />} iconPosition="end">
            Xem các dự án
          </Button>
          <Button className="tl-btn-ghost" size="large" href="#phap-ly" icon={<PlayCircleOutlined />}>
            Hồ sơ pháp lý
          </Button>
        </Space>

        <div className="tl-stat-row">
          {heroStats.map((s) => (
            <div className="tl-stat" key={s.label}>
              <div className="tl-stat-value">{s.value}</div>
              <div className="tl-stat-label">{s.label}</div>
            </div>
          ))}
        </div>

        <p style={{ marginTop: 22, fontSize: 12.5, color: "var(--text-faint)" }}>
          {company.nameVi} · MST {company.taxCode} · Vốn điều lệ {company.charterCapital}
        </p>
      </div>
    </section>
  );
}
