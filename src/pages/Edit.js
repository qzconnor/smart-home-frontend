import {useNavigate, useParams} from "react-router-dom";

import './styles/Edit.css';
import {useEffect, useState} from "react";
import axios from "axios";
import { FaTrash} from 'react-icons/fa';
import config from "../config"

function Edit() {
    const { uuid } = useParams()

    const [userData, setUserData] = useState()
    const [newUsername, setNewUsername] = useState("")
    const navigate = useNavigate()


    useEffect(() => {
        axios.post(`${config.URL}:3000/api/user/get`, {
                "uuid": uuid
            }
        ).then(res => {
            if(res.data.status === 200){
                setUserData(res.data.user)
                setNewUsername(res.data.user.username)
            }
        })
    },[uuid])

    function handleSubmit(){
        axios.post(`${config.URL}:3000/api/user/update?uuid=${uuid}`, {
            username: newUsername
        }).then(res => {
            navigate("/", {replace: true})
        })
    }
    function handleDelete(){
        axios.post(`${config.URL}:3000/api/user/remove`, {
            "uuid": uuid
        }).then(res => {
            console.log(res.data.message)
            navigate("/", {replace: true})
        });
    }
    return (
        <>
            {userData &&
               <>
                   <div className="userData">
                        <div className="delete">
                            <FaTrash onClick={handleDelete}/>
                        </div>
                       <div className="group">
                           <label htmlFor="username">Username</label>
                           <input type="text" value={newUsername} id="username" onChange={e => setNewUsername(e.target.value)}/>
                       </div>
                        <div className="btns">
                            <button onClick={handleSubmit}>Save</button>
                            <button className="cancel" onClick={()=> navigate("/", {replace: true})}>
                                Cancel
                            </button>
                        </div>
                   </div>

               </>

            }
        </>
    );

}
export default Edit;
