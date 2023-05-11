import { Server } from "socket.io"
import { ChatFactory } from "@lib/factories/ChatFactory"
import type { NextApiRequest } from "next"
import type { NextApiResponseWithSocket } from "@customTypes/socket"

const chatService = ChatFactory.createChatService()

export default function handler(req: NextApiRequest, res: NextApiResponseWithSocket) {
    if (res.socket.server.io) {
        console.log("Already set up")
        res.end()
        return
    }

    const { server } = res.socket
    const io = new Server(server)
    res.socket.server.io = io

    console.log("Setting up socket")

    io.on("connection", (socket) => {
        console.log("Connected")
        // socket.on("join", async (obj) => {
        //     const { userId, contactId } = obj
        //     const newChat = await chatService.create(userId, contactId)
        //     io.emit("new-chat", newChat)
        // })

        socket.on("send-message", async (obj) => {
            const { userId, contactId, message } = obj
            const messageInDb = await chatService.sendMessage(userId, contactId, message)
            io.emit("receive-message", messageInDb)
        })
    })

    // Enviar la respuesta después de configurar el socket
    res.end()
}
