import React, { useState } from 'react';
import {FiChevronLeft, FiChevronRight} from "react-icons/fi";

function ExpandableText( {title, description} ) {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="expandable-text">
            <div className='button' onClick={toggleExpand}>
                {title}
                <FiChevronLeft className='arrow' />
            </div>
            {isExpanded && (
                <div className="text-content">
                    <p>{description}</p>
                    
                </div>
            )}
        </div>
    );
}

export default ExpandableText;
