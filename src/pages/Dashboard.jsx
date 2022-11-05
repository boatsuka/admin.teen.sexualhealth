import React, { useState, useEffect } from "react";
import { deleteSchool, getSchool } from "../contexts/SchoolContext";
import {
  UserAddOutlined,
  UserDeleteOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { Table, Card, Row, Col, Statistic, Button, Avatar, Space } from "antd";

function Dashboard() {
  const navigate = useNavigate();
  const [school, setSchool] = useState([]);

  const columns = [
    {
      title: "รูปภาพโรงเรียน",
      dataIndex: "school_logo_path",
      key: "school_logo_path",
      width: 150,
      render: (text) => <Avatar src={text} />,
    },
    {
      title: "ชื่อโรงเรียน",
      dataIndex: "school_thai_name",
      key: "school_thai_name",
      width: 300,
      render: (text) => <p>{text}</p>,
    },
    {
      title: "ชื่อโรงเรียน *ภาษาอังกฤษ",
      dataIndex: "school_english_name",
      key: "school_english_name",
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
            onClick={() => navigate(`/school/profile/${record.school_id}`)}
          >
            ดูข้อมูล
          </Button>
          <Button
            type="primary"
            style={{ background: "#ff9a00" }}
            onClick={() => navigate(`/school/edit/${record.school_id}`)}
          >
            แก้ไขข้อมูล
          </Button>
          <Button
            danger
            type="primary"
            onClick={async () => {
              await deleteSchool(record.school_id);
              await GetSchool();
            }}
          >
            ลบข้อมูล
          </Button>
        </Space>
      ),
    },
  ];

  const GetSchool = async () => {
    const data = await getSchool();

    setSchool(data);
  };

  useEffect(() => {
    GetSchool();
  },[]);

  console.log(school)

  return (
    <>
      <Row gutter={[16, 20]}>
        <Col sm={24}>
          <Card>
            <Statistic
              title="จำนวนโรงเรียนทั้งหมด"
              value={11}
              valueStyle={{ color: "blue" }}
              prefix={<HomeOutlined />}
              suffix="แห่ง"
            />
          </Card>
        </Col>
        <Col span={24}>
          <Button
            type="primary"
            style={{
              marginBottom: 16,
            }}
            onClick={() => navigate("/school/add")}
          >
            <UserAddOutlined />
            เพิ่มข้อมูลโรงเรียน
          </Button>
          <Table
            size="small"
            columns={columns}
            dataSource={school}
            rowKey={"student_id"}
            pagination={{ pageSize: 20 }}
            scroll={{ y: 360 }}
          />
        </Col>
      </Row>
    </>
  );
}

export default Dashboard;
