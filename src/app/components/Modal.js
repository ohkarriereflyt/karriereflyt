// components/Modal.js
const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div onClick={onClose} className="w-screen h-screen fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
            <div className="bg-background-flat kf-border-dark shadow-lg max-w-sm w-full p-4 flex flex-col justify-center items-center">
                {children}
            </div>
        </div>
    );
};

export default Modal;
