import React from 'react';
import logo from './logo.svg';
import './App.css';
import KanbanBoard from './components/KanbanBoard';

function App() {
  const cards = [
    { id:1,
        title: "Card one title",
        description: "Card detailed description.",
        status: "todo",
        tasks: [
          {id: 1, name:"Task one", done:true},
          {id: 2, name:"Task two", done:false},
          {id: 3, name:"Task three", done:false}
    ] },
      { id:2,
        title: "Card Two title",
        description: "Card detailed description",
        status: "in-progress",
        tasks: []
    },
    { id:3,
        title: "Card Three title",
        description: "Card detailed description",
        status: "done",
        tasks: []
    }, ];
    
  return (
    <div className="App1">
      <KanbanBoard cards={cards}  />
    </div>
  );
}

export default App;
