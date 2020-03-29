import * as React from "react";
import { Form, Input, Button, Spin } from "antd";
import { UserOutlined, BankOutlined, LockOutlined } from "@ant-design/icons";
import style from "./LoginForm.less";
import Fade from "react-reveal/Fade";
import { useStore } from "../../../../core/util";
import useRouter from "use-react-router";

type Props = {};

export const LoginForm: React.FC<Props> = props => {
  const { authorization } = useStore();
  const { history } = useRouter();

  const onFinish = values => {
    const { username, password } = values;

    authorization.login(username, password, history);
  };

  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className={style.wrapper}>
      <p className={style.pageTitle}>
        <BankOutlined /> HMS
      </p>
      <Fade>
        <Spin spinning={authorization.loading}></Spin>
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          className={style.form}
        >
          <h1 className={style.title}>Sign in</h1>

          <Form.Item
            name="username"
            rules={[{ required: true, message: "Enter the username" }]}
          >
            <Input
              prefix={<UserOutlined className={style.icon} />}
              placeholder="Username"
              onPressEnter={onFinish}
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Enter the password" }]}
          >
            <Input.Password
              prefix={<LockOutlined className={style.icon} />}
              type="password"
              placeholder="Password"
              onPressEnter={onFinish}
            />
          </Form.Item>
          <Button type="primary" htmlType="submit" className={style.button}>
            Sign in
          </Button>
        </Form>
      </Fade>
    </div>
  );
};
