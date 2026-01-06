import { useNavigate } from "react-router-dom";
import { Button, Result } from "antd";

export const SuccessPage = () => {
  const navigate = useNavigate();
  const handleOk = () => navigate(0);

  return (
    <Result
      status="success"
      title="Submission Successful!"
      subTitle="Thank you for submitting the form. We have received your information."
      extra={[
        <Button type="primary" key="console" onClick={handleOk}>
          Done
        </Button>,
      ]}
    />
  );
};
