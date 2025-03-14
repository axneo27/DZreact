import UsersList from './components/usersList';
import './App.css'

function App3() {
    const users = [
        { id: 1, name: 'John', age: 25 },
        { id: 2, name: 'Jane', age: 24 },
        { id: 3, name: 'Tom', age: 30 },
    ]
    return (
        <div>
            <UsersList users={users} />
        </div>
    );
}

export default App3;
