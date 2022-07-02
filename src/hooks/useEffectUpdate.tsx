import { useEffect, useRef } from "react"

export const useEffectUpdate = <T,>(cb: () => void, dependencies: T[]) => {
    const isMounting = useRef(true)

    useEffect(() => {

        if (isMounting.current) {
            isMounting.current = false
            return
        }

        cb()
    }, dependencies)

}
