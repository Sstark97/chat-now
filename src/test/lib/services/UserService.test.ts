import { UserService } from "@lib/services/UserService"
import { UserRepository } from "@customTypes/domain"
import { User } from "@prisma/client"

describe("UserService", () => {
    let user: User
    let users: User[]

    beforeEach(() => {
        user = {
            id: "irrelevantId",
            name: "irrelevant",
            email: "irrelevant@email.com",
            password: "irrelevant",
            image: "irrelevant",
            status: "busy",
            emailVerified: new Date(),
        }

        users = [user]
    })

    it("should find an user by email", async () => {
        const userRepository: UserRepository = {
            findBy: jest.fn(() => {
                return Promise.resolve(
                    users.find((user) => user.email === "irrelevant@email.com") ?? null
                )
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

    it("should create an user", async () => {
        const userRepository: UserRepository = {
            findBy: jest.fn(),
            findByID: jest.fn(),
            create: jest.fn((credentials) => {
                const newUser = {
                    ...user,
                    id: "irrelevantId2",
                    name: credentials?.name ?? null,
                    email: credentials?.email ?? null,
                }
                users.push(newUser)
                return Promise.resolve(newUser)
            }),
            edit: jest.fn(),
            delete: jest.fn(),
            changeStatus: jest.fn(),
        }

        const userService = new UserService(userRepository)
        const userCreated = await userService.register({
            name: "irrelevant",
            email: "irrelevant2@gmail.com",
            password: "irrelevant",
        })

        expect(userCreated?.email).toBe(users[1].email)
        expect(userRepository.create).toHaveBeenCalled()
    })

    it("should edit an user only by name", async () => {
        const userRepository: UserRepository = {
            findBy: jest.fn(),
            findByID: jest.fn(),
            create: jest.fn(),
            edit: jest.fn((user) => {
                const userInRepository = users[0]

                return Promise.resolve({
                    ...userInRepository,
                    name: user?.name ?? userInRepository.name,
                })
            }),
            delete: jest.fn(),
            changeStatus: jest.fn(),
        }

        const userService = new UserService(userRepository)
        const userEdited = await userService.edit({
            name: "irrelevant2",
            email: "",
        })

        expect(userEdited?.name).toBe("irrelevant2")
        expect(userRepository.edit).toHaveBeenCalled()
    })

    it("should delete a user by email", async () => {
        const userRepository: UserRepository = {
            findBy: jest.fn(),
            findByID: jest.fn(),
            create: jest.fn(),
            edit: jest.fn(),
            delete: jest.fn((email) => {
                const userInRepository = users[0]
                users = users.filter((user) => user.email !== email)

                return Promise.resolve(userInRepository)
            }),
            changeStatus: jest.fn(),
        }

        const userService = new UserService(userRepository)
        const userDeleted = await userService.delete("irrelevant@email.com")

        expect(userDeleted?.email).toBe(user.email)
        expect(users.length).toBe(0)
        expect(userRepository.delete).toHaveBeenCalled()
    })

    it("should change the status of an user", async () => {
        const userRepository: UserRepository = {
            findBy: jest.fn(),
            findByID: jest.fn(),
            create: jest.fn(),
            edit: jest.fn(),
            delete: jest.fn(),
            changeStatus: jest.fn((id, status) => {
                const userInRepository = users[0]
                users = users.map((user) => {
                    if (user.id === id) {
                        return {
                            ...user,
                            status,
                        }
                    }
                    return user
                })

                return Promise.resolve({
                    ...userInRepository,
                    status,
                })
            }),
        }

        const userService = new UserService(userRepository)
        const userChangedStatus = await userService.changeStatus("irrelevantId", "busy")

        expect(userChangedStatus?.status).toBe("busy")
        expect(userRepository.changeStatus).toHaveBeenCalled()
    })
})
