import { useEffect, useRef } from "react"
import io, { Socket } from "socket.io-client"
import { API } from "@lib/constants/links"

const useSocket = () => {
    const socketRef = useRef<Socket>()

    useEffect(() => {
        const socketInit = async () => {
            await fetch(API.SOCKET)
            socketRef.current = io()
        }

        socketInit()

        return () => {
            if (socketRef.current) {
                socketRef.current.disconnect()
            }
        }
    }, [])

    return socketRef.current as Socket
}

export default useSocket
