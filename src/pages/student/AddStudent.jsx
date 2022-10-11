import { useState, useEffect } from "react";
import { Select, Image, Card, Row, Col, Form } from "antd";

function AddStudent() {
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
  const [teacherId, setTeacherId] = useState();

  useEffect(() => {
    setTeacherId(localStorage.getItem("teacher_id"));
  });

  return (
    <>
      <div>
        AddStudent : {teacherId}
        <div>
          <Card>
            <Form>
              <Row gutter={[24, 24]}>
                <Col span={24}>
                  <Form.Item>
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
                            width={128}
                            height={128}
                          />
                        </Select.Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </Card>
        </div>
        <style>
          {`
          .ant-select-single.ant-select-lg:not(.ant-select-customize-input) .ant-select-selector {
            height: 128px;
          }
        `}
        </style>
      </div>
    </>
  );
}

export default AddStudent;
