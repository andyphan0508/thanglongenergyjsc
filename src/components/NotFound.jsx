import { Link } from "react-router-dom";
import { Button } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useLang } from "../i18n/LanguageContext";
import { notFound as copy } from "../i18n/copy";

export default function NotFound() {
  const { t } = useLang();

  return (
    <section className="tl-section" style={{ textAlign: "center" }}>
      <div className="tl-container">
        <div className="tl-eyebrow" style={{ justifyContent: "center" }}>
          <span>{t(copy.eyebrow)}</span>
        </div>

        <h2 className="tl-heading" style={{ fontSize: "clamp(28px,3.2vw,40px)", marginTop: 16 }}>
          {t(copy.headingPre)}
          <em>{t(copy.headingEm)}</em>
          {t(copy.headingPost)}
        </h2>

        <p className="tl-lede" style={{ margin: "14px auto 0", maxWidth: 520 }}>
          {t(copy.lede)}
        </p>

        <div style={{ marginTop: 32 }}>
          <Link to="/">
            <Button className="tl-btn-gold" size="large" icon={<ArrowLeftOutlined />}>
              {t(copy.backHome)}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
