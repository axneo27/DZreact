import PhoneBook from "../phoneBook/phoneBook";
import { useState } from "react";

let searchedUsers = [];

function SubmitForm() {

    const searchInput = document.getElementById("searchInput");

    const [usersList, setUsersList] = useState([]);


    const handleSubmit = (event)=> {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const name = formData.get('name');
        const surname = formData.get('surname');
        const email = formData.get('ema');
        const phone = formData.get('phone');

        let curList = usersList;
        let updList = curList.concat({ name, surname, email, phone });
        setUsersList(updList);
        console.log(updList);
    }; 

    const handleDelete = (index) => {
        const updatedList = usersList.filter((_, i) => i !== index);
        setUsersList(updatedList);
    };

    const handleEdit = (index) => {
        const userToEdit = usersList[index];
        const updatedName = prompt("Edit name:", userToEdit.name);
        const updatedSurname = prompt("Edit surname:", userToEdit.surname);
        const updatedEmail = prompt("Edit email:", userToEdit.email);
        const updatedPhone = prompt("Edit phone:", userToEdit.phone);

        const updatedList = [...usersList];
        updatedList[index] = { name: updatedName, surname: updatedSurname, email: updatedEmail, phone: updatedPhone };
        setUsersList(updatedList);
    };

    const Search = () => {
        let filter = searchInput.value.toUpperCase();
        let ul = document.getElementById("phoneList");
        let li = ul.getElementsByTagName('li');

        for (let i = 0; i < li.length; i++) {
            let fullname = li[i].getElementsByClassName('fullname')[0];
            let surname = fullname.innerText.split(' ')[1];
            if (surname.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "";
            } else {
                li[i].style.display = "none";
            }
        }
    }

  return (
    <>
        <div>
            <h1>Phone Book</h1>
            <div>
                <h3>Search</h3>
                <input type="text" id="searchInput" onKeyUp={Search}/>
                <h3>Add new</h3>
            </div>
            <form onSubmit={handleSubmit}>
                <div><input type="text" id="name" name="name"/></div>
                <div><input type="text" id="surname" name="surname"/></div>
                <div><input type="email" id="ema" name="ema"/></div>
                <div><input type="tel" id="phone" name="phone"/></div>
                <button type="submit">Submit</button>
            </form>
        </div>
        <PhoneBook users={usersList} onDelete={handleDelete} onEdit={handleEdit}/>
    </>
  );
}

export default SubmitForm;