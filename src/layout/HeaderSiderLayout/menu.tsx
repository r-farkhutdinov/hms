import * as React from "react";
import {
  HomeOutlined,
  TeamOutlined,
  CheckOutlined,
  PercentageOutlined,
  BankOutlined,
  ShopOutlined,
  UnlockOutlined
} from "@ant-design/icons";

export type MenuItemType = {
  id: number;
  title: string;
  icon: React.ReactNode;
  route: string;
};

export const menuItems: MenuItemType[] = [
  {
    id: 0,
    title: "Dashboard",
    icon: <HomeOutlined />,
    route: "/"
  },
  {
    id: 1,
    title: "Guests",
    icon: <TeamOutlined />,
    route: "/"
  },
  {
    id: 2,
    title: "Services",
    icon: <CheckOutlined />,
    route: "/"
  },
  {
    id: 3,
    title: "Prices",
    icon: <PercentageOutlined />,
    route: "/"
  },
  {
    id: 4,
    title: "Hotels",
    icon: <BankOutlined />,
    route: "/"
  },
  {
    id: 5,
    title: "Rooms",
    icon: <ShopOutlined />,
    route: "/"
  },
  {
    id: 6,
    title: "Log out",
    icon: <UnlockOutlined />,
    route: "/logout"
  }
];
