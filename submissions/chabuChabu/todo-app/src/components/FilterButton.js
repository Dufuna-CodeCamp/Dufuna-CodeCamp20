import React from 'react';

function FilterButton (props) {
    return (
        <span 
            className="footer-items"
            aria-pressed={props.isPressed}
            onClick={() => props.setFilter(props.name)}
        >
            <span>{props.name}</span> 
        </span>
    )

}

export default FilterButton;