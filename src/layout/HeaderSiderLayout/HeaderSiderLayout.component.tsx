import * as React from "react";
import { Link } from "react-router-dom";
import { Layout, Breadcrumb, Menu } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  HomeOutlined,
  ShopOutlined,
  GithubOutlined
} from "@ant-design/icons";
import style from "./HeaderSiderLayout.less";
import { menuItems, MenuItemType } from "./menu";
import { useStore } from "../../core/util";
import useRouter from "use-react-router";
import { matchRoute } from "../../modules/util/routeMatcher";

const { Content, Footer, Sider, Header } = Layout;

const MenuItems = menuItems.map((item: MenuItemType) => (
  <Menu.Item key={item.id}>
    {item.icon}
    <Link to={item.route}>{item.title}</Link>
  </Menu.Item>
));

export const HeaderSiderLayout: React.FC = props => {
  const { location } = useRouter();

  const { hotels, authorization } = useStore();
  const { isAuthorized } = authorization;

  const { selectedHotel } = hotels;

  const [collapsed, setCollapsed] = React.useState(false);

  return (
    <Layout className={style.layout}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <Link to="/" className={style.homeLink}>
          <HomeOutlined className={style.logo} />
        </Link>
        <Menu theme="dark" defaultSelectedKeys={["0"]} mode="inline">
          {MenuItems}
        </Menu>
      </Sider>
      <Layout>
        <Header className={style.header}>
          {collapsed ? (
            <MenuUnfoldOutlined
              className={style.trigger}
              onClick={() => setCollapsed(!collapsed)}
            />
          ) : (
            <MenuFoldOutlined
              className={style.trigger}
              onClick={() => setCollapsed(!collapsed)}
            />
          )}

          <div className={style.breadcrumb}>
            <Breadcrumb>
              {/* <Breadcrumb.Item>
                  <Link to={breadcrumb.first.path}>
                    <span>{breadcrumb.first.name}</span>
                  </Link>
                </Breadcrumb.Item>
                {breadcrumb.second && (
                  <Breadcrumb.Item>
                    <span>{breadcrumb.second}</span>
                  </Breadcrumb.Item>
                )} */}
            </Breadcrumb>
          </div>
          <span className={style.meta}>
            <ShopOutlined />{" "}
            <span>
              {(selectedHotel && selectedHotel.name) || "No hotel chosen"}{" "}
              <Link to={"/chooseHotel"}>(change)</Link>
            </span>
          </span>
        </Header>
        <Content className={style.content}>
          <h1 className={style.title}>
            {matchRoute(location.pathname, isAuthorized)}
          </h1>
          <div className={style.panel}>{props.children}</div>
        </Content>
        <Footer className={style.footer}>
          <a href="https://github.com/r-farkhutdinov">
            <GithubOutlined /> Ruslan Farkhutdinov
          </a>
          , 2020
        </Footer>
      </Layout>
    </Layout>
  );
};
