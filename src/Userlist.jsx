import { useEffect, useState } from "react";
import User from "./User";

const Userlist = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('https://reqres.in/api/users?page=2')
            .then((res) => (res.json()))
            .then((responce) => {
                console.log(responce)
                const list = responce.data
                setUsers(list)
            });
    }, []);

    const profiles = users.map((user, index) => {
        return (
            <>
                <User
                    fname={user.first_name}
                    email={user.email}
                    userImg={user.avatar}
                    key={index}
                />
            </>)
    })


    return (
        <div>
           <h1>List of users</h1>
           <div>
               <input type="text"></input>
               <button>Add</button>
           </div>
            {profiles}
        </div>


    )


}


export default Userlist;