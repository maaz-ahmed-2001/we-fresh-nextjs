import React, { useEffect } from "react";
// Components
import { CloseIconBlack } from "../Icons";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (!isOpen) {
      document
        .querySelector<HTMLBodyElement>("body")!
        .classList.remove("overflow-hidden");
    } else {
      document
        .querySelector<HTMLBodyElement>("body")!
        .classList.add("overflow-hidden");
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div onClick={onClose} className="modal-overlay fixed inset-0 bg-gray-900 opacity-50"></div>
      <div className="modal-content relative z-[70] bg-white w-full max-w-[600px] mx-3 rounded-lg p-6">
        {children}
        <button
          className="modal-close absolute w-[25px] h-[25px] top-[35%] right-5 text-gray-500 hover:text-gray-800"
          onClick={onClose}>
          <CloseIconBlack />
        </button>
      </div>
    </div>
  );
};

export default Modal;
