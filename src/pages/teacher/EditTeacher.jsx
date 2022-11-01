import { useState, useEffect, useCallback } from "react";
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
import { getStudentById, updateStudent } from "../../contexts/StudentContext";
import { useNavigate, useParams } from "react-router-dom";
import { getTeacherById } from "../../contexts/TeacherContext";

function EditTeacher() {
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
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const { teacherId } = useParams();
  const [mode, setMode] = useState(true);

  const getTeacher = useCallback(async () => {
    const data = await getTeacherById(teacherId);

    form.setFieldsValue(data);
    form.setFieldsValue(data.teacher);
  });

  const onSwitchMode = async (checked) => {
    setMode(checked);
  };

  const onFinish = async (values) => {
    console.log(values)
    await axios.patch(`${import.meta.env.VITE_API}/teacher/edit/${teacherId}`, {
      teacher_thai_firstname: values.teacher_thai_firstname,
      teache_thai_lastname: values.teache_thai_lastname,
      teacher_nick_name: values.teacher_nick_name,
      teacher_image_path: values.teacher_image_path,
    })
    .then(async (res) => {
       console.log(res)
      }).catch((err) => {
        console.log(err)
      })
  };

  useEffect(() => {
    getTeacher();
  });

  return (
    <>
      <Card>
        <Form
          form={form}
          colon={false}
          name="EditStudent"
          layout="vertical"
          onFinish={onFinish}
        >
          <Row gutter={24}>
            {/* <Col span={12}>
              <Form.Item
                label="ชื่อผู้ใช้งาน"
                name="user_loginname"
                rules={[{ required: true, message: "กรุณากรอกชื่อผู้ใช้งาน" }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="รหัสผ่าน"
                name="user_password"
                rules={[{ required: true, message: "กรุณากรอกรหัสผ่าน" }]}
              >
                <Input type="password" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="อีเมล์"
                name="user_email"
                rules={[{ required: true, message: "กรุณากรอกอีเมล์" }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="เบอร์โทรศัพท์"
                name="user_telephone"
                rules={[{ required: true, message: "กรุณากรอกเบอร์โทรศัพท์" }]}
              >
                <Input />
              </Form.Item>
            </Col> */}
            <br />
            <Col span={12}>
              <Form.Item
                label="ชื่อจริง *คุณครู"
                name="teacher_thai_firstname"
                rules={[{ required: true, message: "กรุณากรอกชื่อผู้ใช้งาน" }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="นามสกุล *คุณครู"
                name="teache_thai_lastname"
                rules={[{ required: true, message: "กรุณากรอกชื่อผู้ใช้งาน" }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                label="ชื่อเล่น *คุณครู"
                name="teacher_nick_name"
                rules={[{ required: true, message: "กรุณากรอกชื่อผู้ใช้งาน" }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={24}>
              <div style={{ marginBottom: "5px" }}>
                <Switch defaultChecked onChange={onSwitchMode} />
                {mode ? (
                  <Tag color={"blue"} style={{ marginLeft: "10px" }}>
                    เลือกรูปภาพจากภายนอก
                  </Tag>
                ) : (
                  <Tag color={"green"} style={{ marginLeft: "10px" }}>
                    เลือกรูปภาพจากระบบ
                  </Tag>
                )}
              </div>
              {mode === true ? (
                <Form.Item name="teacher_image_path">
                  <Select
                    size="large"
                    style={{ width: "100%", textAlign: "center" }}
                  >
                    {avatar.map((item, index) => (
                      <Select.Option
                        key={index}
                        value={item}
                        style={{ textAlign: "center" }}
                      >
                        <Image
                          src={item}
                          alt="avatar"
                          width={120}
                          height={120}
                        />
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
              ) : (
                <Form.Item>
                  <Input type="file" />
                </Form.Item>
              )}
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

export default EditTeacher;
