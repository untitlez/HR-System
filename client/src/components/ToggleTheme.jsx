import { Switch } from "antd";
import { useThemeStore } from "../store/store";

export const ToggleTheme = () => {
  const { dark, setDark } = useThemeStore();
  return (
    <Switch
      checkedChildren="Dark"
      unCheckedChildren="Light"
      checked={dark}
      onChange={setDark}
    />
  );
};
