import { useState } from "react";
import { Form, message, Modal } from "antd";
import dayjs from "dayjs";
import axios from "axios";

import { Config } from "../../lib/config";
import { routes } from "../../lib/routes";
import { useActionStore } from "../../store/store";

import { SubmitForm } from "../../components/admin/SubmitForm";
import { SuccessPage } from "../../components/SuccessPage";
import { JobSection, PersonalSection } from "./constants/inputItem";

export const AdminForm = () => {
  const [form] = Form.useForm();
  const [value, setValue] = useState();
  const [messageApi, contextHolder] = message.useMessage();
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

  const onReset = () => {
    form.resetFields();
    messageApi.info("Form has been cleared.");
  };

  const onFill = () => {
    form.setFieldsValue({
      fullName: "Christopher Roger",
      gender: "Male",
      birthDate: dayjs("1990-01-01"),
      phone: "0891234567",
      citizenId: "1234567890123",
      email: "Roger@example.com",
      address: "45 หมู่ 3 ต.สุเทพ อ.เมือง จ.เชียงใหม่ 50200",
      position: "HR Officer",
      employmentType: "Full-time",
      status: "Active",
      startDate: dayjs("2025-01-01"),
      yearsOfService: 5,
      salary: 12000,
    });
    messageApi.success(
      "Form has been auto-filled. You can make changes if needed."
    );
  };

  const handleOk = async () => {
    try {
      await axios.post(Config.API_URL + routes.users, value, {
        withCredentials: true,
      });
      setIsSubmitted(true);
    } catch (error) {
      messageApi.error(error.response.data.message);
    } finally {
      setIsModalOpen(false);
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setValue("");
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
          variant="outlined"
          autoComplete="on"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <div className={styleForm.layoutInput}>
            <PersonalSection />
          </div>

          <div className={styleForm.layoutInput}>
            <JobSection />
            <SubmitForm loading={loading} onReset={onReset} onFill={onFill} />
            <Modal
              title="Confirm New Employee"
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
              okText="Add Employee"
              cancelText="Cancel"
            >
              <p>Are you sure you want to add this employee to the system?</p>
            </Modal>
          </div>
        </Form>
      )}
    </>
  );
};

const styleForm = {
  onSuccess: "mt-12",
  form: "flex flex-col xl:flex-row gap-4",
  layoutInput: "xl:basis-1/2 max-w-screen-sm mt-8",
};
