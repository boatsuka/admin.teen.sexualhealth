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
import { getSchool } from "../../contexts/SchoolContext";

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
  const [schoolId, setSchoolId] = useState()
  const [school, setSchool] = useState([]);
  const [mode, setMode] = useState(true);

  const getSchoolTotal = async () => {
    const school = await getSchool();

    setSchool(school);
  };

  const onSwitchMode = async (checked) => {
    setMode(checked);
  };

  const onFinish = async (values) => {
   await axios
      .all([
        axios.post(`${import.meta.env.VITE_API}/teacher/create`, {
          teacher_thai_firstname: values.teacher_thai_firstname,
          teache_thai_lastname: values.teache_thai_lastname,
          teacher_nick_name: values.teacher_nick_name,
          teacher_image_path: values.teacher_image_path,
          teacher_nickname_sound_path: "string",
          school: values.school,
        }),
      ])
      .then(
        axios.spread(async (...res) => {
         await axios.post(`${import.meta.env.VITE_API}/user/create`, {
            user_loginname: values.user_loginname,
            user_password: values.user_password,
            user_full_name: values.user_full_name,
            user_email: values.user_email,
            user_telephone: values.user_telephone,
            user_role: "NORMAL_USER_ROLE",
            user_image_path: values.teacher_image_path,
            teacher: res[0].data.teacher_id,
            school: values.school,
          });
        })
      )
   await navigate(`/school/profile/${schoolId}`)
  };

  useEffect(() => {
    getSchoolTotal();
    setSchoolId(localStorage.getItem('school_id'))
  }, []);

  return (
    <>
      <Card>
        <Form
          form={form}
          colon={false}
          name="AddStudent"
          layout="vertical"
          onFinish={onFinish}
        >
          <Row gutter={24}>
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
            <Col span={12}>
              <Form.Item
                label="ชื่อเล่น *คุณครู"
                name="teacher_nick_name"
                rules={[{ required: true, message: "กรุณากรอกชื่อผู้ใช้งาน" }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="ชื่อผู้ใช้งาน *คุณครู"
                name="user_loginname"
                rules={[{ required: true, message: "กรุณากรอกชื่อผู้ใช้งาน" }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="รหัสผ่าน *คุณครู"
                name="user_password"
                rules={[{ required: true, message: "กรุณากรอกรหัสผ่าน" }]}
              >
                <Input type="password" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="ชื่อเต็ม *คุณครู"
                name="user_full_name"
                rules={[{ required: true, message: "กรุณากรอกชื่อเต็ม" }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                label="อีเมล์ *คุณครู"
                name="user_email"
                rules={[{ required: true, message: "กรุณากรอกอีเมล์" }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                label="เบอร์โทรศัพท์ *คุณครู"
                name="user_telephone"
                rules={[{ required: true, message: "กรุณากรอกอีเมล์" }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                label="โรงเรียน *คุณครู"
                name="school"
                rules={[{ required: true, message: "กรุณากรอกโรงเรียน" }]}
              >
                <Select>
                  {school.map((option, index) => (
                    <Select.Option key={index} value={option.school_id}>
                      {option.school_thai_name}
                    </Select.Option>
                  ))}
                </Select>
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
