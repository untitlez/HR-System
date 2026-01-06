import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Layout } from "antd";
const { Header, Sider, Content } = Layout;
import { Button, notification, Space } from "antd";

import { Config } from "../../lib/config";
import { routes } from "../../lib/routes";
import { useSession } from "../../lib/session";
import { useMenuStore } from "../../store/store";
import { menuItems } from "../admin/constants/menuItem";

import { ConfigTheme } from "../../components/ConfigTheme";
import { ToggleTheme } from "../../components/ToggleTheme";
import { MenuBar } from "../../components/MenuBar";
import { Account } from "../../components/Account";
import { AdminForm } from "./AdminForm";
import { AdminInfo } from "./AdminInfo";

export default function AdminHome() {
  const navigate = useNavigate();
  const { tabsMenu } = useMenuStore();
  const [users, setUsers] = useState([]);
  const [api, contextHolder] = notification.useNotification();

  const openNotification = () => {
    const btn = (
      <Space>
        <Button
          type="primary"
          size="small"
          onClick={() => window.location.reload()}
        >
          Refresh
        </Button>
      </Space>
    );

    api.error({
      message: "Something went wrong.",
      description: "Please try again.",
      btn,
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      const session = await useSession();
      if (!session || session.role !== "admin") return navigate("/");

      try {
        const { data } = await axios.get(Config.API_URL + routes.users, {
          withCredentials: true,
        });
        setUsers(data);
      } catch {
        openNotification();
      }
    };

    fetchData();
  }, []);

  return (
    <ConfigTheme>
      {contextHolder}
      <Layout style={layoutStyle.layout}>
        {/* Menu Bar  */}
        <Sider width="20%" breakpoint="xl" style={layoutStyle.sider}>
          <MenuBar
            menuItems={menuItems}
            type="reports"
            label="All Employee"
            theme="light"
            defaultSelectedKeys="sub3-1"
          />
        </Sider>

        <Layout>
          {/* Header & Toggle Theme & Account  */}
          <Header style={layoutStyle.header}>
            <p style={layoutStyle.textHead}>{tabsMenu.label}</p>
            <div style={layoutStyle.account}>
              <ToggleTheme />
              <Account fullName="Shiba Inu" position="Admin Officer" />
            </div>
          </Header>

          {/* Table  */}
          <Content style={layoutStyle.content}>
            {tabsMenu.type === "new employee" ? (
              <AdminForm />
            ) : (
              <AdminInfo users={users} tabsMenu={tabsMenu} />
            )}
          </Content>
        </Layout>
      </Layout>
    </ConfigTheme>
  );
}

// Style
const layoutStyle = {
  layout: {
    gap: 8,
    padding: 32,
    height: "100vh",
  },
  sider: {
    background: "none",
  },
  menu: {
    height: "100%",
    borderRadius: 10,
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 0,
    background: "none",
  },
  textHead: {
    fontSize: 24,
    marginLeft: 16,
  },
  account: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    gap: 16,
  },
  content: {
    padding: 16,
    paddingRight: 0,
  },
};
