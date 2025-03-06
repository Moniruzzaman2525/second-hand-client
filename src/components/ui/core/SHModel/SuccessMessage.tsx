import { useState, useEffect } from "react";
import style from './SuccessModal.module.css';

interface SuccessModalProps {
    isOpen: boolean;
    onOpenChange: (isOpen: boolean) => void;
    content: string;
    status: string;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ isOpen, onOpenChange, content, status }) => {
    const [animationKey, setAnimationKey] = useState(0);

    useEffect(() => {
        if (isOpen) {
            setAnimationKey(prevKey => prevKey + 1);
        }
    }, [isOpen]);
    const handleClose = () => {

        onOpenChange(false);


    };
    return (
        <div
            className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        >
            <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md">
                <div className="flex justify-center mb-6">
                    <div className={`${style.tickContainer} relative p-6 rounded-full`}>
                        {status === 'success' && (
                            <>
                                <div className={`${style.borderContainer}`}></div>
                                <svg
                                    key={animationKey}
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={`${style.checkmark} h-16 w-16 text-green-500`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                            </>
                        )}
                        {status === 'failed' && (
                            <>
                                <div className={`${style.tickContainer} ${style.failed}`}></div>
                                <div className={`${style.borderContainer} ${style.failed}`}></div>
                                <svg
                                    key={animationKey}
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={`${style.crossmark} h-16 w-16 text-red-500`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </>
                        )}
                    </div>
                </div>

                <div className="text-center">
                    <p className="text-xl font-semibold text-gray-800 mb-4">{status === 'success' ? 'Success!' : 'Failure'}</p>
                    <p className="text-sm text-gray-600 mb-4">{content}</p>
                    <button
                        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                        onClick={handleClose}
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SuccessModal;
