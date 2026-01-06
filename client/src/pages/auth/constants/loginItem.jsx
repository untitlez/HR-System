import { Checkbox, Form, Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";

export const loginItem = [
  {
    name: "email",
    rules: [{ required: true, message: "Please input your Email!" }],
    input: <Input prefix={<UserOutlined />} placeholder="email" />,
  },
  {
    name: "password",
    rules: [{ required: true, message: "Please input your Password!" }],
    input: (
      <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
    ),
  },
  {
    name: "checkbox",
    input: (
      <Form.Item name="remember" valuePropName="checked" noStyle>
        <Checkbox>Remember me</Checkbox>
      </Form.Item>
    ),
  },
];
