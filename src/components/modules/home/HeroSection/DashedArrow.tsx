import React from 'react';

const DashedArrow = () => {
    return (
        <div className="flex items-center w-full justify-center space-x-3">
            {/* Circle */}
            <div className="w-4 h-4 rounded-full border-2 border-blue-500"></div>

            {/* Dashed Line with Arrow */}
            <div className="flex items-center">
                <div className="w-12 h-0.5 border-t-2 border-dashed border-blue-500"></div>
                <span className="text-blue-500 mx-2">&#8594;</span>
            </div>

            {/* Circle */}
            <div className="w-4 h-4 rounded-full border-2 border-blue-500"></div>

            {/* Dashed Line with Arrow */}
            <div className="flex items-center">
                <div className="w-12 h-0.5 border-t-2 border-dashed border-blue-500"></div>
                <span className="text-blue-500 mx-2">&#8594;</span>
            </div>

            {/* Circle */}
            <div className="w-4 h-4 rounded-full border-2 border-blue-500"></div>
        </div>
    );
};

export default DashedArrow;
