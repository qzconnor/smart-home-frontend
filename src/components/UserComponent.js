import './style/UserComponent.css';
import { FaPen, FaPlus} from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

function UserComponent({username,icon, uuid}) {
    const navigate = useNavigate();

    if(username && icon && uuid){
        return (
            <div className="user" data-uuid={uuid}>
                <div className="icon">
                    <img src={`http://192.168.178.32:3000/api/icon/display?name=${icon}`} alt="icon"/>
                </div>
                <div className="info">
                    <span className="username">{username}</span>
                    <button className="useBtn" onClick={useUser}>Use</button>
                </div>
                <button className="edit" onClick={editUser}>
                    <FaPen />
                </button>
            </div>
        );
    }else {
        return (
            <button className="user new" onClick={createNewUser}>
                <FaPlus />
            </button>
        )
    }
    function createNewUser(e){
        navigate("/new", { replace: true });
    }
    function editUser(e){
        navigate("/edit/" + uuid, { replace: true });
    }
    function useUser(){
        navigate("/user/" + uuid, { replace: true });
    }
}
export default UserComponent;
