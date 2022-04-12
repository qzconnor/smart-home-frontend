import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

import './styles/User.css';
import {useCookies} from "react-cookie";

import config from "../config"
import {useUpdate} from "../utils/useUpdate";
import {io} from "socket.io-client";

import {IoIosSettings} from 'react-icons/io';
import Weather from "../components/Weather";

function User() {
    const { uuid } = useParams()
    const navigate = useNavigate()
    const [userData, setUserData] = useState()
    // eslint-disable-next-line no-unused-vars
    const [cookies, setCookie] = useCookies(["user"])

    const socket = io(`${config.URL}:3005/`)

    useEffect(() => {
        getData()
    },[navigate, uuid, setCookie])

    useUpdate(socket, () => {
        getData()
    },)

    function getData(){
        axios.post(`${config.URL}:3000/api/user/get`, {
            "uuid": uuid
        }).then(res => {
            if(res.data.status === 200){
                setCookie("uuid", res.data.user._id, {path: "/"})
                setUserData(res.data.user)
            }else {
                navigate("/", {replace: true})
            }
        })
    }

    return (
        <>
            {userData &&
                <div className="user_dashboard">
                    {uuid}
                    <div className="user_status">
                        <IoIosSettings className="settings" onClick={settings}/>
                        <button onClick={changeUser}>
                            <span>{userData.username}</span>
                            <img src={`${config.URL}:3000/api/icon/display?name=${userData.icon}`} alt={userData.icon}/>
                        </button>
                    </div>

                    <Weather />
                </div>
            }</>
    );
    function changeUser(e){
        navigate("/users", {replace: true})
    }
    function settings(e){
        navigate("/settings/" + uuid, {replace: true})
    }
}
export default User;
