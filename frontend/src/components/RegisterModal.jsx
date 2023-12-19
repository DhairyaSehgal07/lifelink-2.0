import { useState } from "react";
import { useEffect } from "react";
import { createPortal } from "react-dom";

const RegisterModal = ({ isOpen, onClose }) => {
  const modalRoot = document.getElementById("modal-root");
  const modalElement = document.createElement("div");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = () => {
    // Your registration logic here
    console.log("Register with:", username, email, password);
    // Close the modal after registration
    onClose();
  };

  useEffect(() => {
    modalRoot.appendChild(modalElement);

    return () => {
      modalRoot.removeChild(modalElement);
    };
  }, [modalElement, modalRoot]);

  return createPortal(
    isOpen && (
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
        <dialog
          open={isOpen}
          onClose={onClose}
          className="bg-white p-6 rounded-md w-96"
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-bold text-xl">Register</h2>
            <button className="text-[2rem] rounded" onClick={onClose}>
              X
            </button>
          </div>
          <form>
            <label className="block mb-2" htmlFor="username">
              Username:
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="border p-2 w-full rounded"
              />
            </label>
            <label className="block mb-2" htmlFor="email">
              Email:
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border p-2 w-full rounded"
              />
            </label>
            <label className="block mb-2" htmlFor="password">
              Password:
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border p-2 w-full rounded"
              />
            </label>
            <label className="block mb-2" htmlFor="confirmPassword">
              Confirm Password:
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="border p-2 w-full rounded"
              />
            </label>
            <button
              type="button"
              onClick={handleRegister}
              className="bg-[#FF2323] text-white p-2 rounded"
            >
              Register
            </button>
          </form>
        </dialog>
      </div>
    ),
    modalElement
  );
};

export default RegisterModal;
