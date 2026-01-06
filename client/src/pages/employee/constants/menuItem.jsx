import {
  FileAddOutlined,
  FolderOpenOutlined,
  TeamOutlined,
} from "@ant-design/icons";

export const menuItems = [
  {
    key: "menu1",
    label: "Personal Info",
    icon: <TeamOutlined />,
    children: [
      { key: "sub1-1", type: "profile", label: "My Profile" },
      { key: "sub1-2", type: "account", label: "Account Settings" },
    ],
  },
  {
    key: "menu2",
    label: "Leave Report",
    icon: <FolderOpenOutlined />,
    children: [
      { key: "sub2-1", type: "sickLeave", label: "Sick Leave" },
      { key: "sub2-2", type: "personalLeave", label: "Personal Leave" },
      { key: "sub2-3", type: "vacationLeave", label: "Vacation Leave" },
    ],
  },
  {
    key: "menu3",
    label: "Leave Requests",
    icon: <FileAddOutlined />,
    children: [{ key: "sub3-1", type: "request", label: "Leave Form" }],
  },
];
