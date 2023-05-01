import { useContext } from "react"
import { RealTimeContext } from "@context/RealTimeProvider"

/**
 * @description Hook para obtener el contexto de tiempo real
 * @returns {function(): *}
 */
const useRealTimeContext = () => useContext(RealTimeContext)

export default useRealTimeContext
