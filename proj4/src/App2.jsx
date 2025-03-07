import './App.css'
import { useState, useEffect } from 'react'

function App2() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
              const response = await fetch('https://jsonplaceholder.typicode.com/users');
              if (!response.ok) {
                throw new Error('Oops');
              }
              const data = await response.json();
              setUsers(data); 
            } catch (error) {
              console.error('error: ', error);
            }
        };
        fetchUsers();
    }, []);

    return (
        <div>
            <h1>Users</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default App2;
