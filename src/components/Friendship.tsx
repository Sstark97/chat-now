import type { FriendshipProps } from "@customTypes/components"
import { STATE_COLORS } from "@lib/constants/securityPassword"

/**
 * Este componente es el encargado de mostrar una relación entre usuario y contacto
 * @param {FriendshipProps} { name, time, message, numMessages, state } - name: nombre del contacto, time: hora del último mensaje, message: último mensaje, numMessages: número de mensajes sin leer, state: estado del contacto
 * @returns component
 * @example <Friendship name="Juan" time="12:00" message="Hola" numMessages={2} state="online" />
 */
const Friendship = ({ name, time, message, numMessages, state }: FriendshipProps) => {
    const stateStyle = "h-[.8rem] w-[.8rem] ml-3 rounded-full"
    const color = STATE_COLORS[state as keyof typeof STATE_COLORS]

    return (
        <>
            <div className="w-full mb-4 mx-auto flex items-center">
                <div className="w-2/12 p-2">
                    <div className="w-[3rem] h-[3rem] bg-secondary rounded-full"></div>
                </div>
                <div className="w-10/12 flex flex-col pl-1 pr-6">
                    <div className="w-full flex justify-between">
                        <div className="flex items-center">
                            <p>{name}</p>
                            <div className={`${stateStyle} bg-${color}`}></div>
                        </div>
                        <p className="text-secondary_text">{time}</p>
                    </div>
                    {message ? (
                        <div className="w-full flex justify-between items-center text-secondary_text pt-2">
                            <p className="w-[88%] truncate">{message}</p>
                            {numMessages ? (
                                <div className="h-[1.3rem] w-[1.3rem] flex items-center justify-center bg-light_purple rounded-full">
                                    <p className="text-xs text-white">{numMessages}</p>
                                </div>
                            ) : null}
                        </div>
                    ) : null}
                </div>
            </div>
        </>
    )
}

export default Friendship
