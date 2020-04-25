import * as React from "react";
import { Modal, Form, Input, Divider, message } from "antd";
import { useIntl } from "react-intl";
import { useForm } from "antd/lib/form/util";
import { useInsertGuestMutation } from "../../../__generated__/graphql";

type Props = {
  show: boolean;
  setShow: (show: boolean) => void;
};

export const AddForm: React.FC<Props> = ({ show, setShow }) => {
  const { formatMessage: f } = useIntl();
  const [form] = useForm();

  const [insertGuest] = useInsertGuestMutation({
    onCompleted: () => {
      message.success("Success");
    },
    onError: () => {
      message.error("Error occurred");
    }
  });

  const onCancel = () => {
    setShow(false);
  };

  const onFinish = () => {
    const values = form.getFieldsValue();
    insertGuest({ variables: { objects: [{ ...values }] } });
  };

  return (
    <>
      <Modal
        onCancel={onCancel}
        title={f({ id: "addUser" })}
        visible={show}
        onOk={onFinish}
        okText={f({ id: "okText" })}
        cancelText={f({ id: "cancelText" })}
      >
        <Form layout="vertical">
          <Divider>General information</Divider>
          <Form.Item name="first_name" rules={[{ required: true }]}>
            <Input placeholder={f({ id: "firstName" })} />
          </Form.Item>
          <Form.Item name="last_name" rules={[{ required: true }]}>
            <Input placeholder={f({ id: "lastName" })} />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
