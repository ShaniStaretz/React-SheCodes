import React, { useState, useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { BookContext } from '../context/BookContext';

function NewBookForm() {
	const { isLightTheme, light, dark } = useContext(ThemeContext);
	const [ title, setTitle ] = useState('');
	const [ author, setAuthor ] = useState('');
	const theme = isLightTheme ? light : dark;
	return (
		<div className="book-list" style={{ color: theme.syntax, background: theme.bg }}>
			<span>Add new Book</span>
			<form>
				<input
					type="text"
					name="title"
					value={title}
					placeholder="book title"
					onChange={(e) => setTitle(e.target.value)}
					required
				/>
				<input
					type="text"
					name="author"
					value={author}
					placeholder="book Author"
					onChange={(e) => setAuthor(e.target.value)}
					required
				/>
			</form>
			<div>
				{' '}
				the title is "{title}" and the Author is "{author}"
			</div>
		</div>
	);
}

export default NewBookForm;
