import { Server } from "socket.io"
import { NextApiRequest, NextApiResponse } from "next"

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
            io.emit("receive-message", obj)
        })
    })

    console.log("Setting up socket")
    res.end()
}
