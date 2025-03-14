import ToDoList from "./components/ToDoList";
const App4 = () => {
    const todos = [
        { id: 1, header: 'First todo', text: 'This is the first todo' },
        { id: 2, header: 'Second todo', text: 'This is the second todo' },
        { id: 3, header: 'Third todo', text: 'This is the third todo' },
    ]

    return (
        <>
            <ToDoList todos={todos}/>
        </>
    );
}

export default App4;