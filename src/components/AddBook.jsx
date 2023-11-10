import React, { useState } from "react";

const AddBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [year_of_release, setYear_of_release] = useState("");
  const [genre, setGenre] = useState("");
  const [isbn, setIsbn] = useState("");
  const [quantity, setQuantity] = useState("");
  const [status, setStatus] = useState(false);
  return (
    <>
      <h1>Add Book</h1>

      <form onSubmit={handleSubmit} className="mt-5 card p-5 my-card">
        <div className="form-group-session">
          <input
            type="text"
            id="name"
            name="name"
            className="form-control"
            placeholder="Enter your name"
            value={full_name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
      </form>
    </>
  );
};

export default AddBook;
