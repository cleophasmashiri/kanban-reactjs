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
