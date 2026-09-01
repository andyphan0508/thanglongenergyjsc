import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ConfigProvider, theme } from "antd";
import App from "./App.jsx";
import "./index.css";

const { defaultAlgorithm } = theme;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        algorithm: defaultAlgorithm,
        token: {
          colorPrimary: "#d97706",
          colorBgBase: "#ffffff",
          colorBgContainer: "#ffffff",
          colorBgElevated: "#ffffff",
          colorBorder: "rgba(15, 23, 42, 0.09)",
          colorBorderSecondary: "rgba(15, 23, 42, 0.05)",
          colorText: "#0f172a",
          colorTextSecondary: "#334155",
          colorTextTertiary: "#64748b",
          fontFamily: "'Plus Jakarta Sans', 'Inter', -apple-system, sans-serif",
          borderRadius: 12
        }
      }}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ConfigProvider>
  </React.StrictMode>
);
