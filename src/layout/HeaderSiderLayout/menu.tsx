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
    title: "Dashboard",
    icon: <HomeOutlined />,
    route: "/"
  },
  {
    id: 1,
    title: "Bookings",
    icon: <BuildOutlined />,
    route: "/bookings"
  },
  {
    id: 2,
    title: "Guests",
    icon: <TeamOutlined />,
    route: "/guests"
  },
  {
    id: 3,
    title: "Services",
    icon: <CheckOutlined />,
    route: "/services"
  },
  {
    id: 4,
    title: "Prices",
    icon: <PercentageOutlined />,
    route: "/prices"
  },
  {
    id: 5,
    title: "Hotels",
    icon: <BankOutlined />,
    route: "/hotels"
  },
  {
    id: 6,
    title: "Rooms",
    icon: <ShopOutlined />,
    route: "/rooms"
  },
  {
    id: 7,
    title: "Log out",
    icon: <UnlockOutlined />,
    route: "/logout"
  }
];
