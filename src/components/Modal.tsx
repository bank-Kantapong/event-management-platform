import React, { ReactNode, useEffect } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const handleClose = () => {
    onClose();
  };

  // Use useEffect to handle overflow when modal is open or closed
  useEffect(() => {
    if (isOpen) {
      // Hide body overflow when modal is open
      document.body.style.overflow = "hidden";
    } else {
      // Reset body overflow when modal is closed
      document.body.style.overflow = "unset";
    }

    // Cleanup: Reset overflow when the component unmounts
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-80 z-50 transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={handleClose}
      />

      {/* Modal */}
      <div
        className={`fixed inset-0 flex justify-center items-center z-50 transition-all duration-300 ease-in-out transform ${
          isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
        }`}
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
      >
        <div className="bg-white rounded-xl shadow-lg p-6 w-96 max-w-full mb-12">
          {children}
        </div>
        {/* <div className="bg-white rounded-xl shadow-lg p-6 w-96 max-w-full mb-12">
          <h2 className="text-lg font-semibold mb-4">Modal Title</h2>
          <p className="text-sm mb-4">This is the content of the modal.</p>
          <div className="flex justify-end">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
              onClick={handleClose}
            >
              Close
            </button>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Modal;
