import React, { useState, useEffect } from "react";
import {
  UserAddOutlined,
  UserDeleteOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { useNavigate, useParams } from "react-router-dom";
import { Table, Card, Row, Col, Statistic, Button, Avatar, Space } from "antd";
import { getSchoolById } from "../../contexts/SchoolContext";
import { deleteTeacher } from "../../contexts/TeacherContext";

function ProfileSchool() {
  const navigate = useNavigate();
  const { schoolId } = useParams();
  const [school, setSchool] = useState([]);
  const [teacher, setTeacher] = useState([]);

  const GetSchoolById = async (schoolId) => {
    const data = await getSchoolById(schoolId);

    setSchool(data[0]);
    setTeacher(data[0].teacher)

  };

  const DeleteTeacher = async (teacher_id) => {
    await deleteTeacher(teacher_id).then(() => GetSchoolById(schoolId));
  };

  const columns = [
    {
      title: "รูปภาพ",
      dataIndex: "school_logo_path",
      key: "school_logo_path",
      width: 150,
      render: (text) => <Avatar src={text} />,
    },
    {
      title: "ชื่อ",
      dataIndex: "teacher_thai_firstname",
      key: "teacher_thai_firstname",
      width: 300,
      render: (text) => <p>{text}</p>,
    },
    {
      title: "นามสกุล",
      dataIndex: "teache_thai_lastname",
      key: "teache_thai_lastname",
      width: 300,
      render: (text) => <p>{text}</p>,
    },
    {
      width: 500,
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="small">
          <Button
            primary
            type="primary"
            onClick={() => navigate(`/teacher/profile/${record.teacher_id}`)}
          >
            ดูข้อมูล
          </Button>
          <Button
            type="primary"
            style={{ background: "#ff9a00" }}
            onClick={() => navigate(`/teacher/edit/${record.teacher_id}`)}
          >
            แก้ไขข้อมูล
          </Button>
          <Button
            danger
            type="primary"
            onClick={async () => {await DeleteTeacher(record.teacher_id), await GetSchoolById(schoolId);}}
          >
            ลบข้อมูล
          </Button>
        </Space>
      ),
    },
  ];

  useEffect(() => {
    GetSchoolById(schoolId);
  }, []);

  return (
    <>
      <Row gutter={[16, 20]}>
        <Col sm={24}>
          <Card>
            <Statistic
              title="จำนวนคุณครูทั้งหมด"
              value={11}
              valueStyle={{ color: "blue" }}
              prefix={<HomeOutlined />}
              suffix="คน"
            />
          </Card>
        </Col>
        <Col span={24}>
          <Button
            type="primary"
            style={{
              marginBottom: 16,
            }}
            onClick={() => navigate("/teacher/add")}
          >
            <UserAddOutlined />
            เพิ่มข้อมูลคุณครู
          </Button>
          <Table
            size="small"
            columns={columns}
            dataSource={teacher}
            rowKey={"student_id"}
            pagination={{ pageSize: 50 }}
            scroll={{ y: 360 }}
          />
        </Col>
      </Row>
    </>
  );
}

export default ProfileSchool;
