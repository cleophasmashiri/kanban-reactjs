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