import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

import './styles/User.css';
import {useCookies} from "react-cookie";
function User() {
    const { uuid } = useParams()
    const navigate = useNavigate()

    const [userData, setUserData] = useState()
    const [cookies, setCookie] = useCookies(["user"])
    useEffect(() => {
        axios.post("http://localhost:3000/api/user/get", {
            "uuid": uuid
            }
        ).then(res => {
            if(res.data.status === 200){
                setCookie("uuid", res.data.user._id, {path: "/"})
                setUserData(res.data.user)
            }else {
                navigate("/", {replace: true})
            }
        })

    },[navigate, uuid, setCookie])

    return (
        <>
            {userData &&
                <div className="user_dashboard">
                    Index, {uuid},
                    <button className="user_status" onClick={changeUser}>
                        <span>{userData.username}</span>
                        <img src={`http://localhost:3000/api/icon/display?name=${userData.icon}`} alt={userData.icon}/>
                    </button>
                </div>
            }</>
    );
    function changeUser(e){
        navigate("/users", {replace: true})
    }
}
export default User;