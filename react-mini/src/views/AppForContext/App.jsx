import React from 'react'
import Container from './components/Container'
import { ThemeContext, useTheme } from './context'

const App = () => {
	return (
		<ThemeContext.Provider value={useTheme()}>
			<Container />
		</ThemeContext.Provider>
	)
}

export default App