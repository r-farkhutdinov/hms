import * as React from "react";

import { ColumnType } from "antd/lib/table";
import { GuestReducedModelType } from "./store/guests.model";
import { Avatar, Button, Popconfirm } from "antd";
import {
  UserOutlined,
  SettingOutlined,
  DeleteOutlined
} from "@ant-design/icons";
import { Link } from "react-router-dom";

export const usersListColumns = (
  f,
  setDetailsGuest: (guestId: number) => void,
  setShow: (show: boolean) => void
): ColumnType<GuestReducedModelType>[] => [
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
    render: (_, r) => (
      <Button
        onClick={() => {
          setDetailsGuest(r.id);
          setShow(true);
        }}
        type="link"
        icon={<UserOutlined />}
      >{`${r.firstName} ${r.lastName}`}</Button>
    ),
    align: "left"
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
      <Popconfirm
        placement="left"
        title={f({ id: "deleteConfirm" })}
        // onConfirm={confirm}
        // onCancel={cancel}
        okText={f({ id: "yes" })}
        cancelText={f({ id: "no" })}
      >
        <Button
          type="link"
          icon={<DeleteOutlined style={{ color: "red" }} />}
        />
      </Popconfirm>
    ),
    align: "center",
    width: 20
  }
];
