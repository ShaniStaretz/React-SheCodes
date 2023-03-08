import React, { Component } from 'react';

import { AuthContext } from '../context/AuthContext';
import { ThemeContext } from '../context/ThemeContext';
class NavBar extends Component {
	render() {
		return (
			<AuthContext.Consumer>{(authContext) => (
			

					<ThemeContext.Consumer>{(themeContext) => {
							const { isLightTheme, dark, light } = themeContext;
							const theme = isLightTheme ? light : dark;
                            const { isAuthenticated, toggleAuth } = authContext;
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
						}}</ThemeContext.Consumer>
				 )}</AuthContext.Consumer>
		);
	}
}

export default NavBar;
