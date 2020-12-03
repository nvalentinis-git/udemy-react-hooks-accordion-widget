import React, { useState } from 'react'

import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";

const items = [
  {
    title: 'Title 1',
    content: 'Description 1'
  },
  {
    title: 'Title 2',
    content: 'Description 2'
  },
  {
    title: 'Title 3',
    content: 'Description 3'
  }
]

const options = [
  {
    label: 'The color red',
    value: 'red',
  },
  {
    label: 'The color green',
    value: 'green',
  },
  {
    label: 'The color blue',
    value: 'blue',
  }
]

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true)

  return (
    <div>
      <button onClick={() => { setShowDropdown(!showDropdown)}}>Toggle Dropdown</button>
      {showDropdown ?
        <Dropdown
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        /> : null
      }
    </div>
  );
}

export default App;
