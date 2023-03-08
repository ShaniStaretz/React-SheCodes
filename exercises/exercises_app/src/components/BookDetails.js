import React, { Component, useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { BookContext } from '../context/BookContext';

const BookDetails = (props) => {
	const { isLightTheme, light, dark } = useContext(ThemeContext);
	const theme = isLightTheme ? light : dark;
	const { removeBook } = useContext(BookContext);

	const handleOnClick = (id) => {
		removeBook(id);
	};
	return (
		<div onClick={() => handleOnClick(props.book.id)}>
			<ul className="book-details">
				<span>Name:</span>
				<li style={{ background: theme.ui }}>{props.book.name}</li>
				Author: <li style={{ background: theme.ui }}>{props.book.author}</li>
			</ul>
		</div>
	);
};

export default BookDetails;
