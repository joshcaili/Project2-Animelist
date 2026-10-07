import { useState } from 'react';

function MangaAdd({ onAdd }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleAuthorChange = (event) => {
    setAuthor(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onAdd(title, author);
    setTitle('');
    setAuthor('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input value={title} onChange={handleTitleChange} />
        <label>Author</label>
        <input value={author} onChange={handleAuthorChange} />
        <button>Add Manga</button>
      </form>
    </div>
  );
}

export default MangaAdd;
