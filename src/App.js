import React from 'react'

import Accordion from "./components/Accordion";
import Search from "./components/Search";


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

const App = () => {
  return (
    <div>
      <Search />
    </div>
  );
}

export default App;
