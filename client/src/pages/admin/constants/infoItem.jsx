import { UsersInfo } from "../../../components/admin/UsersInfo";
import { ApprovalConfirm } from "../../../components/admin/ApprovalConfirm";

export const allColumns = [
  {
    title: "Name",
    dataIndex: "fullName",
    key: "fullName",
  },
  {
    title: "Gender",
    dataIndex: "gender",
    key: "gender",
    responsive: ["xl"],
  },
  {
    title: "Position",
    dataIndex: "position",
    key: "position",
  },
  {
    title: "Type",
    dataIndex: "employmentType",
    key: "employmentType",
  },
  {
    title: "Start Date",
    dataIndex: "startDate",
    key: "startDate",
    responsive: ["xl"],
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Phone",
    dataIndex: "phone",
    key: "phone",
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => <UsersInfo record={record} />,
  },
];

export const positionColumns = [
  {
    title: "Name",
    dataIndex: "fullName",
    key: "fullName",
  },
  {
    title: "Type",
    dataIndex: "employmentType",
    key: "employmentType",
  },
  {
    title: "Start Date",
    dataIndex: "startDate",
    key: "startDate",
    responsive: ["md"],
  },
  {
    title: "Service (Years)",
    dataIndex: "yearsOfService",
    key: "yearsOfService",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "Salary",
    dataIndex: "salary",
    key: "salary",
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => <UsersInfo record={record} />,
  },
];

export const leaveColumns = [
  {
    title: "Name",
    dataIndex: "fullName",
    key: "fullName",
  },
  {
    title: "Position",
    dataIndex: "position",
    key: "position",
  },
  {
    title: "Type",
    dataIndex: "employmentType",
    key: "employmentType",
  },
  {
    title: "Phone",
    dataIndex: "phone",
    key: "phone",
    responsive: ["xl"],
  },
  {
    title: "Leave Type",
    key: "leaveType",
    render: (_, record) => record.approval?.leaveType ?? null,
  },
  {
    title: "Days",
    key: "days",
    render: (_, record) => record.approval?.days ?? null,
  },
  {
    title: "Leave Date",
    key: "leaveDate",
    render: (_, record) => record.approval?.leaveDate ?? null,
  },
  {
    title: "Note",
    key: "note",
    responsive: ["xl"],
    render: (_, record) => record.approval?.note ?? null,
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <ApprovalConfirm id={record.id} approval={record.approval} leaveDays={record.leaveDays} />
    ),
  },
];
