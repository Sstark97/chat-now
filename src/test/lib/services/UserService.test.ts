import { UserService } from "@lib/services/UserService"
import { UserRepository } from "@customTypes/domain"
import { User } from "@prisma/client"

describe("UserService", () => {
    it("should find an user by email", async () => {
        const user: User = {
            id: "irrelevant",
            name: "irrelevant",
            email: "irrelevant@email.com",
            password: "irrelevant",
            image: "irrelevant",
            status: "busy",
            emailVerified: new Date(),
        }
        const userRepository: UserRepository = {
            findBy: jest.fn(() => {
                return Promise.resolve(user)
            }),
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

    it("should find an user by id", async () => {
        const user: User = {
            id: "irrelevantId",
            name: "irrelevant",
            email: "irrelevant@email.com",
            password: "irrelevant",
            image: "irrelevant",
            status: "busy",
            emailVerified: new Date(),
        }

        const users = [user]
        const userRepository: UserRepository = {
            findBy: jest.fn(),
            findByID: jest.fn(() => {
                return Promise.resolve(users.find((user) => user.id === "irrelevantId") ?? null)
            }),
            create: jest.fn(),
            edit: jest.fn(),
            delete: jest.fn(),
            changeStatus: jest.fn(),
        }
        const userService = new UserService(userRepository)
        const userExist = await userService.existUserFromID("irrelevantId")

        expect(userExist).toBeTruthy()
        expect(userRepository.findByID).toHaveBeenCalled()
    })
})
