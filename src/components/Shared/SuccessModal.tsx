import React from "react";

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  message: string;
}

const SuccessModal: React.FC<SuccessModalProps> = ({
  isOpen,
  onClose,
  message,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="
        fixed 
        h-full
        !mt-0
        inset-0 
        bg-gray-800 
        bg-opacity-50 
        flex 
        items-center 
        justify-center 
        z-50
      "
    >
      <div className="bg-white rounded shadow-lg p-6 w-11/12 max-w-md mx-auto relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
        >
          &times;
        </button>

        <h2 className="text-xl font-semibold text-center mb-4 text-green-600">
          Success!
        </h2>
        <p className="text-gray-700 text-center">{message}</p>
      </div>
    </div>
  );
};

export default SuccessModal;
