import { NextApiRequest } from "next"

interface UserRequest extends NextApiRequest {
    body: {
        name: string
        email: string
        password: string
    }
}

export type { UserRequest }
