import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";
import Book from "./Book";
import books from "./books";

const Tittle = () => {
  return <h1 className="tittle">Amazon Best Seller</h1>;
};

const BookList = () => {
  return (
    <>
      <Tittle />
      <section className="bookList">
        {books.map((book, index) => {
          return (
            <>
              <Book {...book} number={index} key={book.id} />
            </>
          );
        })}
      </section>
    </>
  );
};

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<BookList />);
