import {useEffect} from "react";

export function useUpdate(socket,cb){
    useEffect(()=>{
        socket.on("update", () => {
            cb()
        })
    },[cb,socket])
}