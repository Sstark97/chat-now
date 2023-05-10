import { Server as HTTPServer } from "http"
import { Server as IOServer } from "socket.io"
import { Socket as NetSocket } from "net"
import { NextApiResponse } from "next"

interface SocketServer extends HTTPServer {
    io?: IOServer | undefined
}

interface SocketWithIO extends NetSocket {
    server: SocketServer
}

interface NextApiResponseWithSocket extends NextApiResponse {
    socket: SocketWithIO
}

export type { NextApiResponseWithSocket }
