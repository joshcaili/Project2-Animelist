import MangaCard from './MangaCard';
import '../css/MangaList.css';

function MangaList({ manga, onDelete }) {
  const renderedManga = manga.map((item) => {
    return (
      <MangaCard key={item.id} manga={item} onDelete={onDelete} />
    );
  });

  return <div className="manga-list">{renderedManga}</div>;
}

export default MangaList;
