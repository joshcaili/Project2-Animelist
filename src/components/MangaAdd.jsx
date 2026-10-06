import { useState } from 'react';

function MangaAdd({ onAdd }) {
  const [title, setTitle] = useState('');

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onAdd(title);
    setTitle('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input value={title} onChange={handleChange} />
        <button>Add Manga</button>
      </form>
    </div>
  );
}

export default MangaAdd;
