import React from "react";
import { Button, Menu, Typography, Avatar } from "antd";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  FoundOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import icon from "../images/logo.png";

export default function Navbar() {
  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size="medium" />
        <Typography.Title level={2}>
          <Link to="/">CoinGeek</Link>
        </Typography.Title>
        {/* <Button className='menu-controll-container'></Button> */}
      </div>
    </div>
  );
}
