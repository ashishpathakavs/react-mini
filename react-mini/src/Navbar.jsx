import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
	return (
			<nav className='bg-gray-800 py-6 text-gray-400'>
				<div className='max-w-[84rem] flex mx-auto items-center px-4'>
					<Link
						to='/mini-apps/'
						className='navbrand text-gray-200 font-mono'
					>
						Mini React Apps
					</Link>

					<ul className='nav-items flex flex-shrink ml-auto gap-8'>
						<li>
							<NavLink to='/mini-apps/Redux'>Redux</NavLink>
						</li>
						<li>
							<NavLink to='/mini-apps/context'>Context</NavLink>
						</li>
						<li>
							<NavLink to='/mini-apps/suspense'>Suspense</NavLink>
						</li>
						<li>
							<NavLink to='/mini-apps/performance'>Performance</NavLink>
						</li>
						<li>
							<NavLink to='/mini-apps/Testing'>Testing</NavLink>
						</li>
					</ul>
				</div>
			</nav>
	)
}

export default Navbar