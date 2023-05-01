import { useRef } from "react"

/**
 * Hook para controlar el scroll del chat
 * @returns {function(): *}
 */
const useChatScroll = () => {
    const ref = useRef<HTMLDivElement>(null)
    const handleScroll = () => {
        if (ref.current) {
            const { scrollHeight, scrollTop, clientHeight } = ref.current
            const scrollBottom = scrollHeight - scrollTop - clientHeight

            if (scrollBottom > 0) {
                ref.current.scrollTo(0, scrollHeight)
            }
        }
    }

    return { ref, handleScroll }
}

export default useChatScroll
