// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"
import { register } from "@lib/services/user.service"

type Data = {
    name: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    if (req.method !== "POST") {
        res.status(405).end()
    }

    const { name, email, password } = req.body
    const user = await register({
        name,
        email,
        password,
    })

    if (user !== null) {
        return res.status(200).json({ name: user.username as string, ...user })
    }
}
