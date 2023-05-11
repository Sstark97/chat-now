import { Server as HTTPServer } from "http"
import { Server as IOServer } from "socket.io"
import { Socket as NetSocket } from "net"
import { NextApiResponse } from "next"

/**
 * @interface SocketServer
 * @description Propiedades de un servidor de sockets
 * @property {IOServer} io - Servidor de sockets
 */
interface SocketServer extends HTTPServer {
    io?: IOServer | undefined
}

/**
 * @interface SocketWithIO
 * @description Propiedades de un socket con IO
 * @property {SocketServer} server - Servidor de sockets
 */
interface SocketWithIO extends NetSocket {
    server: SocketServer
}

/**
 * @interface NextApiResponseWithSocket
 * @description Propiedades de una respuesta de API con socket
 * @property {SocketWithIO} socket - Socket
 */
interface NextApiResponseWithSocket extends NextApiResponse {
    socket: SocketWithIO
}

export type { NextApiResponseWithSocket }
