import {useNavigate, useParams} from "react-router-dom";

import './styles/Edit.css';
import {useEffect, useState} from "react";
import axios from "axios";
import config from "../config";

function Settings() {
    const { uuid } = useParams()

    const [citys, setCitys] = useState([])

    useEffect(() => {
        axios.get(`${config.URL}:3000/api/services/abfall/orte`).then((result) => {
            setCitys(result.data.orte)
            console.log(result.data["orte"])
        })
    }, [])


    return (
        <></>
    );

}
export default Settings;
