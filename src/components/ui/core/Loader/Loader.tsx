// components/ui/ButtonLoader.tsx
import React from 'react';

const ButtonLoader: React.FC = () => {
    return (
        <div className="flex items-center justify-center">
            <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <circle cx="12" cy="12" r="10" />
                <path d="M22 12A10 10 0 0 1 12 22" />
            </svg>
        </div>
    );
};

export default ButtonLoader;
