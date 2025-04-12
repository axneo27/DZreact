import store from "../TasksReducer";

import { useEffect, useState } from 'react';
import {Col, ListGroup, Alert, Badge } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
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
        }

        const unsubscribe = store.subscribe(() => {
            setTasksList(store.getState().tasksList);
            saveStateToLocalStorage(store.getState());
        });

        return () => unsubscribe();
    }, []);

    const handleCheckChange = (id) => {
        store.dispatch({ type: 'CHANGE_IS_DONE', payload: id });
        saveStateToLocalStorage(store.getState());
    }

    return (
        <div>
            <Col xs={12} md={10} lg={8} style={{ maxHeight: '400px', overflowY: 'auto', margin: 'auto' }}>
                {tasksList.length === 0 ? (
                    <Alert variant="info" className="text-center">
                        No tasks found
                    </Alert>
                ) : (
                    <ListGroup>
                        {tasksList.map(task => (
                            <ListGroup.Item key={task.id} style={{ width: '335px', margin: 'auto', marginTop: '20px' }}>
                                <Card style={{ width: '300px' }}>
                                    <Card.Body>
                                        <Card.Title className={`mb-1 ${task.done ? 'text-muted text-decoration-line-through' : ''}`}>
                                            {task.name}
                                        </Card.Title>
                                        <Badge pill bg={task.done ? "success" : "warning"} className="ms-2">
                                            {task.done ? "Completed" : "Pending"}
                                        </Badge>
                                        <Card.Text className="mt-2 mb-3">
                                            {task.description}
                                        </Card.Text>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="form-check form-switch">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id={`task-${task.id}`}
                                                    checked={task.done}
                                                    onChange={() => handleCheckChange(task.id)}
                                                />
                                                <label className="form-check-label" htmlFor={`task-${task.id}`}>
                                                    Mark as {task.done ? "Pending" : "Done"}
                                                </label>
                                            </div>
                                            <Button
                                                variant="outline-danger"
                                                size="sm"
                                                onClick={() => {
                                                    store.dispatch({ type: 'REMOVE_TASK', payload: task.id });
                                                    saveStateToLocalStorage(store.getState());
                                                }}>
                                                <i className="bi bi-trash"></i> Remove
                                            </Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                )}
            </Col>
        </div>
    );
};

export default TasksList;