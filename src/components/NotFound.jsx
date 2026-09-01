import { Link } from "react-router-dom";
import { Button } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";

export default function NotFound() {
  return (
    <section className="tl-section" style={{ textAlign: "center" }}>
      <div className="tl-container">
        <div className="tl-eyebrow" style={{ justifyContent: "center" }}>
          <span className="tl-eyebrow-dot" />
          <span>404 — Không tìm thấy trang</span>
        </div>

        <h2
          className="tl-heading"
          style={{ fontSize: "clamp(28px,3.2vw,40px)", marginTop: 16 }}
        >
          Trang bạn tìm không <em>tồn tại</em>
        </h2>

        <p className="tl-lede" style={{ margin: "14px auto 0", maxWidth: 520 }}>
          Đường dẫn có thể đã bị thay đổi hoặc không còn khả dụng. Vui lòng
          quay lại trang chủ để tiếp tục khám phá.
        </p>

        <div style={{ marginTop: 32 }}>
          <Link to="/">
            <Button
              className="tl-btn-gold"
              size="large"
              icon={<ArrowLeftOutlined />}
            >
              Về trang chủ
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
