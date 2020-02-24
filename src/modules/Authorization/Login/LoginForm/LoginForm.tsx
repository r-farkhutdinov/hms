import * as React from "react";
import { FormComponentProps } from "antd/lib/form";
import { Form, Icon, Input, Button } from "antd";
import style from "./LoginForm.less";
import Fade from "react-reveal/Fade";

type LoginFormProps = {
  action: (username: string, password: string) => void;
};

type Props = LoginFormProps & FormComponentProps;

const LoginFormRaw: React.FC<Props> = props => {
  const { action } = props;

  const submitForm = values => {
    const { username, password } = values;

    action(username, password);
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        submitForm(values);
      }
    });
  };

  const { getFieldDecorator } = props.form;

  return (
    <div className={style.wrapper}>
      <p className={style.pageTitle}>
        <Icon type="bank" /> HMS
      </p>
      <Fade>
        <Form onSubmit={handleSubmit} className={style.form}>
          <h1 className={style.title}>Sign in</h1>

          <Form.Item>
            {getFieldDecorator("username", {
              rules: [{ required: true, message: "Enter the username" }]
            })(
              <Input
                data-cy="username"
                prefix={<Icon type="user" className={style.icon} />}
                placeholder="Username"
                onPressEnter={handleSubmit}
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("password", {
              rules: [{ required: true, message: "Enter the password" }]
            })(
              <Input
                prefix={<Icon type="lock" className={style.icon} />}
                type="password"
                placeholder="Password"
                onPressEnter={handleSubmit}
              />
            )}
          </Form.Item>
          <Button
            type="primary"
            onClick={handleSubmit}
            className={style.button}
          >
            Sign in
          </Button>
        </Form>
      </Fade>
    </div>
  );
};

export const LoginForm = Form.create()(LoginFormRaw);
