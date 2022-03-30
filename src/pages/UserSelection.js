import {useEffect, useState} from "react";
import './styles/UserSelections.css';
import axios from "axios"
import UserComponent from "../components/UserComponent";
import {useCookies} from "react-cookie";
import {io} from "socket.io-client";
import {useUpdate} from "../utils/useUpdate";
function UserSelection() {

    const [users, setUsers] = useState([])
    // eslint-disable-next-line no-unused-vars
    const [cookies, setCookie, removeCookie] = useCookies(["user"])

    const socket = io("http://192.168.178.32:3005/")
    useEffect(() => {

        if(cookies.uuid){
            removeCookie("uuid", {path:"/"})
        }
        getUsers()

    },[cookies.uuid, removeCookie])

    useUpdate(socket,() => {
        getUsers()
    })

    function getUsers(){
        axios.post("http://192.168.178.32:3000/api/user/get").then(res => {
            setUsers(res.data)
        })
    }

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
