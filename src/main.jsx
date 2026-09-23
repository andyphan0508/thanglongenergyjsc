import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ConfigProvider, theme } from "antd";
import { LanguageProvider } from "./i18n/LanguageContext.jsx";
import App from "./App.jsx";
import "./index.css";

const { defaultAlgorithm } = theme;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        algorithm: defaultAlgorithm,
        token: {
          colorPrimary: "#96702c",
          colorBgBase: "#ffffff",
          colorBgContainer: "#ffffff",
          colorBgElevated: "#ffffff",
          colorBorder: "rgba(28, 22, 12, 0.09)",
          colorBorderSecondary: "rgba(28, 22, 12, 0.05)",
          colorText: "#1c1710",
          colorTextSecondary: "#4a4236",
          colorTextTertiary: "#79705f",
          fontFamily: "'Plus Jakarta Sans', -apple-system, sans-serif",
          borderRadius: 8
        }
      }}
    >
      <LanguageProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </LanguageProvider>
    </ConfigProvider>
  </React.StrictMode>
);
