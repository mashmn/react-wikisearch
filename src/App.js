import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate'

import './App.css';
import Route from './components/Route';

const items = [
  {
    title: 'What is React?',
    content: 'React is a front end javascript framework'
  },
  {
    title: 'Why use React?',
    content: 'React is a favorite JS library among engineers'
  },
  {
    title: 'How do you use React?',
    content: 'React is a fblah blha blah'
  }
];

const options = [
  {
    label: 'The color Red',
    value:'red'
  },
  {
    label: 'The color Green',
    value:'green'
  },
  {
    label: 'A Shade of Blue',
    value:'blue'
  }
];

const App =() => {
  const [selected, setSelected] = useState(options[0]);
  return(
    <div>
      <Route path="/">
        <Accordion items={items}></Accordion>
      </Route>
      <Route path="/search">
        <Search></Search>
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="Select a color"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path="/translate">
        <Translate></Translate>
      </Route>
    </div>
  )
}

export default App;
