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
        <label>Title</label>
        <input value={title} onChange={(event) => setTitle(event.target.value)} />
        <label>Author</label>
        <input value={author} onChange={(event) => setAuthor(event.target.value)} />
        <button>Add manga</button>
      </form>
    </div>
  );
}

export default MangaAdd;
