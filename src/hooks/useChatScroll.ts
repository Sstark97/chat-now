import { useRef, useState, useEffect } from "react"

/**
 * Hook para controlar el scroll del chat
 * @returns {function(): *}
 */
const useChatScroll = () => {
    const ref = useRef<HTMLDivElement>(null)
    const [isInBottom, setIsInBottom] = useState(false)
    const { scrollTop } = ref.current || {}

    useEffect(() => {
        if (ref.current) {
            const { scrollHeight, scrollTop, clientHeight } = ref.current
            const scrollBottom = scrollHeight - scrollTop - clientHeight

            setIsInBottom(scrollBottom < 2)
        }
    }, [scrollTop])

    const handleScroll = () => {
        if (ref.current) {
            const { scrollHeight, scrollTop, clientHeight } = ref.current
            const scrollBottom = scrollHeight - scrollTop - clientHeight

            if (scrollBottom > 0) {
                ref.current.scrollTo(0, scrollHeight)
                setIsInBottom(true)
            } else {
                setIsInBottom(false)
            }
        }
    }

    return { ref, handleScroll, isInBottom }
}

export default useChatScroll
