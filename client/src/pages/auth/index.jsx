import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { sample } from "lodash";

import { Form, notification } from "antd";
import { Config } from "../../lib/config";
import { routes } from "../../lib/routes";
import { useActionStore } from "../../store/store";
import { loginItem } from "./constants/loginItem";
import { accounts } from "./constants/accountData";

import { ButtonLogin } from "../../components/auth/ButtonLogin";

export const LoginForm = () => {
  const [employeeEmail, setEmployeeEmail] = useState();
  const { setLoading, setDisabled } = useActionStore();
  const [api, contextHolder] = notification.useNotification();
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const adminAccount = () => form.setFieldsValue(accounts.admin);

  const employeeAccount = () => {
    const randomEmail = sample(employeeEmail);
    form.setFieldsValue({ email: randomEmail, password: "employee1234" });
  };

  const setStatusAction = (status) => {
    setLoading(status);
    setDisabled(status);
  };

  const onFinish = async (value) => {
    try {
      setStatusAction(true);
      const body = {
        email: value.email,
        password: value.password,
      };

      const { data } = await axios.post(
        Config.API_URL + routes.auth.login,
        body,
        { withCredentials: true }
      );

      data.role === "admin" ? navigate("/admin") : navigate("/employee");
    } catch (error) {
      api.error({
        message: "Login failed",
        description:
          "Please check your credentials and select an available account",
      });
    } finally {
      setStatusAction(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(Config.API_URL + routes.users, {
        withCredentials: true,
      });
      const getEmail = data.map((item) => item.email);
      setEmployeeEmail(getEmail);
    };
    fetchData();
  }, []);

  return (
    <>
      {contextHolder}
      <Form
        name="login"
        form={form}
        initialValues={{ remember: true }}
        style={{ maxWidth: 360 }}
        onFinish={onFinish}
      >
        {loginItem.map((item) => (
          <Form.Item key={item.name} name={item.name} rules={item.rules}>
            {item.input}
          </Form.Item>
        ))}
        <ButtonLogin
          adminAccount={adminAccount}
          employeeAccount={employeeAccount}
        />
      </Form>
    </>
  );
};
