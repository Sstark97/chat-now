import { UserFactory } from "@lib/factories/UserFactory"
import type { NextApiResponse } from "next"
import type { UserRequest } from "@customTypes/request"
import type { UserResponse } from "@customTypes/domain"

export default async function handler(req: UserRequest, res: NextApiResponse<UserResponse>) {
    const userService = UserFactory.createUserService()

    if (req.method !== "POST") {
        res.status(405).end()
    }

    const user = await userService.getUserFrom(req)
    const userLogged = (await userService.login(user)) as UserResponse

    if (user !== null) {
        return res.status(200).json(userLogged)
    }
}
