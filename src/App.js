import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import './App.css';

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
]

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* <Accordion items={items}/> */}
        <Search />
      </div>
    );    
  }
}

export default App;
