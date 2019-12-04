import React from 'react';
import {connect} from "react-redux";
import {removeTodo, toggle} from "./actionCreators/actionCreaters";

function Todo(props) {
    const {content, id, checked} = props;
    let itemClass= "todo-item";
    if(checked){
        itemClass += " checked";
    }
    return (
        <div className={itemClass} onClick={() => {props.toggle(id);}}>
            {content}
            <span
                className="remove-todo"
                onClick={(e) => {e.stopPropagation();props.removeTodo(id)}}>X</span>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    removeTodo: (id) => {dispatch(removeTodo(id))},
    toggle: (id) => {dispatch(toggle(id))}
});

export default connect(null, mapDispatchToProps)(Todo);
