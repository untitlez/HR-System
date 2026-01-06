import { ConfigProvider, theme } from "antd";
import { useThemeStore } from "../store/store";
import { Background } from "./Background";

export const ConfigTheme = ({ children }) => {
  const { dark } = useThemeStore();

  return (
    <ConfigProvider
      theme={{
        algorithm: dark ? theme.darkAlgorithm : theme.defaultAlgorithm,
      }}
    >
      <Background />
      {children}
    </ConfigProvider>
  );
};
