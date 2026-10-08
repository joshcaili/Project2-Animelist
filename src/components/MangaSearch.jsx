import { useState } from 'react';
import MangaList from './MangaList';
import '../css/MangaSearch.css';

function MangaSearch({ manga, onDelete }) {
  const [query, setQuery] = useState('');

  const visibleManga = manga.filter(
    (item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.author.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="manga-search">
      {manga.length > 0 && (
        <input
          type="search"
          placeholder="Search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      )}
      <MangaList manga={visibleManga} onDelete={onDelete} />
    </div>
  );
}

export default MangaSearch;
