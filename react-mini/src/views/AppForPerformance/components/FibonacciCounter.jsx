import React, { memo } from 'react'

const FibonacciCounter = ({
	fibCounter,
	setFibCounter,
	fibValue,
	headingColor = 'text-orange-700',
}) => {
	const handleFibIncrement = () => {
		setFibCounter((prev) => prev + 5)
	}

	const handleFibDecrement = () => {
		setFibCounter((prev) => prev - 5)
	}

	return (
		<div className='fib-counter text-center'>
			<h2 className={headingColor}>Fibonacci of {fibCounter}</h2>
			<p>{fibValue}</p>
			<button className='mx-auto my-3' onClick={handleFibIncrement}>
				Increment by 5
			</button>
			<button className='mx-auto my-3' onClick={handleFibDecrement}>
				Decrement by 5
			</button>
		</div>
	)
}

export default FibonacciCounter
