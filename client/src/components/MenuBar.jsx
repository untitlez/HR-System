import { useEffect } from "react";
import { Menu } from "antd";
import { useMenuStore } from "../store/store";

export const MenuBar = ({ menuItems, type, label, ...rest }) => {
  const { setTabsMenu } = useMenuStore();

  useEffect(() => {
    setTabsMenu({ type, label });
  }, [type, label]);

  const handleClick = (e) => {
    const subMenu = menuItems.flatMap((menu) => menu.children);
    const items = subMenu.find((item) => item.key === e.key);
    setTabsMenu(items);
  };

  return (
    <Menu
      mode="inline"
      defaultOpenKeys={["menu1", "menu2", "menu3"]}
      className="h-full rounded-xl"
      {...rest}
      items={menuItems}
      onClick={handleClick}
    />
  );
};
