import { useState } from "react";
import { Button, Modal, Descriptions } from "antd";

export const UsersInfo = ({ record }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => setIsModalOpen(true);
  const handleOk = () => setIsModalOpen(false);
  const handleCancel = () => setIsModalOpen(false);

  const infoUsers = [
    "fullName",
    "gender",
    "email",
    "address",
    "phone",
    "citizenId",
    "birthDate",
    "position",
    "startDate",
    "employmentType",
    "status",
    "yearsOfService",
    "salary",
  ];

  const infoLeaveDays = ["sickLeave", "personalLeave", "vacationLeave"];

  return (
    <>
      <Button type="primary" onClick={showModal}>
        View
      </Button>
      <Modal
        title="Personal Info"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <Descriptions column={1} bordered size="small">
          {infoUsers.map((key) => (
            <Descriptions.Item
              label={<span className="capitalize">{key}</span>}
            >
              {record[key]}
            </Descriptions.Item>
          ))}
          {infoLeaveDays.map((key) => (
            <Descriptions.Item
              label={<span className="capitalize">{key}</span>}
            >
              {record.leaveDays[key]}
            </Descriptions.Item>
          ))}
        </Descriptions>
      </Modal>
    </>
  );
};
