import Image from "next/image"
import toast from "react-hot-toast"
import type { NotificationProps } from "@customTypes/components"
import { IoCloseOutline } from "react-icons/io5"

const Notification = ({ t, name, message, profilePicture }: NotificationProps) => (
    <div
        className={`${
            t.visible ? "animate-enter" : "animate-leave"
        } max-w-md w-full bg-secondary dark:bg-dark_secondary shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
    >
        <div className="flex-1 w-0 p-4">
            <div className="flex items-start">
                <div className="flex-shrink-0 pt-0.5">
                    {profilePicture ? (
                        <Image
                            className="h-10 w-10 rounded-full"
                            src={profilePicture}
                            alt={name}
                            width={40}
                            height={40}
                        />
                    ) : (
                        <div className="h-10 w-10 bg-icon dark:bg-dark_icon rounded-full"></div>
                    )}
                </div>
                <div className="ml-5 flex-1">
                    <p className="text-sm font-medium text-black dark:text-white">{name}</p>
                    <p className="mt-1 text-sm text-black dark:text-white opacity-60">{message}</p>
                </div>
            </div>
        </div>
        <div className="flex border-l border-gray-200">
            <button
                onClick={() => toast.dismiss(t.id)}
                className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-xl text-black dark:text-white focus:outline-none focus:ring-2"
            >
                <IoCloseOutline />
            </button>
        </div>
    </div>
)

export default Notification
