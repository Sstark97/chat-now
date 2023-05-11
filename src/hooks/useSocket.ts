import { useEffect, useRef } from "react"
import io, { Socket } from "socket.io-client"
import { SOCKET_SERVER } from "@lib/constants/links"

const useSocket = () => {
    const socketRef = useRef<Socket>()

    useEffect(() => {
        socketRef.current = io(SOCKET_SERVER)

        return () => {
            if (socketRef.current) {
                socketRef.current.disconnect()
            }
        }
    }, [])

    return socketRef.current as Socket
}

export default useSocket
