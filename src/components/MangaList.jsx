import MangaCard from './MangaCard';
import '../css/MangaList.css';

function MangaList({ manga, onDelete }) {
  if (manga.length === 0) {
    return <p>No manga to show.</p>;
  }

  return (
    <ul className="manga-list" aria-label="Manga list">
      {manga.map((item) => (
        <MangaCard key={item.id} manga={item} onDelete={onDelete} />
      ))}
    </ul>
  );
}

export default MangaList;
