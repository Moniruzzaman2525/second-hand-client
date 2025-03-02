import { ReactNode } from "react";

interface SHContainerProps {
    children: ReactNode;
    className?: string;
}

const SHContainer = ({ children, className = "" }: SHContainerProps) => {
    return (
        <div className={`container mx-auto px-40 ${className}`}>{children}</div>
    );
};

export default SHContainer;
