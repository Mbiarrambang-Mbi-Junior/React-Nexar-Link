import React, { useState } from 'react';

const ReadMore = ({ children, limit = 50 }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const text = children;

    // Check if the text is short enough not to need the feature
    if (text.length <= limit) {
        return <p>{text}</p>;
    }

    // Toggle the expansion state
    const toggleIsExpanded = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <p className="description text-gray-700 text-sm overflow-hidden">
            {isExpanded ? text : `${text.slice(0, limit)}...`}
            <span
                onClick={toggleIsExpanded}
                className="text-teal-600 cursor-pointer hover:underline font-semibold"
            >
                {isExpanded ? ' show less' : ' read more'}
            </span>
        </p>
    );
};

export default ReadMore;