import * as React from "react";
import {
  HomeOutlined,
  TeamOutlined,
  CheckOutlined,
  PercentageOutlined,
  BankOutlined,
  ShopOutlined,
  UnlockOutlined,
  BuildOutlined
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
    title: "dashboard",
    icon: <HomeOutlined />,
    route: "/dashboard"
  },
  {
    id: 1,
    title: "bookings",
    icon: <BuildOutlined />,
    route: "/bookings"
  },
  {
    id: 2,
    title: "guests",
    icon: <TeamOutlined />,
    route: "/guests"
  },
  {
    id: 3,
    title: "services",
    icon: <CheckOutlined />,
    route: "/services"
  },
  {
    id: 4,
    title: "prices",
    icon: <PercentageOutlined />,
    route: "/prices"
  },
  {
    id: 5,
    title: "hotels",
    icon: <BankOutlined />,
    route: "/hotels"
  },
  {
    id: 6,
    title: "rooms",
    icon: <ShopOutlined />,
    route: "/rooms"
  },
  {
    id: 7,
    title: "logout",
    icon: <UnlockOutlined />,
    route: "/logout"
  }
];
