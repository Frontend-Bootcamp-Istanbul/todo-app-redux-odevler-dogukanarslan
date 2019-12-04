import React from 'react';
import Todo from './Todo';


class TodoList extends React.Component{

    render(){
        return (
            <div className="todo-list">
                <h3>{this.props.title} <span>{this.props.todos.length}</span>
                </h3>
                {
                    this.props.todos.map((todo) => {
                        return <Todo
                            {...todo}
                            key={Math.random()}
                        />
                    })
                }
            </div>
        );
    }
}

export default TodoList;
