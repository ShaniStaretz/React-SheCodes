import React, { Component, useContext } from 'react';

import { AuthContext } from '../context/AuthContext';
import { ThemeContext } from '../context/ThemeContext';

const NavBarHook = () => {
	const { isLightTheme, dark, light } = useContext(ThemeContext);
	const { isAuthenticated, toggleAuth } = useContext(AuthContext);
	const theme = isLightTheme ? light : dark;

	return (
		<nav style={{ background: theme.bg, color: theme.textColor }}>
			<h1>Context App</h1>
			<div onClick={toggleAuth}>{isAuthenticated ? 'Logged in' : 'Logged out'}</div>

			<ul>
				<li style={{ background: theme.ui }}>Home</li>
				<li style={{ background: theme.ui }}>About</li>
				<li style={{ background: theme.ui }}>Contact</li>
			</ul>
		</nav>
	);
};
export default NavBarHook;
