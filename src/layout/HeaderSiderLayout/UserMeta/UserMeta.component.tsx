import * as React from "react";
import { UserOutlined, DownOutlined } from "@ant-design/icons";
import { UserModelType } from "../../../modules/Authorization/store/auth.model";
import { Dropdown, Menu } from "antd";
import { Link } from "react-router-dom";
import { useIntl } from "react-intl";
import style from "../HeaderSiderLayout.less";

type Props = {
  user: UserModelType;
};

const menu = f => (
  <Menu>
    <Menu.Item key="0">
      <Link to="/logout">{f({ id: "logout" })}</Link>
    </Menu.Item>
  </Menu>
);

export const UserMeta: React.FC<Props> = ({ user }) => {
  const { formatMessage: f } = useIntl();

  return (
    <Dropdown overlay={menu(f)} trigger={["click"]}>
      <div className={style.user}>
        <UserOutlined />
        <span>
          <span className={style.userName}>{user.name}</span>
          <DownOutlined />
        </span>
      </div>
    </Dropdown>
  );
};
