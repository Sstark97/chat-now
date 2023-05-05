import { Server } from "socket.io"
import { NextApiRequest, NextApiResponse } from "next"
import { ChatFactory } from "@lib/factories/ChatFactory"

const chatService = ChatFactory.createChatService()

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (res.socket.server.io) {
        console.log("Already set up")
        res.end()
        return
    }

    const io = new Server(res.socket.server)
    res.socket.server.io = io

    console.log("Setting up socket")

    io.on("connection", (socket) => {
        console.log("Connected")
        socket.on("send-message", async (obj) => {
            const { userId, contactId, message } = obj
            const messageInDb = await chatService.sendMessage(userId, contactId, message)
            io.emit("receive-message", messageInDb)
        })
    })

    // Enviar la respuesta después de configurar el socket
    res.end()
}
