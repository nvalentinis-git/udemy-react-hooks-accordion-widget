import React, { useState } from 'react'

import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";

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

  return (
    <div>
      <Header />

      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="Select an Item"
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        />
      </Route>
      <Route path='/search'>
        <Search />
      </Route>
      <Route path='/translate'>
        <Translate />
      </Route>
    </div>
  );
}

export default App;
