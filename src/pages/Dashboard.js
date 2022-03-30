import './styles/Dashboard.css';
import {useParams} from "react-router-dom";

import {useNavigate} from "react-router-dom";

function Dashboard() {
    const {uuid} = useParams()
    const navigate = useNavigate()
    return (
        <div className="dashboard">
            HI , {uuid}
            <div className="change-user">
                    <button className="changeUser" onClick={changeUser}>Change User</button>
            </div>
        </div>
    );

    function changeUser(){
        navigate("/userselection", { replace: true });
    }

}
export default Dashboard;
