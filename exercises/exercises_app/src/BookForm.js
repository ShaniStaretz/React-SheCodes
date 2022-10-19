import React, { useState, useEffect } from 'react';

function NewBookForm() {

    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    return (
        <div>
            <form>
                <input type="text" name="title" value={title} placeholder='book title' onChange={(e) => setTitle(e.target.value)} required />
                <input type="text" name="author" value={author} placeholder='book Author' onChange={(e) => setAuthor(e.target.value)} required />
            </form>
            <div> the title is "{title}" and the Author is "{author}"</div>
        </div>
    )
}

export default NewBookForm;