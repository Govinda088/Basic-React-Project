const Book = ({ img, title, author, number }) => {
  return (
    <article className="book">
      <img src={img} alt={author} />
      <h2>{title}</h2>
      <h2>{author}</h2>
      <span className="number">#{number + 1}</span>
    </article>
  );
};

export default Book;
