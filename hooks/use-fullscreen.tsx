import { useState } from "react";

const useFullscreenModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState<React.ReactNode>(null);

  const openModal = (content: React.ReactNode) => {
    setModalContent(content);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setModalContent(null);
  };

  const Modal = () =>
    isOpen ? (
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center p-4 overflow-y-auto z-[100]">
        <div className="relative w-full max-w-2xl">
          {/* Close Button */}
          <button
            onClick={closeModal}
            className="absolute top-50 right-0 text-white bg-red-600 hover:bg-red-700 px-3 py-1 rounded-lg transition"
          >
            ✕ Close
          </button>

          {/* Dynamic Modal Content */}
          <div className="bg-white rounded-lg shadow-lg p-4">{modalContent}</div>
        </div>
      </div>
    ) : null;

  return { isOpen, openModal, closeModal, Modal };
};

export default useFullscreenModal;
