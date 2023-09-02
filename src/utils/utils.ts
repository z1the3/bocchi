import { useState } from "react"

export const useStepsArray = (preArr) => {
    const [arr, setArr] = useState(preArr)
    const [currentStep, setCurrentStep] = useState(0)


    const toNextSteps = (num = 1) => {
        setCurrentStep((currentStep) => (currentStep + num) % arr.length)


    }

    return {
        currentStep,
        toNextSteps
    }
}