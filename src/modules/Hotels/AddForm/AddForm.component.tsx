import * as React from 'react';
import { Modal, Form, Input, notification } from 'antd';
import { useIntl } from 'react-intl';
import { useForm } from 'antd/lib/form/util';
import { useCreateHotelMutation } from '../../../__generated__/graphql';
import { useStore } from '../../../core/util';

type Props = {
  show: boolean;
  setShow: (show: boolean) => void;
};

export const AddForm: React.FC<Props> = ({ show, setShow }) => {
  const { formatMessage: f } = useIntl();
  const [form] = useForm();
  const { authorization } = useStore();
  const { user } = authorization;

  const [createHotel] = useCreateHotelMutation({
    onCompleted: () => {
      notification.success({ message: 'Hotel has been created' });
      setShow(false);
    },
    onError: () => notification.error({ message: 'Hotel has not been created' }),
    refetchQueries: ['fetchHotels'],
  });

  const submitForm = () => {
    const { title, location } = form.getFieldsValue();
    createHotel({
      variables: {
        objects: [
          {
            title,
            location,
            owner_id: user.id,
          },
        ],
      },
    });
  };

  return (
    <Modal
      visible={show}
      title={f({ id: 'addHotel' })}
      okText={f({ id: 'okText' })}
      cancelText={f({ id: 'cancelText' })}
      onCancel={() => setShow(false)}
      onOk={submitForm}
    >
      <Form form={form} layout="vertical">
        <Form.Item name="title" label="Title" required>
          <Input placeholder={'Enter title'} />
        </Form.Item>
        <Form.Item name="location" label="Location" required>
          <Input placeholder={'Enter location'} />
        </Form.Item>
      </Form>
    </Modal>
  );
};
