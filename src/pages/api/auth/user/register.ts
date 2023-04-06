import type { NextApiResponse } from "next"
import type { UserResponse, ErrorResponse } from "@customTypes/domain"
import { UserFactory } from "@lib/factories/UserFactory"
import { UserRequest } from "@customTypes/request"
import { errors } from "@lib/const"

export default async function handler(req: UserRequest, res: NextApiResponse<UserResponse | ErrorResponse>) {
    const userService = UserFactory.createUserService()

    if (req.method !== "POST") {
        res.status(405).end()
    }

    if (!userService.validateUserFrom(req.body.password)) {
        return res.status(400).json({ error: errors.strictPassword.errorMessage })
    }

    const user = await userService.getUserWithEncryptedPasswordFrom(req)
    const userRegistered = (await userService.register(user)) as UserResponse

    if (user !== null) {
        return res.status(200).json(userRegistered)
    }
}
