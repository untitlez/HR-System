import { useEffect, useState } from "react";
import { Card, Layout, Progress, Alert, Button } from "antd";
import { Content } from "antd/es/layout/layout";
import axios from "axios";

import { Config } from "../lib/config";
import { routes } from "../lib/routes";
import { LoginForm } from "./auth";
import { ConfigTheme } from "../components/ConfigTheme";

export default function HomePage() {
  const [ready, setReady] = useState(false);
  const [progress, setProgress] = useState(30);
  const [show, setShow] = useState(false);

  const wakeUpServer = async () => {
    await axios.get(Config.API_URL + routes.users);
    setProgress(99);
  };

  const acceptCookies = () => {
    localStorage.setItem("cookie_consent", "accepted");
    setShow(false);
  };

  const consent = localStorage.getItem("cookie_consent");

  useEffect(() => {
    wakeUpServer();
    setProgress(60);

    if (!consent) setShow(true);
  }, []);

  useEffect(() => {
    if (progress === 99) return setReady(true);
  }, [progress]);

  return (
    <ConfigTheme>
      <Layout className="h-screen">
        {/* Cookie  */}
        {show && (
          <Alert
            title="We Value Your Privacy"
            showIcon
            description="These cookies are required for core website functionality such as authentication and security. They cannot be disabled."
            type="warning"
            action={
              <Button size="small" type="primary" onClick={acceptCookies}>
                Accept
              </Button>
            }
          />
        )}

        {/* Form  */}
        {ready ? (
          <Content width="100%" className="grid place-content-center">
            <Card title="Sign In" className="w-full max-w-sm">
              <LoginForm />
            </Card>
          </Content>
        ) : (
          <Content className="grid place-items-center">
            <div className="w-1/2">
              <Progress
                percent={progress}
                status={progress === 99 ? "success" : "active"}
                strokeColor={{ from: "#108ee9", to: "#87d068" }}
              />
            </div>
          </Content>
        )}
      </Layout>
    </ConfigTheme>
  );
}
