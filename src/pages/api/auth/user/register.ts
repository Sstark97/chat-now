import type { NextApiResponse } from "next"
import type { UserResponse } from "@customTypes/domain"
import { UserFactory } from "@lib/factories/UserFactory"
import { UserRequest } from "@customTypes/request"

export default async function handler(req: UserRequest, res: NextApiResponse<UserResponse>) {
    const userService = UserFactory.createUserService()

    if (req.method !== "POST") {
        res.status(405).end()
    }

    const user = await userService.getUserWithEncryptedPasswordFrom(req)
    const userRegistered = (await userService.register(user)) as UserResponse

    if (user !== null) {
        return res.status(200).json(userRegistered)
    }
}
