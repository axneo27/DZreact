import store from "../TasksReducer";

import {useState} from 'react'

const saveStateToLocalStorage = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('tasksList', serializedState);
    } catch (e) {
        console.error("Could not save state to local storage", e);
    }
};

const ClearTasksListButton = () => {
    const clearTaskList = () => {
        store.dispatch({ type: 'CLEAR_TASK_LIST' });
        saveStateToLocalStorage(store.getState());
    };

    return (
        <button onClick={clearTaskList}>Clear task list</button>
    );
}

const AddTask = () => {
    const [taskName, setTaskName] = useState('');
    const isDone = false;
    const [description, setDescription] = useState('');

    const addTask = () => {
        const newTask = { id: Date.now(), name: taskName, done: isDone, description: description };
        store.dispatch({ type: 'ADD_TASK', payload: newTask });
        setTaskName('');
        setDescription('');

        console.log(store.getState());
        saveStateToLocalStorage(store.getState());
    };

    return (
        <div>
            <div style={{padding: '20px'}}>
                <input
                type="text"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                placeholder="Task Title"
                />

                <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Task description"
                />
            </div>
            <div style={{marginLeft: '20px'}}>
                <button onClick={addTask}>Add task</button> <ClearTasksListButton />
            </div>
        </div>
    );
};

export default AddTask;