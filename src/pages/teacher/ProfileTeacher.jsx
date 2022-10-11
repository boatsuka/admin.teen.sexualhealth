import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Table, Card, Row, Col, Statistic, Button, Avatar, Space } from "antd";
import { getTeacherById } from "../../contexts/TeacherContext";
import { ArrowDownOutlined, ArrowUpOutlined, UserAddOutlined } from "@ant-design/icons";

function ProfileTeacher() {
  const navigate = useNavigate();
  const { teacherId } = useParams();
  const [student, setStudent] = useState([]);
  const [teacher, setTeacher] = useState([]);

  const checkAuthToJWT = async () => {
    const jwt = localStorage.getItem('jwt')

    if (jwt === null) {
      navigate('/')
    }
  }

  const getTeacher = async () => {
    const data = await getTeacherById(teacherId);

    setStudent(data.students);
  };

  useEffect(() => {
    getTeacher();
    checkAuthToJWT();
  }, [teacherId]);

  const columns = [
    {
      title: "รูปภาพนักเรียน",
      dataIndex: "student_avatar_path",
      key: "student_avatar_path",
      width: 200,
      render: (text) => <Avatar src={text}/>,
    },
    {
      title: "ชื่อ",
      dataIndex: "student_fisrtname",
      key: "student_fisrtname",
      width: 150,
      render: (text) => <p>{text}</p>,
    },
    {
      title: "นามสกุล",
      dataIndex: "student_lastname",
      key: "student_lastname",
      width: 150,
      render: (text) => <p>{text}</p>,
    },
    {
      title: "ชื่อเล่น",
      dataIndex: "student_nickname",
      key: "student_nickname",
      width: 150,
    },
    {
      title: "เพศ",
      dataIndex: "student_gender",
      key: "student_gender",
      width: 100,
      render: (text) => (text === "m" ? <p>เพศชาย</p> : <p>เพศหญิง</p>),
    },
    {
      width: 500,
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="small">
          <Button primary type="primary" onClick={() => navigate(`/student/profile/${record.student_id}`)}>
            ดูข้อมูล
          </Button>
          <Button type="primary" style={{ background: "#ff9a00" }}>
            แก้ไขข้อมูล
          </Button>
          <Button danger type="primary">
            ลบข้อมูล
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col sm={8}>
          <Card>
            <Statistic
              title="Active"
              value={11.28}
              precision={2}
              valueStyle={{ color: "#3f8600" }}
              prefix={<ArrowUpOutlined />}
              suffix="%"
            />
          </Card>
        </Col>
        <Col sm={8}>
          <Card>
            <Statistic
              title="Idle"
              value={9.3}
              precision={2}
              valueStyle={{ color: "#cf1322" }}
              prefix={<ArrowDownOutlined />}
              suffix="%"
            />
          </Card>
        </Col>
        <Col sm={8}>
          <Card>
            <Statistic
              title="Idle"
              value={9.3}
              precision={2}
              valueStyle={{ color: "#cf1322" }}
              prefix={<ArrowDownOutlined />}
              suffix="%"
            />
          </Card>
        </Col>
        <Col span={24}>
          <Button
            type="primary"
            style={{
              marginBottom: 16,
            }}
            onClick={() => navigate("/student/add")}
          >
            <UserAddOutlined/>
            เพิ่มข้อมูลนักเรียน
          </Button>
          <Table
            size="small"
            columns={columns}
            dataSource={student}
            rowKey={"student_id"}
            pagination={{ pageSize: 50 }}
            scroll={{ y: 310 }}
          />
        </Col>
      </Row>
    </div>
  );
}

export default ProfileTeacher;
