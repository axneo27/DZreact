import axios from "axios";
import { useEffect, useState } from "react";

const FetchUsers = () => {
    const url = 'https://jsonplaceholder.typicode.com/users';
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null); 

    const fetchData = async () => {
        try {
            const response = await axios.get(url);
            setUsers(response.data);
            setError(null);
        } catch (error) {
            console.error("Error:", error);
            setError("Failed to fetch data"); 
            setUsers([]);
        }
    };

    useEffect(() => {
        fetchData();
    }, []); 

    return (
        <div>
            <h1>Fetch Users</h1>
            {error ? (<p style={{ color: "red" }}>{error}</p>) : 
            (
                <ul>
                    {users.map((user) => (
                        <li key={user.id}>{user.name}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default FetchUsers;