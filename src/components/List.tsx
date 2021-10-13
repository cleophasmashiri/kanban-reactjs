import React, { Component } from 'react';
import Card from './Card';

class List extends Component {
    
    constructor( public props: any) {
        super(props);
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