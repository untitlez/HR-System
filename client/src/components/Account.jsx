import { useNavigate } from "react-router-dom";
import { Button, message, Popconfirm } from "antd";
import axios from "axios";

import { Config } from "../lib/config";
import { routes } from "../lib/routes";

export const Account = ({ fullName, position }) => {
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();

  const onConfirm = async () => {
    try {
      const { data } = await axios.post(
        Config.API_URL + routes.auth.logout,
        {},
        { withCredentials: true }
      );
      messageApi.success(data.message);
      navigate("/");
    } catch (error) {
      messageApi.error(error?.response.data.message);
    }
  };

  return (
    <>
      {contextHolder}
      <Popconfirm
        placement="bottomRight"
        title="Confirm Log Out"
        description="Are you sure you want to sign out?"
        okText="Log Out"
        onConfirm={onConfirm}
      >
        <Button size="large">
          <img className="rounded-md w-7 h-7" src="shiba.jpg" alt="avatar" />
          <div className="text-sm">
            <p>{fullName}</p>
            <p className="text-xs opacity-75">{position}</p>
          </div>
        </Button>
      </Popconfirm>
    </>
  );
};
