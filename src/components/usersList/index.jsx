import React, { Fragment } from "react";

const UsersList = ({ users }) => {
  return (
    <Fragment>
      <h1>Users List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default UsersList;