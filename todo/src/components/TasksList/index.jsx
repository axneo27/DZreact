import store from "../TasksReducer";

import {useEffect, useState} from 'react'
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';


const saveStateToLocalStorage = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('tasksList', serializedState);
    } catch (e) {
        console.error("Could not save state to local storage", e);
    }
};

const loadStateFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem('tasksList');
        if (serializedState === null) {
        return undefined;
        }
        console.log(serializedState);
        return JSON.parse(serializedState);
    } catch (e) {
        console.error("Could not load state from local storage", e);
        return undefined;
    }
};

const TasksList = () => {
    const [tasksList, setTasksList] = useState([]);

    useEffect(() => {
        const loadedState = loadStateFromLocalStorage();
        if (loadedState) {
            store.dispatch({ type: 'SET_INITIAL_STATE', payload: loadedState });
            setTasksList(loadedState.tasksList);
            console.log(store.getState());
        }

        const unsubscribe = store.subscribe(() => {
                setTasksList(store.getState().tasksList);
                localStorage.setItem('tasksList', JSON.stringify(store.getState().tasksList));
            }
        );

        return () => unsubscribe();
    }, []);

    const handleCheckChange = (id) => {
        store.dispatch({ type: 'CHANGE_IS_DONE', payload: id });
        
        setTasksList(store.getState().tasksList);
        localStorage.setItem('tasksList', JSON.stringify(store.getState().tasksList));
    } 

    return (
        <div style={{ margin: '20px' }}>
            <ul>
                
                {tasksList.map(task => (
                <li key={task.id}>
                    <Card style={{ width: '300px' }}>
                    <Card.Body>
                        <Card.Title>{task.name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                            <input type="checkbox" 
                            onChange={(e) => {
                                handleCheckChange(task.id);
                                console.log(e.target.checked);
                            }}
                            />
                        </Card.Subtitle>
                        <Card.Text>
                            {task.description}
                        </Card.Text>

                        <Button variant='danger' onClick={() => {
                            store.dispatch({ type: 'REMOVE_TASK', payload: task.id });
                            saveStateToLocalStorage(store.getState());
                        }}>
                        Remove
                        </Button>
                    </Card.Body>
                    </Card>
                </li>
                ))}
            </ul>
        </div>
    );
};

export default TasksList;