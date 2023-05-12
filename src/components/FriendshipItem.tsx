import useChatContext from "@hooks/useChatContext"
import { STATE_COLORS } from "@lib/constants/securityPassword"
import type { Friendship } from "@customTypes/components"
import Image from "next/image"

/**
 * Este componente es el encargado de mostrar una relación entre usuario y contacto
 * @param {Friendship} friendship
 * - friendship: relación entre usuario y contacto
 * @returns component
 * @example <FriendshipItem name="Juan" time="12:00" message="Hola" numMessages={2} state="online" />
 */
const FriendshipItem = (friendship: Friendship) => {
    const { name, time, message, numMessages, status, image } = friendship
    const stateStyle = "h-[.8rem] w-[.8rem] ml-3 rounded-full"
    const color = STATE_COLORS[status as keyof typeof STATE_COLORS]
    const { handleOpenChat } = useChatContext()

    /**
     * Esta función se encarga de abrir el chat con el contacto seleccionado
     * @returns void
     * @example handleClick()
     */
    const handleClick = () => {
        handleOpenChat(friendship)
    }

    return (
        <>
            <div
                className="w-full mb-4 mx-auto flex items-center"
                onClick={handleClick}
                onKeyDown={handleClick}
                role="button"
                tabIndex={0}
            >
                <div className="p-2 mr-3">
                    {image ? (
                        <Image
                            className="h-[3rem] w-[3rem] rounded-full"
                            src={image}
                            alt={name}
                            width={75}
                            height={75}
                        />
                    ) : (
                        <div className="w-[3rem] h-[3rem] bg-secondary dark:bg-dark_secondary rounded-full"></div>
                    )}
                </div>
                <div className="w-10/12 flex flex-col pl-1 pr-6">
                    <div className="w-full flex justify-between">
                        <div className="flex items-center">
                            <p>{name}</p>
                            <div className={`${stateStyle} bg-${color}`}></div>
                        </div>
                        <p className="text-secondary_text dark:text-dark_secondary_text">{time}</p>
                    </div>
                    {message ? (
                        <div className="w-full flex justify-between items-center text-secondary_text dark:text-dark_secondary_text pt-2">
                            <p className="w-[12rem] lg:w-[14rem] truncate">{message}</p>
                            {numMessages ? (
                                <div className="h-[1.3rem] w-[1.3rem] flex items-center justify-center bg-light_purple dark:bg-dark_purple rounded-full">
                                    <p className="text-xs text-white dark:text-black">
                                        {numMessages}
                                    </p>
                                </div>
                            ) : (
                                <></>
                            )}
                        </div>
                    ) : (
                        <></>
                    )}
                </div>
            </div>
        </>
    )
}

export default FriendshipItem
