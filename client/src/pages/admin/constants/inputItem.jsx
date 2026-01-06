import { Form, Input, DatePicker, Radio, InputNumber } from "antd";

// Input Personal Admin Form
export function PersonalSection() {
  const personalSectionItem = [
    {
      label: "Full Name",
      name: "fullName",
      rules: [{ required: true, message: "Please input full name!" }],
      input: <Input />,
    },
    {
      label: "Gender",
      name: "gender",
      rules: [{ required: true, message: "Please select gender!" }],
      input: (
        <Radio.Group
          options={[
            { value: "Male", label: "Male" },
            { value: "Female", label: "Female" },
          ]}
        />
      ),
    },
    {
      label: "Birth Date",
      name: "birthDate",
      rules: [{ required: true, message: "Please select birth date!" }],
      input: <DatePicker style={{ width: "100%" }} />,
    },
    {
      label: "Phone",
      name: "phone",
      rules: [{ required: true, message: "Please input phone number!" }],
      input: <InputNumber min={0} style={{ width: "100%" }} />,
    },
    {
      label: "Citizen ID",
      name: "citizenId",
      rules: [{ required: true, message: "Please input citizen ID!" }],
      input: <Input />,
    },
    {
      label: "Email",
      name: "email",
      rules: [
        { required: true, message: "Please input email!" },
        { type: "email", message: "Invalid email!" },
      ],
      input: <Input />,
    },
    {
      label: "Address",
      name: "address",
      rules: [{ required: true, message: "Please input address!" }],
      input: <Input.TextArea rows={3} />,
    },
  ];

  return (
    <>
      {personalSectionItem.map((item) => (
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

// Input Jobs Admin Form
export function JobSection() {
  const jobSectionItem = [
    {
      label: "Position",
      name: "position",
      rules: [{ required: true, message: "Please input position!" }],
      input: <Input />,
    },
    {
      label: "Employment Type",
      name: "employmentType",
      rules: [{ required: true, message: "Please select type!" }],
      input: (
        <Radio.Group
          options={[
            { value: "Full-time", label: "Full-time" },
            { value: "Part-time", label: "Part-time" },
            { value: "Contract", label: "Contract" },
          ]}
        ></Radio.Group>
      ),
    },
    {
      label: "Status",
      name: "status",
      rules: [{ required: true, message: "Please select status!" }],
      input: (
        <Radio.Group
          options={[
            { value: "Active", label: "Active" },
            { value: "Resigned", label: "Resigned" },
          ]}
        ></Radio.Group>
      ),
    },
    {
      label: "Start Date",
      name: "startDate",
      rules: [{ required: true, message: "Please select start date!" }],
      input: <DatePicker style={{ width: "100%" }} />,
    },
    {
      label: "Years of Service",
      name: "yearsOfService",
      rules: [{ required: true, message: "Please input years of service!" }],
      input: <InputNumber min={0} style={{ width: "100%" }} />,
    },
    {
      label: "Salary",
      name: "salary",
      rules: [{ required: true, message: "Please input salary!" }],
      input: <InputNumber min={0} style={{ width: "100%" }} />,
    },
  ];

  return (
    <>
      {jobSectionItem.map((item) => (
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
