import { useState, useMemo } from "react"

// init x y z
export const useCreatePosition = (init) => {
    const [currentPos, setCurrentPos] = useState({
        ...init,
        widthStart: init.x + init.width / 2,
        widthEnd: init.x + init.width,
        heightStart: init.y + init.height / 2,
        heightEnd: init.y + init.height
    })
    const [addClass, setAddClass] = useState([])
    const objToStyle = (currentPos) => {
        return {
            position: 'absolute',
            top: currentPos.y,
            left: currentPos.x,
            width: currentPos.width,
            height: currentPos.height,
        }
    }
    const changePos = (pos) => {
        setCurrentPos(pos)
    }


    const getStyle = useMemo(() => {
        return objToStyle(currentPos)
    }, [currentPos])

    const handleDrag = (e) => {

    }
    const [mouseInPos, setMouseInPos] = useState(false)
    const [toggle, setToggle] = useState(false)

    const handleMouseLeave = (e) => {
        if (mouseInPos) setMouseInPos(false)
    }
    const handleMouseMove = (e) => {
        if (!mouseInPos) {
            setMouseInPos(true)
        }
        if (toggle) {
            setCurrentPos((currentPos) => {
                return {
                    ...currentPos,
                    y: e.clientY - currentPos.height / 2,
                    x: e.clientX - currentPos.width / 2
                }
            })
        }
    }



    const handleClick = (e) => {
        if (mouseInPos) {
            setToggle((toggle) => !toggle)
            setAddClass(() => toggle ? [] : ["scale1_2__1"])

        }
    }
    return {
        getStyle,
        addClass,
        changePos,
        handleMouseMove,
        handleClick,
        handleDrag,
        handleMouseLeave
    }
}