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

function AddSchool() {
  const onFinish = async (values) => {
    const formData = new FormData();
    formData.append("school_logo_path", values.school_logo_path);
  };

  return (
    <>
      <Card>
        <Form layout="vertical" onFinish={onFinish}>
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
            {/* <Col span={24}>
              <Form.Item
                label="รูปตราสัญลักษณ์"
                name="school_logo_path"
                rules={[{ required: true, message: "กรุณาใส่รูปตราสัญลักษณ์" }]}
              >
                <Upload
                  accept="image/png, image/jpeg"
                  maxCount={1}
                  listType="picture-card"
                  showUploadList={false}
                >
                  <Button icon={<UploadOutlined />}>อัพโหลดรูปภาพ</Button>
                </Upload>
              </Form.Item>
            </Col> */}
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

export default AddSchool;
