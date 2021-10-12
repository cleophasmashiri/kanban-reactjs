# Reactjs Challenge: Kanban 

**Try the challenges on your own first before clicking on my solutions ➡️**. Challenges is a better strategy to master coding subject like reactjs, if you just read it, it may appear a tougher thing to understand. If you wanted to learn how to ride a bycycle, and if you read books on how to ride one, you would never be able to ride until you actually got on one. Mastering coding is very similar to riding bycycles, I hope you will find my challenges approach beneficial.  
<br>

## Challenge 1: Setup Kanban application.
Assuming you have computer that meets the prerequisites for creating a reactja app, create a new react app.  
   
[https://www.typescriptlang.org/docs/handbook/react.html](https://www.typescriptlang.org/docs/handbook/react.html)

### My setup.
```
npx create-react-app kanban --template typescript 
```

Please note, you may need to add the following to .env.
```
SKIP_PREFLIGHT_CHECK=true
```

Run the following to make sure the setup is fine.
```
npm start
```
<br>

## Challenge 2: Add style to index.css as per your preference.

---

<details>
  <summary>My solution to: Challenge: Add style to index.css</summary>
  <p>

  ```
*{
  box-sizing: border-box;
}
html,body,#app { height:100%; margin: 0; padding: 0;
}
body {
background: #eee;
font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
}

.app {
  white-space: nowrap;
  height:100%;
}
ul {
  list-style-type: none; padding: 0;
  margin: 0;
  }  

.list {
  width: 33%;
  height: 100%;
  position: relative;
  display: inline-block;
  vertical-align: top;
  white-space: normal;
  padding: 0 20px;
  overflow: auto;
}
.list:not(:last-child)::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  width: 1px;
  height: 99%;
  background: linear-gradient(to bottom, #eee 0%, #ccc 50%, #eee 100%);
}

.card {
  position: relative;
  z-index: 1;
  background: #fff;
  width: 100%;
  padding: 10px 10px 10px 15px;
  margin: 0 0 10px 0;
  overflow: auto;
  border: 1px solid #e5e5df;
  border-radius: 3px;
  box-shadow: 0 1px 0 rgb(0, 0, 0, 0.25);
}
.card-title {
  font-weight: bold;
  border-bottom: solid 5px transparent;
}
.card-title:before {
  display: inline-block;
  width: 1em;
  content: '➡';
}
.card-title-is-open::before {
  content: '⬇️';
}
.checklist-task:first-child {
  margin-top: 10px;
  padding-top: 10px;
  border-top: dashed 1px #ddd;
}
.checklist-task-remove::after {
  display: inline-block;
  color: #d66;
  content: "+";
}

```

</p>
</details>
 <br>
  
## Challenge 3: Create the following components: KanbanBoard, List, Card and Checklist, consider the image below your requirement spec. 
<br>

![Spec](/matrix_board_kanban.png)

<br>

  
### Challenge 3a: Create component KanbanBoard.

<details>
  <summary>My solution...</summary>
  <p>

```

import React, { Component } from 'react';
import List from './List';

class KanbanBoard extends Component {
    constructor(public props: any) {
        super(props);
    }
    render(): any {
        const columns = [{ status: 'todo', title: 'To Do' }, { status: 'in-progress', title: 'In Progress' }, { status: 'done', title: 'Done' }];

        const listEls = columns.map(col =>
        (<List
            title={col.title}
            key={col.status}
            cards={this.props.cards.filter((card: any) => card.status === col.status)}
        />));

        return (<div className="app">
            {listEls}
        </div>);
    }
}

export default KanbanBoard;

```

</p>

</details>

<br>
  
### Challenge 3b: Create List component.

<details>
  <summary>My solution...</summary>
  <p>

```
import React, { Component } from 'react';
import Card from './Card';

class List extends Component {
    
    constructor(private title: string, private cards: any[], public props: any) {
        super(props);
        this.title = title;
        this.cards = cards;
    }

    render(): any {
        const cards = this.props.cards.map((card: any) => (<Card
            id={card.id}
            title={card.title}
            tasks={card.tasks} />
        ));
        return (<div className="list">
            <h1>{this.props.title}</h1>
            {cards}
        </div>);
    }
}

export default List;
```
</p>

</details>

<br>
  
### Challenge 3c: Create Card component.

<details>
  <summary>My solution...</summary>
  <p>

```
import React, { Component } from 'react';
import Checklist from './Checklist';

class Card extends Component {
    constructor(public props: any) {
        super(props)
    } 
    render(): any {
        return (<div className = 'card' >
      <div className='card-title'>{this.props.title}</div>
      <div className='card-details'>
        {this.props.description}
        <Checklist cardId={this.props.id} tasks={this.props.tasks} />
      </div>
    </div >);
    }
}

export default Card;

```

</p>

</details>

<br>

### Challenge 3d: Create Checklist component.

<details>
  <summary>My solution...</summary>
  <p>

```
import React, { Component } from 'react';

class Checklist extends Component {

    constructor(public props: any) {
        super(props)
    }

    render(): any {
        const tasksEl = this.props.tasks.map((task: any) => (<li className='checklist-task'>
            <input type='checkbox' defaultChecked={task.done} />
            {task.name}
            <a href='#' className='checklist-task-remove' />
        </li>))
        return (<div>
            <ul>{tasksEl}</ul>
        </div>);
    }
}

export default Checklist;

```

</p>

</details>

<br>


### Challenge 3e: Add <KanbanBoard /> to App.tsx. 

<details>
  <summary>My solution...</summary>
  <p>

```
import React from 'react';
import logo from './logo.svg';
import './App.css';
import KanbanBoard from './KanbanBoard';

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

```

</p>

</details>

<br>

In the project directory, you can run:

```
 npm start

```
