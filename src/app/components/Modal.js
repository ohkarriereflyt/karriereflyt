import ReactDOM from 'react-dom';

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <div onClick={onClose} className="w-screen h-screen fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-8">
            <div className="slate-gray-background kf-border-light shadow-lg max-w-sm w-full p-4 flex flex-col justify-center items-center">
                {children}
            </div>
        </div>,
        document.getElementById('modal-root')
    );
};

export default Modal;
