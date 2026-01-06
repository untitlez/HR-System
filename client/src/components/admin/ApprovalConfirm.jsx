import { useState } from "react";
import axios from "axios";
import { Button, message, Popconfirm, Space } from "antd";

import { Config } from "../../lib/config";
import { routes } from "../../lib/routes";

export const ApprovalConfirm = ({ id, approval, leaveDays }) => {
  const [messageApi, contextHolder] = message.useMessage();
  const [disabled, setDisabled] = useState(false);

  const Approve = async () => {
    try {
      const newLeaveDays = {
        ...leaveDays,
        [approval.leaveType]:
          (leaveDays[approval.leaveType] ?? 0) + approval.days,
      };

      const body = {
        leaveDays: newLeaveDays,
        approval: null,
      };

      await axios.put(Config.API_URL + routes.users + id, body, {
        withCredentials: true,
      });
      setDisabled(true);
      messageApi.success("The request has been approved successfully.");
    } catch (error) {
      setDisabled(false);
      messageApi.error(error?.response.data.message);
    }
  };

  const Reject = async () => {
    try {
      const body = { approval: null };
      await axios.put(Config.API_URL + routes.users + id, body, {
        withCredentials: true,
      });
      setDisabled(true);
      messageApi.error("The request has been rejected.");
    } catch (error) {
      setDisabled(false);
      messageApi.error(error?.response.data.message);
    }
  };

  return (
    <>
      {contextHolder}
      <Space>
        <Button type="primary" disabled={disabled} onClick={Approve}>
          Approve
        </Button>
        <Popconfirm
          title="Please Confirm"
          description="Would you like to proceed with rejecting this request?"
          onConfirm={Reject}
          onCancel={null}
          okText="Yes"
          cancelText="No"
        >
          <Button danger disabled={disabled}>
            Reject
          </Button>
        </Popconfirm>
      </Space>
    </>
  );
};
