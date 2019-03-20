import React from "react";

const ChangeShelf = (props) => {
  return (

    <div className="book-shelf-changer">

      <select defaultValue={props.book.shelf || "none"}
        onChange={e => props.onUpdateShelf(props.book, e.target.value)} >
        <option disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
        ))}
      </select>

    </div>
  );
};

export default ChangeShelf;
