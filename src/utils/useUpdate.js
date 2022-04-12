import {useEffect} from "react";

export function useUpdate(socket,cb){
    useEffect(()=>{
        socket.on("update", cb)
        return () => {
            socket.off("update")
        }
    })
}