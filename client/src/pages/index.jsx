import { useEffect, useState } from "react";
import { Card, Layout, Progress } from "antd";
import { Content } from "antd/es/layout/layout";
import axios from "axios";

import { Config } from "../lib/config";
import { routes } from "../lib/routes";
import { LoginForm } from "./auth";
import { ConfigTheme } from "../components/ConfigTheme";
import { Background } from "../components/Background";

export default function HomePage() {
  const [ready, setReady] = useState(false);
  const [progress, setProgress] = useState(30);

  const wakeUpServer = async () => {
    await axios.get(Config.API_URL + routes.users);
    setProgress(99);
  };

  useEffect(() => {
    wakeUpServer();
    setProgress(60);
  }, []);

  useEffect(() => {
    if (progress === 99) return setReady(true);
  }, [progress]);

  return (
    <ConfigTheme>
      <Layout className="h-screen relative">
        <Background />
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
