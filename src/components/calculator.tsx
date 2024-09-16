'use client'
import React, { useState } from "react"
const Calculator: React.FC = () => {
    const [expression, setExpression] = useState('')
    const handleButtonClick = (value: string) => {
        setExpression((prevExpression) => prevExpression + value)
    }
    const handleCalculator = () => {
        try {
            setExpression(eval(expression))
        } catch (error) {
            setExpression('error')
        }
    }
    const handleClear = () => {
        setExpression('')
    }
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-96 items-center bg-green-200 rounded-lg shadow-lg p-6">
                <input type="text"
                    className="w-full mb-4 p-2 text-xl text-right bg-white rounded-lg"
                    value={expression}
                    readOnly
                />
                <div className="flex justify-center items-center gap-4 mb-4">
                    {
                        ['7', '8', '9', '/'].map((value, index) => (
                            <button
                                key={index}
                                className="p-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-2xl"
                                onClick={() => handleButtonClick(value)}
                            >
                                {value}
                            </button>
                        ))
                    }
                </div>

                <div className="flex justify-center items-center gap-4 mb-4">
                    {
                        ['4', '5', '6', '*'].map((value, index) => (
                            <button
                                key={index}
                                className="p-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-2xl"
                                onClick={() => handleButtonClick(value)}
                            >
                                {value}
                            </button>
                        ))
                    }
                </div>

                <div className="flex justify-center items-center gap-4 mb-4">
                    {
                        ['1', '2', '3', '-'].map((value, index) => (
                            <button
                                key={index}
                                className="p-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-2xl"
                                onClick={() => handleButtonClick(value)}
                            >
                                {value}
                            </button>
                        ))
                    }
                </div>

                <div className="flex justify-center items-center gap-4 mb-4">
                    {
                        ['0', '.', '=', '+'].map((value, index) => (
                            <button
                                key={index}
                                className="p-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-2xl"
                                onClick={() => value === '=' ? handleCalculator() : handleButtonClick(value)}
                            >
                                {value}
                            </button>
                        ))
                    }
                </div>
                <button
                    className="mt-4 w-full bg-red-500 text-white rounded-lg hover:bg-red-600"
                    onClick={handleClear}
                >
                    A/C
                </button>
            </div>

        </div>
    )
}

export default Calculator