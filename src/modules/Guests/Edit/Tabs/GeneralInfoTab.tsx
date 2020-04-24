import * as React from "react";
import { Form, Input, Button, Row, Col } from "antd";
import { useIntl } from "react-intl";

const { Item } = Form;

export const GeneralInfoTab: React.FC = () => {
  const { formatMessage: f } = useIntl();

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 5 }
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 12 }
    }
  };

  return (
    <>
      <Form {...formItemLayout}>
        <Row>
          <Col span={8}>
            <Item
              label={f({ id: "guestName" })}
              name="firstName"
              rules={[{ required: true, message: "Required" }]}
            >
              <Input placeholder={f({ id: "guestName" })} />
            </Item>
          </Col>
        </Row>

        <Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Item>
      </Form>
    </>
  );
};
