import { useState, useEffect } from "react";
import { Layout, Menu, Card, Image, Typography, Row, Col } from "antd";
import { Outlet, Link } from "react-router-dom";
import { HomeOutlined, LogoutOutlined } from "@ant-design/icons";


function PreLayout() {
  const { Title } = Typography;
  const [avatar, setAvatar] = useState("");
  const [teacherId, setTeacherId] = useState("");
  const { Header, Content, Sider, Footer } = Layout;

  const checkUserDetail = async () => {
    setTeacherId(localStorage.getItem("teacher_id"));
    setAvatar(localStorage.getItem("teacher_image_path"));
  };

  useEffect(() => {
    checkUserDetail();
  }, []);

  return (
    <>
      <Layout
        style={{
          minHeight: "100vh",
        }}
      >
        <Layout>
          <Sider style={{ backgroundColor: "#ffff" }}>
            <Menu>
              <Image width={200} src={avatar} preview={false} />
              <Menu.Item key={1}>
                <Link to={`/teacher/profile/${teacherId}`}>
                  <HomeOutlined />
                  <span>หน้าหลัก</span>
                </Link>
              </Menu.Item>
              <Menu.Item key={2} onClick={() => localStorage.clear()}>
                <Link to="/">
                  <LogoutOutlined />
                  <span>ออกจากระบบ</span>
                </Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Content
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              <Outlet />
            </Content>
            <Footer
              style={{
                textAlign: "center",
              }}
            >
              TeenSexualHealth ©2022 Created by Suphaphit Suka version
              {import.meta.env.VITE_VERSION}
            </Footer>
          </Layout>
        </Layout>
      </Layout>
    </>
  );
}

export default PreLayout;
