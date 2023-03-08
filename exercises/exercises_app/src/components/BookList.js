import React, { Component, useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { BookContext } from '../context/BookContext';
import BookDetails from './BookDetails';

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

const BookList = () => {
	const { isLightTheme, light, dark } = useContext(ThemeContext);
	 const {books}=useContext(BookContext)
	const theme = isLightTheme ? light : dark;
	return (
		<div>
		<div className="book-list" style={{ color: theme.syntax, background: theme.bg }}>
			<h1>List:</h1>
			
				{books.map((book,index) => {
					
					return (
						<div key={index} >
						<BookDetails  book={book} />
						{(index<books.length-1)&&<hr className="rounded"/>}
						</div>
					);
				})}
			
		</div>
		</div>
	);
};

export default BookList;
