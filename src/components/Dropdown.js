import React, { useState, useEffect, useRef } from 'react'

const Dropdown = ({ options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);

  // create an instance of Ref
  const refForm = useRef();

  useEffect(() => {
    const onClickBody = (event) => {
      if (refForm.current && refForm.current.contains(event.target)) {
        return;
      }

      setOpen(false)
    };

    document.body.addEventListener('click', onClickBody);

    return () => {
      document.body.removeEventListener('click', onClickBody);
    }
  }, [])

  const renderOptions = options.map( (option) => {
    if(option.value === selected.value) {
      return null;
    }

    return (
      <div key={option.value}
           className="item"
           onClick={() => onSelectedChange(option)}>
        {option.label}
      </div>
    );
  });

  return (
    // Bind the ref instance with the desired element
    <div ref={refForm} className="ui form">
      <div className="field">
        <label className="label">Select an item</label>
        <div onClick={() => { setOpen(!open)}}
             className={`ui selection dropdown ${open ? 'visible active' : ''}`}>
        >
          <i className="dropdown icon"/>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? 'visible transition' : ''}`}>
            {renderOptions}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dropdown
