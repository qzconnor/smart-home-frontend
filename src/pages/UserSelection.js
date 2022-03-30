import {useEffect, useState} from "react";
import './styles/UserSelections.css';
import axios from "axios"
import UserComponent from "../components/UserComponent";
function UserSelection() {

    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.post("http://localhost:3000/api/user/get").then(res => {
            setUsers(res.data)
        })
    },[])
    return (
        <div className="selection">
             <div className="users">
                 {users.map((user, i) => {
                     return <UserComponent icon={user.icon} username={user.username} uuid={user._id} key={i}/>
                 })}
                 <UserComponent />
             </div>
        </div>
    );
}
export default UserSelection;
