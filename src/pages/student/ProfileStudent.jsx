import moment from "moment";
import { useState, useEffect } from "react";
import { CheckOutlined, CloseOutlined, EditOutlined } from "@ant-design/icons";
import { useNavigate, useParams } from "react-router-dom";
import { Avatar, Switch, Card, Col, Input, Row, Space, Table, Tag } from "antd";
import {
  getStudentById,
  getStudentScoreById,
  postStudentBySurvey,
} from "../../contexts/StudentContext";

function ProfileStudent() {
  const { Meta } = Card;
  const navigate = useNavigate();
  const { studentId } = useParams();
  const [score, setScore] = useState([]);
  const [student, setStudent] = useState([]);
  const [learninglog, setLearninglog] = useState([]);

  const checkAuthToJWT = async () => {
    const jwt = localStorage.getItem('jwt')

    if (jwt === null) {
      navigate('/')
    }
  }

  const getStudent = async () => {
    const data = await getStudentById(studentId);
    const score = await getStudentScoreById(studentId);

    setStudent(data);
    setScore(score);
    setLearninglog(score[0].learninglog);
  };


  const onStudentBySurvey = async (checked, studentId, submoduleId) => {
    if (checked === true) {
      await postStudentBySurvey(studentId, submoduleId, 1).then(() => {
        getStudent();
      });
    } else {
      await postStudentBySurvey(studentId, submoduleId, 0).then(() => {
        getStudent();
      });
    }
  };

  useEffect(() => {
    getStudent();
    checkAuthToJWT();
  }, []);

  const columns = [
    {
      title: "สถานะการทำหน่วยการเรียนรู้",
      dataIndex: "student_submodule_pass",
      key: "student_submodule_pass",
      width: 100,
      render: (text) =>
        text === 1 ? (
          <Tag color={"green"} key={text}>
            ผ่าน
          </Tag>
        ) : (
          <Tag color={"volcano"} key={text}>
            ไม่ผ่าน
          </Tag>
        ),
    },
    {
      title: "ชื่อหน่วยการเรียนรู้",
      dataIndex: ["submodule", "module", "module_name"],
      key: "module",
      width: 150,
    },
    {
      title: "ชื่อหน่วยการเรียนรู้ย่อย",
      dataIndex: ["submodule", "submodule_name"],
      key: "module",
      width: 150,
    },
    {
      title: "คะแนน",
      dataIndex: ["learninglog", "learninglog_score"],
      key: "module",
      width: 50,
    },
    {
      width: 120,
      title: "เปลี่ยนสถานะหน่วยการเรียนรู้",
      key: "เปลี่ยนสถานะหน่วยการเรียนรู้",
      render: (_, record) => (
        <Space size="small">
          <Switch
            onClick={(checked) =>
              onStudentBySurvey(
                checked,
                record.student.student_id,
                record.submodule.submodule_id
              )
            }
            checkedChildren={<CheckOutlined />}
            unCheckedChildren={<CloseOutlined />}
            checked={record.student_submodule_pass === 1 ? true : false}
          />
        </Space>
      ),
    },
  ];

  // const expandedRowRender = () => {
  //   const columns = [
  //     {
  //       title: "เวลาที่เริ่มทำแบบทดสอบ",
  //       dataIndex: "learninglog_begin",
  //       key: "learninglog_begin",
  //       render: (text) => <p>{new Date(text).toLocaleString("th-TH")}</p>,
  //     },
  //     {
  //       title: "เวลาที่เลิกทำแบบทดสอบ",
  //       dataIndex: "learninglog_end",
  //       key: "learninglog_end",
  //       render: (text) => <span>{new Date(text).toLocaleString("th-TH")}</span>,
  //     },
  //   ];

  //   return (
  //     <Table
  //       columns={columns}
  //       dataSource={learninglog}
  //       pagination={false}
  //       rowKey={"learninglog_id"}
  //     />
  //   );
  // };

  return (
    <div>
      <Row gutter={[8, 8]}>
        <Col span={24}>
          <Card
            style={{ width: "100%" }}
            // actions={[<EditOutlined key="edit" />]}
          >
            <Row gutter={[8, 8]}>
              <Col span={4}>
                <Meta
                  avatar={
                    <Avatar src={student.student_avatar_path} size={140} />
                  }
                />
              </Col>
              <Col span={18}>
                <Row gutter={[24, 24]}>
                  <Col span={12}>
                    <Input disabled placeholder={student.student_fisrtname} />
                  </Col>
                  <Col span={12}>
                    <Input disabled placeholder={student.student_lastname} />
                  </Col>
                  <Col span={12}>
                    <Input disabled placeholder={student.student_nickname} />
                  </Col>
                  <Col span={12}>
                    <Input disabled placeholder={student.student_study_year} />
                  </Col>
                  <Col span={12}>
                    <audio
                      controls
                      src={student.student_name_sound_path}
                      type="audio/mp3"
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col span={24}>
          <div style={{ marginTop: "10px" }}>
            <Table
              size="middle"
              columns={columns}
              dataSource={score}
              rowKey={"student_submodule_id"}
              pagination={{ pageSize: 10 }}
              // expandable={{
              //   expandedRowRender,
              //   defaultExpandedRowKeys: ["0"],
              // }}
              scroll={{ y: 230 }}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default ProfileStudent;
