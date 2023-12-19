import { useState } from "react";
import LoginModal from "../components/LoginModal";
import UpdateModal from "../components/UpdateModal";
import RegisterModal from "../components/RegisterModal";

const SampleScreen = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  const openUpdateModal = () => {
    setIsUpdateModalOpen(true);
  };

  const closeUpdateModal = () => {
    setIsUpdateModalOpen(false);
  };

  const openRegisterModal = () => {
    setIsRegisterModalOpen(true);
  };

  const closeRegisterModal = () => {
    setIsRegisterModalOpen(false);
  };

  return (
    <div>
      <button
        className="m-4 bg-black text-white p-4 rounded-md"
        onClick={openLoginModal}
      >
        Open Login Modal
      </button>

      <button
        className="m-4 bg-blue-500 text-white p-4 rounded-md"
        onClick={openUpdateModal}
      >
        Open Update Modal
      </button>

      <button
        className="m-4 bg-green-500 text-white p-4 rounded-md"
        onClick={openRegisterModal}
      >
        Open Register Modal
      </button>

      <LoginModal isOpen={isLoginModalOpen} onClose={closeLoginModal} />
      <UpdateModal isOpen={isUpdateModalOpen} onClose={closeUpdateModal} />
      <RegisterModal
        isOpen={isRegisterModalOpen}
        onClose={closeRegisterModal}
      />
    </div>
  );
};

export default SampleScreen;
