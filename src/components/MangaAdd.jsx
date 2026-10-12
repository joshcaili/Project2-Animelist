import { useState } from 'react';
import '../css/MangaAdd.css';

function MangaAdd({ onAdd }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onAdd(title, author);
    setTitle('');
    setAuthor('');
  };

  return (
    <div className="manga-add">
      <p className="small-title">QUICK ADD</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="manga-title">Title</label>
        <input
          id="manga-title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <label htmlFor="manga-author">Author</label>
        <input
          id="manga-author"
          value={author}
          onChange={(event) => setAuthor(event.target.value)}
        />
        <button type="submit">Add manga</button>
      </form>
    </div>
  );
}

export default MangaAdd;
