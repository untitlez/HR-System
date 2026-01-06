import {
  PieChartOutlined,
  SolutionOutlined,
  TeamOutlined,
} from "@ant-design/icons";

export const menuItems = [
  {
    key: "menu1",
    label: "Position",
    icon: <TeamOutlined />,
    children: [
      { key: "sub1-1", type: "position", label: "HR Officer" },
      { key: "sub1-2", type: "position", label: "Marketing Specialist" },
      { key: "sub1-3", type: "position", label: "Sales Executive" },
      { key: "sub1-4", type: "position", label: "Accountant" },
      { key: "sub1-5", type: "position", label: "Frontend Developer" },
      { key: "sub1-6", type: "position", label: "Backend Developer" },
    ],
  },
  {
    key: "menu2",
    label: "Leave Management",
    icon: <SolutionOutlined />,
    children: [{ key: "sub2-1", type: "approval", label: "Approval" }],
  },
  {
    key: "menu3",
    label: "Employee",
    icon: <PieChartOutlined />,
    children: [
      { key: "sub3-1", type: "reports", label: "All Employee" },
      { key: "sub3-2", type: "new employee", label: "New Employee" },
    ],
  },
];
