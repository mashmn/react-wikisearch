import React, { useEffect, useState, useRef } from 'react';

const Dropdown =({label, options, selected, onSelectedChange}) => {
    const [open, setOpen] = useState(false);
    const ref = useRef();

    const onBodyClick = (event) => {
        // console.log(event.target);
        if(ref.current && ref.current.contains(event.target)){
            return;
        }
        setOpen(false);
    }

    useEffect(() => {
        document.body.addEventListener('click', onBodyClick, {capture: true});

        return () => {
            document.body.removeEventListener('click', onBodyClick, {capture: true});
        }
    }, []);
    
    const renderedOptions = options.map((option) => {
        if(option.value === selected.value) {
            return null;
        }
        return(
            <div 
                key={option.value} 
                className="item"
                onClick={() => {
                    onSelectedChange(option)
                }}
            >                
                {option.label}
            </div>
        )
    });

    // const divStyle = {
    //     color: selected.value
    // };

    return (
        <div ref={ref} className="ui form">
            <div className="field">
                <label className="label">{label}</label>
                <div 
                    onClick={() => {
                        setOpen(!open)
                    }}
                    className={`ui selection dropdown ${open ? 'visible active' : ''}`}
                >
                    <i className="dropdown icon"></i>
                    <div 
                        className="text"
                        style={{color: `${selected.value}`}}  // style={divStyle} 
                    >
                        {selected.label}
                    </div>
                    <div 
                        className={`menu ${open ? 'visible transition' : ''}`}  
                    >
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dropdown;