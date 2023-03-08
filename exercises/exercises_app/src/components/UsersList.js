import React, { Component, useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { UserContext } from '../context/UserContext';

// class BookList extends Component {
//   static contextType = ThemeContext;
//   render() {
//     const { isLightTheme, light, dark } = this.context;
//     const theme = isLightTheme ? light : dark;
//     return (
//       <div className="book-list" style={{ color: theme.syntax, background: theme.bg }}>
//         <ul>
//           <li style={{ background: theme.ui }}>shani Staretz</li>
//           <li style={{ background: theme.ui }}>David B</li>
//           <li style={{ background: theme.ui }}>Moshe N</li>
//         </ul>
//       </div>
//     );
//   }
// }

const UsersList = () => {
	const { isLightTheme, light, dark } = useContext(ThemeContext);
	const {users}  = useContext(UserContext);
	const theme = isLightTheme ? light : dark;
	return (
		<div className="book-list" style={{ color: theme.syntax, background: theme.bg }}>
			<ul>
				{users.map((user) => {
					return (
						<li key={user.id} style={{ background: theme.ui }}>
							{user.displayName}
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default UsersList;
