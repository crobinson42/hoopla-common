import React from 'react';
import './Header.scss'
import './Footer.scss'

const app = () => {
	return (
		<div>
			<Header />

			<Footer />
		</div>
	)
};

export const Footer = () => {
	return (
		<div className="Footer">
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

export default app;