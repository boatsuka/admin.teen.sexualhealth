import React from "react";
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
import { useNavigate, useParams } from "react-router-dom";
import { getSchoolById } from "../../contexts/SchoolContext";

function EditSchool() {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const { schoolId } = useParams();

  const getSchool = useCallback(async () => {
    const data = await getSchoolById(schoolId);

    form.setFieldsValue(data[0]);
  });

  const onFinish = async (values) => {
    const formData = new FormData();
    formData.append("file", file);

    axios.post(`${import.meta.env.VITE_API}/school/create`, {
      school_thai_name: values.school_thai_name,
      school_address_number: values.school_address_number,
      school_zone: values.school_zone,
      school_english_name: values.school_english_name,
      school_road: values.school_road,
      school_subdistrict: values.school_subdistrict,
      school_district: values.school_district,
      school_province: values.school_province,
      school_postcode: values.school_postcode,
      school_code_url: Math.floor(Math.random() * 100000),
      school_logo_path: `${import.meta.env.VITE_API}/files/upload/${
        res.data.path
      }`,
      coordinate_teacher_id: 0,
    });
  };

  useEffect(() => {
    getSchool();
  });

  return (
    <>
      <Card>
        <Form
          form={form}
          name="EditStudent"
          layout="vertical"
          onFinish={onFinish}
        >
          <Row gutter={24}>
            <Col span={12}>
              <Form.Item
                label="ชื่อสถานศึกษา"
                name="school_thai_name"
                rules={[{ required: true, message: "กรุณากรอกชื่อ" }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="ชื่อสถานศึกษา *ภาษาอังกฤษ"
                name="school_english_name"
                rules={[
                  {
                    required: true,
                    message: "กรุณากรอกชื่อสถานศึกษา *ภาษาอังกฤษ",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="ที่อยู่สถานศึกษา"
                name="school_address_number"
                rules={[
                  { required: true, message: "กรุณากรอกที่อยู่สถานศึกษา" },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="เขต"
                name="school_zone"
                rules={[{ required: true, message: "กรุณากรอกชื่อเขต" }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="ถนน"
                name="school_road"
                rules={[{ required: true, message: "กรุณากรอกชื่อถนน" }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="ตำบล"
                name="school_subdistrict"
                rules={[{ required: true, message: "กรุณากรอกชื่อตำบล" }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="อำเภอ"
                name="school_district"
                rules={[{ required: true, message: "กรุณากรอกชื่ออำเภอ" }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="จังหวัด"
                name="school_province"
                rules={[{ required: true, message: "กรุณากรอกชื่อจังหวัด" }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                label="รหัสไปรษณีย์"
                name="school_postcode"
                rules={[
                  { required: true, message: "กรุณากรอกชื่อรหัสไปรษณีย์" },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={[24]}>
              <Input type="file" />
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

export default EditSchool;
