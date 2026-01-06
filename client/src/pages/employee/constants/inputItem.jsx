import { Form, Input, Radio, InputNumber } from "antd";

export function LeaveFormItem() {
  const leaveSectionItem = [
    {
      label: "Full Name",
      name: "fullName",
      input: <Input variant="filled" />,
    },
    {
      label: "Position",
      name: "position",
      input: <Input variant="filled" />,
    },
    {
      label: "Phone Number",
      name: "phone",
      input: <InputNumber variant="filled" style={{ width: "100%" }} />,
    },
    {
      label: "Leave Type",
      name: "leaveType",
      rules: [{ required: true, message: "Please select a leave type." }],
      input: (
        <Radio.Group
          options={[
            { value: "sickLeave", label: "Sick" },
            { value: "personalLeave", label: "Personal" },
            { value: "vacationLeave", label: "Vacation" },
          ]}
        />
      ),
    },
    {
      label: "Number of Days",
      name: "days",
      rules: [
        { required: true, message: "Please enter number of leave days." },
      ],
      input: <InputNumber style={{ width: "100%" }} />,
    },
    {
      label: "Leave Note",
      name: "note",
      rules: [
        { required: true, message: "Please provide a reason for leave." },
      ],
      input: <Input.TextArea rows={3} />,
    },
  ];

  return (
    <>
      {leaveSectionItem.map((item) => (
        <Form.Item
          key={item.name}
          label={item.label}
          name={item.name}
          rules={item.rules}
        >
          {item.input}
        </Form.Item>
      ))}
    </>
  );
}
