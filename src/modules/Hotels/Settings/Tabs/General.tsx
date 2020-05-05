import * as React from 'react';
import { Input, Form, Button, Space } from 'antd';
import { useForm } from 'antd/lib/form/util';
import { useIntl } from 'react-intl';
import { HotelFieldsFragment } from 'src/__generated__/graphql';

type Props = {
  data: HotelFieldsFragment;
};

export const General: React.FC<Props> = ({ data }) => {
  const [form] = useForm();
  const { formatMessage: f } = useIntl();

  form.setFieldsValue(data);

  return (
    <>
      <Form form={form} layout="vertical">
        <Form.Item name="hotel_id" label="ID">
          <Input disabled />
        </Form.Item>
        <Form.Item name="title" label="Title" required>
          <Input placeholder={'Enter title'} />
        </Form.Item>
        <Form.Item name="location" label="Location" required>
          <Input placeholder={'Enter location'} />
        </Form.Item>
      </Form>
      <Space>
        <Button type="primary">{f({ id: 'okText' })}</Button>
      </Space>
    </>
  );
};
