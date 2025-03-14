import React, { useEffect, useRef, useState } from 'react';
import Modal from '../modal';

const ToDoList = ({ todos }) => {
    const [openTodoId, setOpenTodoId] = useState(null);
    const selectedTodo = useRef(null);

    const changeFocus = () => {
        selectedTodo.current.focus();
    }

    useEffect(() => {
        if (selectedTodo.current && selectedTodo.current.id === 1) {
            selectedTodo.current.focus();
        }
    }, []);

    return (
        <>
            <h1>Todo List</h1>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id} ref={todo.id === 1 ? selectedTodo : null} onClick={changeFocus}>
                        <button onClick={() => setOpenTodoId(todo.id)}>Additional info</button>
                        {openTodoId === todo.id && (
                            <Modal onClose={() => setOpenTodoId(null)}>
                                {todo.text}
                            </Modal>
                        )}
                        <h4>{todo.header}</h4>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ToDoList;