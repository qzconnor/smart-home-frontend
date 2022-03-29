import './style/UserComponent.css';
import { FaPen, FaPlus} from 'react-icons/fa';
function UserComponent({username,icon, uuid}) {

    if(username && icon && uuid){
        return (
            <div className="user" data-uuid={uuid}>
                <div className="icon">
                    <img src={`http://localhost:3000/api/icon/display?name=${icon}`} alt="icon"/>
                </div>
                <div className="info">
                    <span className="username">{username}</span>
                    <button className="useBtn">Use</button>
                </div>
                <button className="edit">
                    <FaPen />
                </button>
            </div>
        );
    }else {
        return (
            <button className="user new">
                <FaPlus />
            </button>
        )
    }


}
export default UserComponent;
