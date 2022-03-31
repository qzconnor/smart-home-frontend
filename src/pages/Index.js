import {useCookies} from "react-cookie";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

function Index() {
    // eslint-disable-next-line no-unused-vars
    const [cookies, setCookie] = useCookies(["user"])
    const navigate = useNavigate()

    useEffect(()=>{
        if(cookies.uuid){
            navigate("/user/" + cookies.uuid, {replace: true})
        }else {
            navigate("/users", {replace: true})
        }
    }, [cookies.uuid, navigate])
    return (
        <div/>
    );
}
export default Index;
