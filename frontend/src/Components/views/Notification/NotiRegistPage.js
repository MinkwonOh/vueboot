import { Layout, Table, Button } from "antd";

import "./NotiRegistPage.css";

import SideMenu from "../Comm/SideMenu/SideMenu";
import HeaderArea from "../Comm/HeaderArea/HeaderArea";
import ContentTitle from "../Comm/Contents/ContentTitle";

import React, { useState, useEffect } from "react";

import axios from "axios";
import NotiRegistForm from "./NotiRegistForm";

const { Content, Footer, Sider } = Layout;

export default function NotiRegistPage() {
  //사이드 메뉴 바 접고 펴기 위한 state (고정)
  const [Collapsed, setCollapsed] = useState(false);

  //사이드 메뉴 바 접고 펴기 위한 함수 (고정)
  const onCollapsed = (Collapsed) => {
    setCollapsed(!Collapsed);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={Collapsed}
        onCollapse={() => onCollapsed(Collapsed)}
      >
        <div className="logo">
          <a href="/">Logo </a>
        </div>
        <SideMenu />
      </Sider>
      <Layout className="site-layout">
        <HeaderArea />
        <Content style={{ margin: "0 16px" }}>
          <ContentTitle />
          <NotiRegistForm />
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
}
