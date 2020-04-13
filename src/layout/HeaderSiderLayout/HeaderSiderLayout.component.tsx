import * as React from "react";
import { Link } from "react-router-dom";
import { Layout, Breadcrumb, Menu } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  HomeOutlined,
  GithubOutlined
} from "@ant-design/icons";
import style from "./HeaderSiderLayout.less";
import { menuItems, MenuItemType } from "./menu";
import { useStore } from "../../core/util";
import useRouter from "use-react-router";
import { matchRoute } from "../util/routeMatcher";
import { matchRouteMenu } from "../util/routeMenuMatcher";
import { useIntl } from "react-intl";
import { HotelDropdown } from "./HotelDropdown";
import { LocaleSelect } from "./LocaleSelect";
import { observer } from "mobx-react";
import { UserMeta } from "./UserMeta";

const { Content, Footer, Sider, Header } = Layout;

const MenuItems = f =>
  menuItems.map((item: MenuItemType) => (
    <Menu.Item key={item.id}>
      <Link to={item.route}>
        {item.icon} <span>{f({ id: item.title })}</span>
      </Link>
    </Menu.Item>
  ));

export const HeaderSiderLayout: React.FC = observer(({ children }) => {
  const { location } = useRouter();
  const { formatMessage: f } = useIntl();
  const { hotels, authorization, i18n } = useStore();
  const [collapsed, setCollapsed] = React.useState(false);
  const key = matchRouteMenu(location.pathname);

  const [selectedKey, setSelectedKey] = React.useState<number>(key);

  const { isAuthorized, user } = authorization;
  const { selectedHotel } = hotels;

  React.useEffect(() => {
    setSelectedKey(key);
  }, [location]);

  return (
    <Layout className={style.layout}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <Link to="/dashboard" className={style.homeLink}>
          <HomeOutlined className={style.logo} />
        </Link>
        <Menu
          theme="dark"
          selectedKeys={[selectedKey.toString()]}
          mode="inline"
        >
          {MenuItems(f)}
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
              <Breadcrumb.Item>
                <span>
                  {f({ id: matchRoute(location.pathname, isAuthorized) })}
                </span>
              </Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div className={style.meta}>
            <UserMeta user={user} />
            <HotelDropdown selectedHotel={selectedHotel} />
            <LocaleSelect i18n={i18n} />
          </div>
        </Header>
        <Content className={style.content}>
          <h1 className={style.title}>
            {f({ id: matchRoute(location.pathname, isAuthorized) })}
          </h1>
          <div className={style.panel}>{children}</div>
        </Content>
        <Footer className={style.footer}>
          <a href="https://github.com/r-farkhutdinov">
            <GithubOutlined /> {f({ id: "author" })}
          </a>
          , 2020
        </Footer>
      </Layout>
    </Layout>
  );
});
