import * as React from "react";

import { ColumnType } from "antd/lib/table";
import { GuestReducedModelType } from "./store/guests.model";
import { Avatar, Button } from "antd";
import {
  UserOutlined,
  SettingOutlined,
  DeleteOutlined
} from "@ant-design/icons";
import { Link } from "react-router-dom";

export const usersListColumns = (f): ColumnType<GuestReducedModelType>[] => [
  {
    title: "",
    dataIndex: "avatar",
    render: () => <Avatar size="large" icon={<UserOutlined />} />,
    width: 40,
    align: "center"
  },
  {
    title: f({ id: "guestId" }),
    dataIndex: "id",
    render: text => `ID: ${text}`,
    align: "center"
  },
  {
    title: f({ id: "guestName" }),
    dataIndex: "fullName",
    render: (_, r) => `${r.firstName} ${r.lastName}`,
    align: "center"
  },
  {
    title: f({ id: "guestCountry" }),
    dataIndex: "country",
    render: (_, r) => r.country.name,
    align: "center"
  },
  {
    dataIndex: "actions",
    render: (_, r) => <Link to={`/guests/${r.id}`}>{<SettingOutlined />}</Link>,
    align: "center",
    width: 20
  },
  {
    dataIndex: "actions",
    render: (_, r) => (
      <Button type="link" icon={<DeleteOutlined style={{ color: "red" }} />} />
    ),
    align: "center",
    width: 20
  }
];
