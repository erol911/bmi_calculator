"use client"

import { useState } from "react"
import InputForm from "./components/InputForm"
import CalculateButton from "./components/CalculateButton"
import DisplayResult from "./components/DisplayResult"

const BmiCalculator: React.FC = () => {
    const [height, setHeight] = useState(0)
    const [weight, setWeight] = useState(0)
    const [result, setResult] = useState(0)

    const calculate = () => {
        const heightInMeters = height / 100
        const bmi = weight / (heightInMeters * heightInMeters)
        setResult(bmi)
    }

    return (
        <div>
            <h1>BMI Calculator</h1>
            <InputForm label="Height (cm)" value={height} onChange={setHeight} />
            <InputForm label="Weight (kg)" value={weight} onChange={setWeight} />
            <CalculateButton onClick={calculate} />
            <DisplayResult result={result} />
        </div>
    )
}

export default BmiCalculator;