import {useNavigate, useParams} from "react-router-dom";

import './styles/Edit.css';
import {useState} from "react";
import axios from "axios";

import config from "../config.js"

function NewUser() {
    // eslint-disable-next-line no-unused-vars
    const { uuid } = useParams()

    const [newUsername, setNewUsername] = useState("")
    const navigate = useNavigate()

    function handleSubmit(){
        axios.post(`${config.URL}:3000/api/user/create`, {
            username: newUsername
        }).then(res => {
            navigate("/", {replace: true})
        })
    }

    return (
        <>
            <div className="userData">
                <div className="group">
                    <label htmlFor="username">Username</label>
                    <input type="text" value={newUsername} id="username" onChange={e => setNewUsername(e.target.value)} maxLength="16"/>
                </div>
                <div className="btns">
                    <button onClick={handleSubmit}>Save</button>
                    <button className="cancel" onClick={()=> navigate("/", {replace: true})}>
                        Cancel
                    </button>
                </div>
            </div>
        </>
    );

}
export default NewUser;
