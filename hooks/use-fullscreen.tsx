'use client'
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
      <div className="fixed inset-0 flex items-center justify-center bg-cover bg-center bg-blend-multiply bg-black/60 md:bg-black/80 md:bg-[url('https://res.cloudinary.com/drykej1am/image/upload/v1740181910/weehser%20pay/WEESHRWEESHR_WEESHRWEESH_._R_WEESHRWEESHR_WEESHRWEESHR_blwitm.png')] p-4 z-[300]">
        <div className="relative bg-white rounded-lg shadow-lg w-full max-w-4xl h-[90vh] sm:h-auto">
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-2xl"
          >
            ✕
          </button>

          {/* Responsive Iframe Container */}
          <div className="py-4 h-full md:min-h-[70dvh] overflow-hidden">
            {modalContent}            
          </div>
        </div>
      </div>
    ) : null;

  return { isOpen, openModal, closeModal, Modal };
};

export default useFullscreenModal;
