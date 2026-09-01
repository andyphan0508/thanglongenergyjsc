import React from "react";
import ReactDOM from "react-dom/client";
import { ConfigProvider, theme } from "antd";
import App from "./App.jsx";
import "./index.css";

const { darkAlgorithm } = theme;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        algorithm: darkAlgorithm,
        token: {
          colorPrimary: "#d6a75c",
          colorBgBase: "#0a0a0b",
          colorBgContainer: "#16161a",
          colorBorder: "rgba(255,255,255,0.09)",
          colorText: "#f3efe6",
          colorTextSecondary: "#a7a29a",
          fontFamily: "Inter, -apple-system, sans-serif",
          borderRadius: 10,
        },
      }}
    >
      <App />
    </ConfigProvider>
  </React.StrictMode>
);
