import React from 'react'
import NormalContainer from './components/NormalContainer'
import OptimizedContainer from "./components/OptimizedContainer"

const App = () => {
    return (
        <div className='AppForPerformance'>
            <OptimizedContainer />
            <div className='mt-24'>
				<NormalContainer />
			</div>
        </div>
    )
}

export default App