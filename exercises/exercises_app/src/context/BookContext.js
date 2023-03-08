import React, { createContext, useState } from 'react';

export const BookContext = createContext();

const BookContextProvider = (props) => {
	const [ books, setBooks ] = useState([
		{ name: 'Name of the Wind', author: 'Patrick Rothfuss', id: 1 },
		{ name: 'The final empire', author: 'Brandon Sanderson', id: 2 }
	]);


	const removeBook = (bookId) => {
		
		setBooks(books.filter((book) => book.id !== bookId));
	};
	return <BookContext.Provider value={{ books,removeBook }}>{props.children}</BookContext.Provider>;
};

export default BookContextProvider;
