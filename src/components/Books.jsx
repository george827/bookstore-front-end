import React, { useEffect, useState } from 'react';
// const [books, setBooks] = useState([]);

const Books = () => {
    // const getBooks = () => {
    //     fetch('http://127.0.0.1:3000/api/v1/books', {
    //         method: 'GET',
    //         headers: { 'Content-Type': 'application/json' },
    //     })
    //         .then((response) => {
    //             if (!response.ok) {
    //                 const error = new Error(response.status);
    //                 throw error;
    //             } else {
    //                 return response.json();
    //             }
    //         })
    //         .then((data) => {
    //             console.log(data);
    //             setBooks(data);
    //         })
    //         .catch((error) => {
    //             throw new Error(error);
    //         });
    // }

    // useEffect(() => {
    //     getBooks();
    // }, []);


    return (
        <>
        <p>My Books</p>
        {/* <ul>
            {books.map((book) => (
                <>
                <li key={book.id}>{book.title}</li>
                <li key={book.id}>{book.author}</li>
                <li key={book.id}>{book.year_of_release}</li>
                <li key={book.id}>{book.genre}</li>
                <li key={book.id}>{book.lsbn}</li>
                <li key={book.id}>{book.quantity}</li>
                </>
            ))}
        </ul> */}

        </>
    )
}

export default Books;