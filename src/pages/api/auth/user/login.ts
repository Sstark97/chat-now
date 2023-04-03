import type { NextApiResponse } from "next"
import type { UserResponse } from "@customTypes/domain"
import { UserFactory } from "@lib/factories/UserFactory"
import { UserRequest } from "@customTypes/request"

const getUserFrom = async (req: UserRequest) => {
    const { name, email, password } = req.body

    return { name, email, password }
}

export default async function handler(req: UserRequest, res: NextApiResponse<UserResponse>) {
    const userService = UserFactory.createUserService()

    if (req.method !== "POST") {
        res.status(405).end()
    }

    const user = await getUserFrom(req)
    const userLogged = (await userService.login(user)) as UserResponse

    if (user !== null) {
        return res.status(200).json(userLogged)
    }
}
