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
              <Route path="/crypo/:coinId" component={CoinDetails} />
              <Route path="/news" component={News} />
            </Routes>
          </div>
        </Layout>
      </div>
      <div className="footer"></div>
    </div>
  );
};

export default App;
