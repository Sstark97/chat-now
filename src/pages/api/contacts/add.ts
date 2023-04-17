import type { ContactRequest } from "@customTypes/request"
import { NextApiResponse } from "next"
import { getSession } from "next-auth/react"
import { ErrorResponse } from "@customTypes/domain"
import { UserFactory } from "@lib/factories/UserFactory"
import { Contact } from "@prisma/client"

const userService = UserFactory.createUserService()

export default async function handler(req: ContactRequest, res: NextApiResponse<Contact | ErrorResponse>) {
    /*  const errorResponse = await checkErrorsInRegisterFrom(req, res)

  if (errorResponse.status) {
      return res.status(errorResponse.status).json({ message: errorResponse.error })
  }*/

    const session = await getSession({ req })
    const userEmail = session?.user?.email as string

    console.log(userEmail)
    console.log(req.body)
    const newContact = await userService.addContact(userEmail, req.body)

    if (newContact !== null) {
        return res.status(200).json(newContact)
    }
}
