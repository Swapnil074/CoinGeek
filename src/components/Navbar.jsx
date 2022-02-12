import React, { useState, useEffect } from "react";
import { Button, Menu, Typography, Avatar } from "antd";
import { Link, useHistory } from "react-router-dom";

import {
  HomeOutlined,
  MoneyCollectOutlined,
  FundOutlined,
  MenuOutlined,
  BulbOutlined,
} from "@ant-design/icons";
import icon from "../images/logo.png";

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(null);
  const router = useHistory();

  const [menu, setMenu] = useState({
    border: "none",
    fontSize: 20,
    position: "absolute",
    top: "35%",
    left: "8%",
  });

  useEffect(() => {
    const handleReize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleReize);
    handleReize();

    return () => window.removeEventListener("resize", handleReize);
  }, []);

  useEffect(() => {
    if (screenSize < 768) {
      setActiveMenu(false);
      setMenu({ border: "none", fontSize: 20 });
    } else {
      setActiveMenu(true);
      setMenu({
        border: "none",
        fontSize: 20,
        position: "absolute",
        top: "35%",
        width: "100%",
      });
    }
  }, [screenSize]);

  return (
    <div className="nav-container" style={{ width: "20.15%" }}>
      <div className="logo-container">
        <Avatar src={icon} size="large" />
        <Typography.Title level={2}>
          <Link
            to="/"
            style={{
              color: "#000000",
              paddingLeft: 10,
              height: 60,
            }}
          >
            CoinGeek
          </Link>
        </Typography.Title>
        <Button
          className="menu-control-container"
          icon={<MenuOutlined />}
          onClick={() => setActiveMenu(!activeMenu)}
        />
      </div>
      {activeMenu && (
        <Menu theme="light" style={menu} className="menu-container">
          <Menu.Item
            key="1"
            style={{
              paddingBottom: 10,
              height: 60,
            }}
            onClick={() => router.push("/")}
            icon={<HomeOutlined style={{ fontSize: 20 }} />}
          >
            Home
          </Menu.Item>
          <Menu.Item
            style={{ paddingBottom: 10, height: 60 }}
            className="menu-btn"
            key="2"
            icon={<FundOutlined style={{ fontSize: 20 }} />}
            onClick={() => router.push("/cryptocurrencies")}
          >
            Cryptocurrencies
          </Menu.Item>
          <Menu.Item
            style={{ paddingBottom: 10, height: 60 }}
            key="3"
            onClick={() => router.push("/exchanges")}
            icon={<MoneyCollectOutlined style={{ fontSize: 20 }} />}
          >
            Exchanges
          </Menu.Item>
          <Menu.Item
            style={{ paddingBottom: 10 }}
            key="4"
            onClick={() => router.push("/news")}
            icon={<BulbOutlined style={{ fontSize: 20 }} />}
          >
            News
          </Menu.Item>
        </Menu>
      )}
    </div>
  );
}
