import type { ChatProps } from "@customTypes/components"
import { STATE_COLORS } from "@lib/constants/securityPassword"

/**
 * Este componente es el que se encarga de mostrar la información de un chat
 * @param name Nombre del usuario
 * @param time Hora del último mensaje
 * @param message Último mensaje
 * @param numMessages Número de mensajes sin leer
 * @param state Estado del usuario
 * @returns component
 * @example
 * <Chat name="Juan" time="12:30" message="Mañana podemos hablarlo mejor" numMessages={2} state="online" />
 */
const Chat = ({ name, time, message, numMessages, state }: ChatProps) => {
    const stateStyle = "h-[.8rem] w-[.8rem] ml-3 rounded-full"
    const color = STATE_COLORS[state as keyof typeof STATE_COLORS]

    return (
        <>
            <div className="w-full mb-4 mx-auto flex items-center">
                <div className="w-2/12 p-2">
                    <div className="w-[3rem] h-[3rem] bg-secondary rounded-full"></div>
                </div>
                <div className="w-10/12 flex flex-col pl-1 pr-6">
                    <div className="w-full flex justify-between pb-2">
                        <div className="flex items-center">
                            <p>{name}</p>
                            <div className={`${stateStyle} bg-${color}`}></div>
                        </div>
                        <p className="text-secondary_text">{time}</p>
                    </div>
                    <div className="w-full flex justify-between items-center text-secondary_text">
                        <p className="w-[88%] truncate">{message}</p>
                        {numMessages ? (
                            <div className="h-[1.3rem] w-[1.3rem] flex items-center justify-center bg-light_purple rounded-full">
                                <p className="text-xs text-white">{numMessages}</p>
                            </div>
                        ) : null}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Chat
