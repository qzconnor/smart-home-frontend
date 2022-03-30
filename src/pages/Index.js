import {useCookies} from "react-cookie";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

function Index() {
    const [cookies, setCookie] = useCookies(["user"])
    console.log(cookies)
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
