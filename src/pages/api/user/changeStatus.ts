import { NextApiResponse } from "next"
import { UserFactory } from "@lib/factories/UserFactory"
import type { User } from "@prisma/client"
import type { ChangeUserStatusRequest } from "@customTypes/request"
import type { ErrorResponse } from "@customTypes/domain"
import { getServerSession } from "next-auth"
import authConfig from "@pages/api/auth/[...nextauth]"

const userService = UserFactory.createUserService()
/**
 * @description Manejador de la ruta /api/user/changeStatus
 * @param req {ChangeUserStatusRequest}
 * @param res {NextApiResponse<User | ErrorResponse>}
 * @returns {Promise<void>}
 */
export default async function handler(
    req: ChangeUserStatusRequest,
    res: NextApiResponse<User | ErrorResponse>
) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const session = await getServerSession(req, res, authConfig)
    const userEmailInSession = session?.user?.email as string

    const { status } = req.body
    const userUpdated = await userService.changeStatus(userEmailInSession, status)

    return res.status(200).json(userUpdated)
}
