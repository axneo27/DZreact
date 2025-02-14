
function PhoneBook({ users, onDelete, onEdit}) {

    return (
        <ul id="phoneList">
            {users.map((user, index) => (
                <li key={index}>
                    <p className="fullname">{user.name} {user.surname}</p>
                    <p>Email: {user.email}</p>
                    <p>Phone Number: {user.phone}</p>
                    <div>
                        <button onClick={()=>{onEdit(index)}} id="edit">Edit</button>
                        <button onClick={()=>{onDelete(index)}} id="delete">Delete</button>
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default PhoneBook;