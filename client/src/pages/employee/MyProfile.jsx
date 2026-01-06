import { Descriptions } from "antd";
import { get } from "lodash";

import {
  accountItems,
  leaveDayItems,
  profileItems,
} from "./constants/infoItem";

export const MyProfile = ({ personal, leaveDays, tabsMenu }) => {
  const isPersonal = (configItem) =>
    configItem.map((item) => ({
      key: item.key,
      label: item.label,
      children: get(personal, item.key),
      span: item.span,
    }));

  const isLeaveDays = (leaveType) => {
    const leaveTypes = leaveDays.filter(
      (leave) => leave.leaveType === leaveType,
    );
    return leaveDayItems.map((item) => ({
      key: item.key,
      label: item.label,
      children: (
        <div className="space-y-1">
          {leaveTypes.map((leave, index) => (
            <div key={index}>{leave[item.key]}</div>
          ))}
        </div>
      ),
      span: item.span,
    }));
  };

  const useItemConfig = () => {
    switch (tabsMenu.type) {
      case "profile":
        return { items: isPersonal(profileItems) };
      case "account":
        return { items: isPersonal(accountItems) };
      case "sickLeave":
        return { items: isLeaveDays("Sick") };
      case "personalLeave":
        return { items: isLeaveDays("Personal") };
      case "vacationLeave":
        return { items: isLeaveDays("Vacation") };
      default:
        return { items: [] };
    }
  };

  // Default Items
  const { items } = useItemConfig();

  return <Descriptions bordered layout="vertical" items={items} />;
};
