import * as React from "react";
import { Link, NavLink } from "react-router-dom";
import { Layout, Breadcrumb, Menu } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  HomeOutlined
} from "@ant-design/icons";
import style from "./HeaderSiderLayout.less";
import * as siderItems from "./siderItems.json";

const { Content, Footer, Sider, Header } = Layout;

const MenuItems = siderItems.menu.map((item: any) => (
  <Menu.Item key={item.id}>
    <NavLink exact to={item.route}>
      {item.title}
    </NavLink>
  </Menu.Item>
));

export const HeaderSiderLayout: React.FC = props => {
  const [collapsed, setCollapsed] = React.useState(false);

  return (
    <Layout className={style.layout}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <Link to="/">
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
            {/* <Icon type="market" /> */}
            <span>
              <Link to={"/chooseHotel"}>Change hotel</Link>
            </span>
          </span>
        </Header>
        <Content className={style.content}>
          <div className={style.panel}>
            {/* <Switch>{routes.map(route => route.route)}</Switch> */}
            {props.children}
          </div>
        </Content>
        <Footer className={style.footer}>Ruslan Farkhutdinov, 2020</Footer>
      </Layout>
    </Layout>
  );
};
