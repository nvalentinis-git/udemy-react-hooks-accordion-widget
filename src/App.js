import React, { useState } from 'react'

import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";

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
  return (
    <div>
      <Translate />
    </div>
  );
}

export default App;
