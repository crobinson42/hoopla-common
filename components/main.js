import React from 'react';
import './Header.scss'
import './Footer.scss'
import './Button.scss'

export default () => {
	return (
		<div>
			<Header onClick={() => alert('You clicked on the header!')} />

			<Footer/>
		</div>
	)
}

export const Footer = () => {
	const _handleMouseEnter = (e) => {
		e.target.classList.add('bang')
	}

	const _handleMouseLeave = (e) => {
		e.target.classList.remove('bang')
	}

	return (
		<div className="Footer" onMouseEnter={_handleMouseEnter} onMouseLeave={_handleMouseLeave}>
			This is the footer...
		</div>
	)
}

export const Header = () => {
	return (
		<div className="Header">
			This is the Header!
		</div>
	)
}

export const Button = () => {
	return (
		<button className="Button">
			Click
		</button>
	)
}