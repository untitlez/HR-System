import { Button, Space } from "antd";

export const SubmitForm = ({ loading, onReset, onFill }) => {
  const buttonItems = [
    { label: "Submit", type: "primary", htmlType: "submit" },
    { label: "Reset", htmlType: "button", onClick: onReset },
    {
      label: "Fill Form",
      type: "link",
      htmlType: "button",
      onClick: onFill,
    },
  ];

  return (
    <>
      <Space className="w-full flex justify-center mt-6">
        {buttonItems.map((item, index) => (
          <Button
            loading={loading}
            key={index}
            type={item.type}
            htmlType={item.htmlType}
            onClick={item.onClick}
          >
            {item.label}
          </Button>
        ))}
      </Space>
    </>
  );
};
