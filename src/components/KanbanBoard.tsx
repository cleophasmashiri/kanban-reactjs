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