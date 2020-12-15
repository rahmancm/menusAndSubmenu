import React from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./context";
const Modal = () => {
  const { isModalOpen, closeModal } = useGlobalContext();
  return (
    <div
      className={`${
        isModalOpen ? "modal-overlay show-modal" : "modal-overlay"
      }`}
    >
      <div className="modal-container">
        <h3>Modal COntent</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. In assumenda
          non facilis maiores quis consequatur eaque rem necessitatibus
          officiis. Iste unde adipisci sed! Quaerat nesciunt asperiores numquam
          dolorum voluptatum quisquam!
        </p>
        <button onClick={closeModal} className="close-modal-btn">
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Modal;
