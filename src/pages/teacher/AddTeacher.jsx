import { useState, useEffect } from "react";
import {
  Select,
  Image,
  Card,
  Row,
  Col,
  Form,
  Input,
  Switch,
  Upload,
  Tag,
  Button,
} from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { getSchool } from "../../contexts/SchoolContext";

function AddTeacher() {
  const avatar = [
    "http://www.teen-sexualhealth.com/api/files/upload/bear.jpg",
    "http://www.teen-sexualhealth.com/api/files/upload/boy1.jpg",
    "http://www.teen-sexualhealth.com/api/files/upload/boy2.jpg",
    "http://www.teen-sexualhealth.com/api/files/upload/boy3.jpg",
    "http://www.teen-sexualhealth.com/api/files/upload/boy4.jpg",
    "http://www.teen-sexualhealth.com/api/files/upload/boy5.jpg",
    "http://www.teen-sexualhealth.com/api/files/upload/boy6.jpg",
    "http://www.teen-sexualhealth.com/api/files/upload/boy7.jpg",
    "http://www.teen-sexualhealth.com/api/files/upload/boy8.jpg",
    "http://www.teen-sexualhealth.com/api/files/upload/boy9.jpg",
    "http://www.teen-sexualhealth.com/api/files/upload/boy10.jpg",
    "http://www.teen-sexualhealth.com/api/files/upload/boy11.jpg",
    "http://www.teen-sexualhealth.com/api/files/upload/boy12.jpg",
    "http://www.teen-sexualhealth.com/api/files/upload/boy13.jpg",
    "http://www.teen-sexualhealth.com/api/files/upload/girl1.jpg",
    "http://www.teen-sexualhealth.com/api/files/upload/girl2.jpg",
    "http://www.teen-sexualhealth.com/api/files/upload/girl3.jpg",
    "http://www.teen-sexualhealth.com/api/files/upload/girl4.jpg",
    "http://www.teen-sexualhealth.com/api/files/upload/girl5.jpg",
    "http://www.teen-sexualhealth.com/api/files/upload/girl6.jpg",
    "http://www.teen-sexualhealth.com/api/files/upload/girl7.jpg",
    "http://www.teen-sexualhealth.com/api/files/upload/girl8.jpg",
    "http://www.teen-sexualhealth.com/api/files/upload/girl9.jpg",
    "http://www.teen-sexualhealth.com/api/files/upload/girl10.jpg",
  ];
  const navigate = useNavigate();
  const [school, setSchool] = useState();
  const [teacherId, setTeacherId] = useState();


  const GetSchool = async () => {
    const data = await getSchool();

    setSchool(data);
  };

  const onFinish = async (values) => {
    
    // axios
    //   .all([
    //     axios.post(`${import.meta.env.VITE_API}/teacher/create`, {
    //       teacher_thai_firstname: "string",
    //       teache_thai_lastname: "string",
    //       teacher_nick_name: "string",
    //       teacher_nickname_sound_path: "string",
    //       teacher_image_path: "string",
    //       school: {},
    //     }),
    //     axios.post(`${import.meta.env.VITE_API}/files/upload`),
    //   ])
    //   .then(
    //     axios.spread((...res) => {
    //       axios.post(`${import.meta.env.VITE_API}/user/create`, {
    //         user_loginname: "string",
    //         user_password: "string",
    //         user_full_name: "string",
    //         user_email: "string",
    //         user_telephone: "string",
    //         user_role: "string",
    //         user_image_path: "string",
    //         teacher: {},
    //         school: {},
    //       });
    //     })
    //   );
    // navigate(`/teacher/profile/${teacherId}`);
  };

  useEffect(() => {
    GetSchool()
  }, [])

  console.log(school)

  return (
    <>
      <Card>
        <Form layout="vertical" onFinish={onFinish}>
          <Row gutter={24}>
            <Col span={12}>
              <Form.Item
                label="โรงเรียน"
                name="school"
                rules={[{ required: true, message: "กรุณาเลือกโรงเรียน" }]}
              >
                <Select style={{ width: "100%" }}>
                  {
                    school.map((item, index) => (
                      <Select.Option key={index} value={item.school_id}>{item.school_thai_name}</Select.Option>
                    ))
                  }
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="ชื่อ"
                name="teacher_thai_firstname"
                rules={[{ required: true, message: "กรุณากรอกชื่อ" }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="นามสกุล"
                name="teache_thai_lastname"
                rules={[{ required: true, message: "กรุณากรอกนามสกุลถ" }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="ชื่อเล่น"
                name="teacher_nick_name"
                rules={[{ required: true, message: "กรุณากรอกชื่อเล่น" }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ width: "100%" }}
                >
                  บันทึกข้อมูล
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Card>
      <style>
        {`
          .ant-select-single.ant-select-lg:not(.ant-select-customize-input) .ant-select-selector {
            height: 120px;
          }
        `}
      </style>
    </>
  );
}

export default AddTeacher;
