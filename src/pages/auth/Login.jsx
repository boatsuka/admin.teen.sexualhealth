import React from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { Image, Button, Card, Form, Input, Layout, Row, Col } from "antd";
import { UserOutlined, SafetyCertificateOutlined } from "@ant-design/icons";
import { authToLogin } from "../../contexts/AuthContext";

function Login() {
  const navigate = useNavigate();

  const onFinish = async (values) => {
     const res = await authToLogin(values.username, values.password);
    const data = jwt_decode(res.access_token);

    localStorage.setItem("jwt", res.access_token);
    localStorage.setItem("user_id", data.user_id);
    localStorage.setItem("user_role", data.user_role);
    localStorage.setItem("teacher_id", data.teacher.teacher_id);
    localStorage.setItem("teacher_image_path", data.teacher.teacher_image_path);
    localStorage.setItem("school_id", data.school.school_id);

    switch (data.user_role) {
      case "SUPER_ADMIN_USER":
        navigate("/school");
        break;
      case "ADMIN_USER_ROLE":
        navigate(`/school/profile/${data.school.school_id}`);
        break;
      case "NORMAL_USER_ROLE":
        navigate(`/teacher/profile/${data.teacher.teacher_id}`);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <Layout
        style={{
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <Card>
          <Row gutter={[8, 8]}>
            <Col span={8}>
              <Image src={"https://joeschmoe.io/api/v1/random"} size={600} />
            </Col>
            <Col span={16} style={{marginTop: "10px"}}>
              <Row gutter={[24, 24]}>
                <Form onFinish={onFinish}>
                  <Form.Item
                    label="ชื่อผู้ใช้งาน"
                    name="username"
                    rules={[
                      { required: true, message: "กรุณากรอกชื่อผู้ใช้งาน" },
                    ]}
                  >
                    <Input prefix={<UserOutlined />} />
                  </Form.Item>
                  <Form.Item
                    label="รหัสผ่าน"
                    name="password"
                    rules={[{ required: true, message: "กรุณากรอกรหัสผ่าน" }]}
                  >
                    <Input.Password prefix={<SafetyCertificateOutlined />} />
                  </Form.Item>
                  <Form.Item>
                    <Button type="primary" htmlType="submit">
                      เข้าสู่ระบบ
                    </Button>
                  </Form.Item>
                </Form>
              </Row>
            </Col>
          </Row>
        </Card>
      </Layout>

      <style>
        {`
              body {
                min-height: 100vh;
                position: relative;
                margin: 0;;
                text-align: center;
              }
            `}
      </style>
    </>
  );
}

export default Login;
