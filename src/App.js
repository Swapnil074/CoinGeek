import React from "react";
import { Switch, Route, Link } from "react-router-dom";
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
      <div className="main" style={{ backgroundColor: "#051529" }}>
        <Layout style={{ backgroundColor: "#051529" }}>
          <div className="routes">
            <Switch>
              <Route exact path="/">
                <Homepage />
              </Route>
              <Route exact path="/exchanges">
                <Exchanges />
              </Route>
              <Route exact path="/cryptocurrencies">
                <Cryptocurrency />
              </Route>
              <Route exact path="/crypto/:coinId">
                <CoinDetails />
              </Route>
              <Route exact path="/news">
                <News />
              </Route>
            </Switch>
          </div>
        </Layout>
        {/* <div className="footer">
          <Typography.Title
            level={5}
            style={{ color: "white", textAlign: "center" }}
          >
            CoinGeek <br />
            All rights reserved
          </Typography.Title>
          <Space>
            <Link to="/welcome">Home</Link>
            <Link to="/exchanges">Exchanges</Link>
            <Link to="/cryptocurrency">Cryptocurrency</Link>
            <Link to="/news">News</Link>
          </Space>
        </div> */}
      </div>
    </div>
  );
};

export default App;
