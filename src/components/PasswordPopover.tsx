import { AiFillInfoCircle } from "react-icons/ai"
import { Tooltip, Button } from "@material-tailwind/react"

/**
 * E
 */
const PasswordPopover = () => {
    return (
        <div className="absolute top-[2rem] left-[102%]">
            <Tooltip
                content={
                    <div>
                        Para tener una contraseña segura te recomendamos: <br />
                        - Tener al menos 6 caracteres <br />
                        - Tener al menos una letra mayúscula <br />
                        - Tener al menos una letra minúscula <br />
                        - Tener al menos un número <br />
                        - Tener al menos un caracter especial <br />
                    </div>
                }
                animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0, y: 25 },
                }}
                placement="right"
                className="w-[20%] bg-secondary text-white p-4 rounded-xl shadow-lg"
            >
                <Button variant="gradient">
                    <AiFillInfoCircle className="text-secondary text-lg" />
                </Button>
            </Tooltip>
        </div>
    )
}

export default PasswordPopover
