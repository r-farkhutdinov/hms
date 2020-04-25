import * as React from "react";
import { Form, Input } from "antd";
import { useForm } from "antd/lib/form/util";

enum FormItemType {
  INPUT,
  SELECT,
  DATE
}

type FormItem = {
  id: number;
  cols: 1 | 2;
  type: FormItemType;
  name: string;

  required?: boolean;
  value?: number | string;
  defaultValue?: string | number;
  label?: string;
  options?: { label: string; value: string | number }[];
  placeholder?: string;
};

type Props<T> = {
  fields: FormItem[];
  onSubmit: (values: T) => void;
};

const GetFormItem = (field: FormItem): JSX.Element => {
  const {
    id,
    type,
    cols,
    name,
    required,
    value,
    defaultValue,
    label,
    options,
    placeholder
  } = field;

  const getInput = (type: FormItemType): JSX.Element => {
    switch (type) {
      case FormItemType.INPUT:
        return <Input placeholder={placeholder} />;
    }
  };

  return (
    <Form.Item key={id} label={label} rules={[{ required }]}>
      {getInput(type)}
    </Form.Item>
  );
};

export function GenericForm<DataType>({
  fields,
  onSubmit
}: Props<DataType>): JSX.Element {
  const [form] = useForm();

  const onFinish = () => {
    onSubmit(form.getFieldsValue() as DataType);
  };

  return (
    <Form onFinish={onFinish} form={form}>
      {fields.map(f => GetFormItem(f))}
    </Form>
  );
}
