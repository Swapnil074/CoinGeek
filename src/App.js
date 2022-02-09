import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import {
  Navbar,
  Homepage,
  Exchanges,
  Cryptocurrency,
  CoinDetails,
  News,
} from "./components";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route path="/welcome" component={Homepage} />
              <Route path="/exchanges" component={Exchanges} />
              <Route path="/cryptocurrencies" component={Cryptocurrency} />
              <Route path="/crypto/:coinId" component={CoinDetails} />
              <Route path="/news" component={News} />
            </Routes>
          </div>
        </Layout>
        <div className="footer">
          <Typography.Title level={5} style={{ color: "white" }}>
            CoinGeek <br />
            All rights reserved
          </Typography.Title>
          <Space size="middle" style={{ color: "white" }}>
            <Link to="/welcome">Home</Link>
            <Link to="/exchanges">Exchanges</Link>
            <Link to="/cryptocurrency">Cryptocurrency</Link>
            <Link to="/news">News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default App;
