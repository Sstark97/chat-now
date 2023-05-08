import { UserService } from "@lib/services/UserService"
import { UserRepository } from "@customTypes/domain"

describe("UserService", () => {
    it("should find an user by email", async () => {
        const userRepository: UserRepository = {
            findBy: jest.fn(() =>
                Promise.resolve({
                    id: "irrelevant",
                    name: "irrelevant",
                    email: "irrelevant@email.com",
                    password: "irrelevant",
                    image: "irrelevant",
                    status: "busy",
                    emailVerified: new Date(),
                })
            ),
            findByID: jest.fn(),
            create: jest.fn(),
            edit: jest.fn(),
            delete: jest.fn(),
            changeStatus: jest.fn(),
        }
        const userService = new UserService(userRepository)
        const userExist = await userService.existUserFrom("irrelevant@email.com")

        expect(userExist).toBeTruthy()
        expect(userRepository.findBy).toHaveBeenCalled()
    })
})
