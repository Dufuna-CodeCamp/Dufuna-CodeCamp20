import React from 'react';

const FilterButton = (props) => {
    return(
        <button
            type="button"
            className='footer-btn toggle-btn'
            onClick={() => {
                props.setFilter(props.name)
            }} 
        >
            {props.name}   
        </button>
    )
}

export default FilterButton;