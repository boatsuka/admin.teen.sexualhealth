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
import axios from 'axios';
import { getStudentById, updateStudent } from "../../contexts/StudentContext";
import { useNavigate, useParams } from "react-router-dom";

function EditStudent() {
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
    "http://www.teen-sexualhealth.com/api/files/upload/G1.png",
    "http://www.teen-sexualhealth.com/api/files/upload/G2.png",
    "http://www.teen-sexualhealth.com/api/files/upload/G3.png",
    "http://www.teen-sexualhealth.com/api/files/upload/G4.png",
    "http://www.teen-sexualhealth.com/api/files/upload/G5.png",
    "http://www.teen-sexualhealth.com/api/files/upload/G6.png",
    "http://www.teen-sexualhealth.com/api/files/upload/G7.png",
    "http://www.teen-sexualhealth.com/api/files/upload/G8.png",
    "http://www.teen-sexualhealth.com/api/files/upload/G9.png",
    "http://www.teen-sexualhealth.com/api/files/upload/G10.png",
    "http://www.teen-sexualhealth.com/api/files/upload/B1.png",
    "http://www.teen-sexualhealth.com/api/files/upload/B2.png",
    "http://www.teen-sexualhealth.com/api/files/upload/B3.png",
    "http://www.teen-sexualhealth.com/api/files/upload/B4.png",
    "http://www.teen-sexualhealth.com/api/files/upload/B5.png",
    "http://www.teen-sexualhealth.com/api/files/upload/B6.png",
    "http://www.teen-sexualhealth.com/api/files/upload/B7.png",
    "http://www.teen-sexualhealth.com/api/files/upload/B8.png",
    "http://www.teen-sexualhealth.com/api/files/upload/B9.png",
    "http://www.teen-sexualhealth.com/api/files/upload/B10.png",
    "http://www.teen-sexualhealth.com/api/files/upload/tiger.jpg",
    "http://www.teen-sexualhealth.com/api/files/upload/rabbit.jpg",
    "http://www.teen-sexualhealth.com/api/files/upload/dear.jpg",
    "http://www.teen-sexualhealth.com/api/files/upload/cat.jpg",
    "http://www.teen-sexualhealth.com/api/files/upload/dog.jpg",
    "http://www.teen-sexualhealth.com/api/files/upload/dog2.jpg",
    "http://www.teen-sexualhealth.com/api/files/upload/mouse.jpg",
  ];
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const { studentId } = useParams();
  const [mode, setMode] = useState(true);
  const [teacherId, setTeacherId] = useState();

  const getStudent = useCallback(async () => {
    const data = await getStudentById(studentId);

    form.setFieldsValue(data)
  });

  const onSwitchMode = async (checked) => {
    setMode(checked);
  };

  const onFinish = async (values) => {
    await axios
    .patch(`${import.meta.env.VITE_API}/student/edit/${studentId}`, {
      student_fisrtname: values.student_fisrtname,
      student_lastname: values.student_lastname,
      student_level: values.student_level,
      student_nickname: values.student_nickname,
      student_study_year: values.student_study_year,
      student_initial_name: values.student_initial_name,
      teacher: teacherId,
      student_dragdrop: values.student_dragdrop,
      student_avatar_path: values.student_avatar_path,
    })
    .then(async () => {
      await navigate(`/teacher/profile/${teacherId}`)
    })
  };

  useEffect(() => {
    getStudent();
    setTeacherId(localStorage.getItem("teacher_id"));
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
            <Col span={12}>
              <Form.Item
              shouldUpdate
                label="คำนำหน้า"
                name="student_initial_name"
                rules={[{ required: true, message: "กรุณาเลือกคำนำหน้า" }]}
              >
                <Select style={{ width: "100%" }}>
                  <Select.Option value="เด็กชาย">เด็กชาย</Select.Option>
                  <Select.Option value="เด็กหญิง">เด็กหญิง</Select.Option>
                  <Select.Option value="นาย">นาย</Select.Option>
                  <Select.Option value="นางสาว">นางสาว</Select.Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="ชื่อ"
                name="student_fisrtname"
                rules={[{ required: true, message: "กรุณากรอกชื่อ" }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="นามสกุล"
                name="student_lastname"
                rules={[{ required: true, message: "กรุณากรอกนามสกุลถ" }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="ชื่อเล่น"
                name="student_nickname"
                rules={[{ required: true, message: "กรุณากรอกชื่อเล่น" }]}
              >
                <Input />
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item
                label="ระดับความสามารถ"
                name="student_level"
                rules={[
                  { required: true, message: "กรุณาเลือกระดับความสามารถ" },
                ]}
              >
                <Select style={{ width: "100%" }}>
                  <Select.Option value={0}>Basic</Select.Option>
                  <Select.Option value={1}>Advance</Select.Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="ระดับชั้นปีการศึกษา"
                name="student_study_year"
                rules={[
                  {
                    required: true,
                    message: "กรุณาเลือกระดับชั้นปีการศึกษา",
                  },
                ]}
              >
                <Select style={{ width: "100%" }}>
                  <Select.Option value={1}>มัธยมศึกษาปีที่ 1</Select.Option>
                  <Select.Option value={2}>มัธยมศึกษาปีที่ 2</Select.Option>
                  <Select.Option value={3}>มัธยมศึกษาปีที่ 3</Select.Option>
                  <Select.Option value={4}>มัธยมศึกษาปีที่ 4</Select.Option>
                  <Select.Option value={5}>มัธยมศึกษาปีที่ 5</Select.Option>
                  <Select.Option value={6}>มัธยมศึกษาปีที่ 6</Select.Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                label="ระดับความสามารถในการทำแบบทดสอบ DragDrop"
                name="student_dragdrop"
                rules={[
                  { required: true, message: "กรุณาเลือกระดับความสามารถ" },
                ]}
              >
                <Select style={{ width: "100%" }}>
                  <Select.Option value={true}>ทำได้</Select.Option>
                  <Select.Option value={false}>ทำไม่ได้</Select.Option>
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
                <Form.Item name="student_avatar_path">
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

export default EditStudent;
