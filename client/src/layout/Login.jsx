import React, { useState } from "react";
import { Button, Input, Modal } from "antd";
import "./navbar.footer.css";
function Login() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      {" "}
      <Button className="button-login" type="primary" onClick={showModal}>
        Login
      </Button>
      <Modal className="title"
        title="LOGIN"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className="modal"><Input type="text" placeholder="Username"></Input></div>
        <div className="modal"><Input type="text" placeholder="Password"></Input></div>
      </Modal>
    </div>
  );
}

export default Login;
