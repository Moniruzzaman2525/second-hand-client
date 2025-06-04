import { ReactNode } from "react";

interface SHContainerProps {
    children: ReactNode;
    className?: string;
}

const SHContainer = ({ children, className = "" }: SHContainerProps) => {
    return (
        <div className={`md:container mx-auto md:px-5 md:px-40 ${className}`}>{children}</div>
    );
};

export default SHContainer;
