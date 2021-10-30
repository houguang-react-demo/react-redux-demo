import React from 'react';
import {connect} from "react-redux";

const TodoList = props=>{
    let {initValue, inputChange, list,add} = props
    return (
        <div>
            todolist
            <div>
                <input
                    type="text"
                    value={initValue}
                    onChange={inputChange}
                />
                <button onClick={add}>点击</button>
            </div>
            <ul>
                {list.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

const stateToProps = (state) => {
    console.log("state to props",state)
    return state
}

const dispatchToProps = (dispatch) => {
    return {
        inputChange: (e) => {
            let action = {
                type: "change",
                value: e.target.value,
            }
            dispatch(action)
        },
        add: () => {
            let action = {
                type: "add",
            }
            console.log(action)
            dispatch(action)
        }
    };
}

export default connect(stateToProps, dispatchToProps)(TodoList);