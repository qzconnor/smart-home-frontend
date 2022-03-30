import {useEffect, useState} from "react";
import './styles/UserSelections.css';
import axios from "axios"
import UserComponent from "../components/UserComponent";
import {useCookies} from "react-cookie";
function UserSelection() {

    const [users, setUsers] = useState([])
    const [cookies, setCookie, removeCookie] = useCookies(["user"])
    useEffect(() => {

        if(cookies.uuid){
            removeCookie("uuid", {path:"/"})
            console.log(cookies)
        }

        axios.post("http://localhost:3000/api/user/get").then(res => {
            setUsers(res.data)
        })
    },[cookies.uuid, removeCookie])
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
