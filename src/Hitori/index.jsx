import { useEffect, useMemo, useRef } from "react"
import "./index.css"
import { useStepsArray } from "../utils/utils"
import { useCreatePosition } from "../base/useCreatePosition"
export const Hitori = () => {
    const metronomeSrcArr = [
        "/hitori_daimao1.png",
        "/hitori_daimao2.png"
    ]
    const { currentStep, toNextSteps } = useStepsArray(metronomeSrcArr)
    const timer = useRef()
    useEffect(() => {
        if (!timer.current) {
            timer.current = setInterval(() => {
                toNextSteps()
            }, 320)
        }
    }, [])

    const currentSrc = useMemo(() => {
        return metronomeSrcArr[currentStep]
    }, [currentStep, metronomeSrcArr])


    const { getStyle, addClass, handleMouseMove, handleClick, handleDrag, handleMouseLeave } = useCreatePosition({ x: 0, y: 0, z: 0, width: 480, height: 280 })

    return <>
        <img src={currentSrc}
            onMouseMove={handleMouseMove}
            onClick={handleClick}
            onMouseLeave={handleMouseLeave}
            onDrag={handleDrag}
            style={getStyle} className={[!addClass.length ? "hitori_body-breath" : "", ...addClass].join(" ")} alt="" />
        {/* <div
            style={{ ...getStyle, "background": "red" }}></div> */}
    </>
}