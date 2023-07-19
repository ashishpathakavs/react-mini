import React, { useContext } from 'react'
import { ThemeContext } from '../context'

const Container = () => {
	const { theme, toggleTheme } = useContext(ThemeContext)

	return (
		<div className={`flex flex-col items-start h-full p-6 capitalize ${theme === 'dark' ? 'bg-slate-700 text-gray-100' : ''
			}`}>
			<h2 className='text-xl font-bold mb-8'>{theme} Mode</h2>
			<p className='mb-2'>
				Context provides a way to pass data through the component tree without having to pass props down manually at every level.
				Context is designed to share data that can be considered “global” for a tree of React components,
				such as the current authenticated user, theme, or preferred language.
			</p>
			<p className='mb-2'>
				1: Initialize the context.
				2: Create the Provider (Pass the value)
				3: Consume the context
			</p>
			<button onClick={() => toggleTheme()} className={`mt-8 ${theme === 'dark' ? 'bg-gray-200 text-black' : ''}`}>
				Toggle Theme
			</button>
		</div>
	)
}

export default Container