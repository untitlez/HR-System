import { useState } from "react";
import axios from "axios";
import { Button, Form, message, Modal } from "antd";

import { useActionStore } from "../../store/store";
import { Config } from "../../lib/config";
import { routes } from "../../lib/routes";
import { LeaveFormItem } from "./constants/inputItem";

import { SuccessPage } from "../../components/SuccessPage";

export const LeaveForm = ({ id, personal }) => {
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();
  const [value, setValue] = useState();

  const {
    loading,
    setLoading,
    isSubmitted,
    setIsSubmitted,
    isModalOpen,
    setIsModalOpen,
  } = useActionStore();

  const onFinish = (formValue) => {
    setValue(formValue);
    setLoading(true);
    setIsModalOpen(true);
  };

  const onFinishFailed = () => {
    messageApi.error("Please complete all required fields.");
  };

  const handleOk = async () => {
    try {
      const body = {
        approval: {
          days: value.days,
          note: value.note,
          leaveDate: new Date().toISOString(),
          leaveType: value.leaveType,
        },
      };
      await axios.put(Config.API_URL + routes.users + id, body, {
        withCredentials: true,
      });
      setIsSubmitted(true);
    } catch (error) {
      messageApi.error(error?.response.data.message);
    } finally {
      setIsModalOpen(false);
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setLoading(false);
  };

  return (
    <>
      {contextHolder}
      {isSubmitted ? (
        <div className={styleForm.onSuccess}>
          <SuccessPage />
        </div>
      ) : (
        <Form
          className={styleForm.form}
          form={form}
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 16 }}
          autoComplete="on"
          initialValues={{
            fullName: personal.fullName,
            position: personal.position,
            phone: personal.phone,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <div className={styleForm.input}>
            <LeaveFormItem personal={personal} />
          </div>

          <div className={styleForm.button}>
            <Button type="primary" htmlType="submit" loading={loading}>
              Submit
            </Button>
          </div>
          <Modal
            title="Confirm Leave Request"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            okText="Submit Request"
            cancelText="Cancel"
          >
            <p>Are you sure you want to submit this leave request?</p>
          </Modal>
        </Form>
      )}
    </>
  );
};

const styleForm = {
  onSuccess: "mt-12",
  form: "max-w-screen-sm w-full flex flex-col justify-self-center",
  input: "flex flex-col my-8",
  button: "flex justify-center",
};
