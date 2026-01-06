import { Table } from "antd";
import {
  allColumns,
  leaveColumns,
  positionColumns,
} from "./constants/infoItem";

export const AdminInfo = ({ users = [], tabsMenu }) => {
  // Tab Menu to >> Data Table
  const position = users.filter((item) => item.position === tabsMenu.label);
  const leave = users.filter((item) => item.approval);

  const getTableConfig = () => {
    switch (tabsMenu.type) {
      case "position":
        return { columns: positionColumns, data: position };
      case "approval":
        return { columns: leaveColumns, data: leave };
      default:
        return { columns: allColumns, data: users };
    }
  };

  // Default Table
  const { columns, data } = getTableConfig();

  return <Table rowKey="id" columns={columns} dataSource={data} />;
};
