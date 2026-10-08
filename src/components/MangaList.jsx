import MangaCard from './MangaCard';
import './MangaList.css';

function MangaList({ manga }) {
  const renderedManga = manga.map((item) => {
    return <MangaCard key={item.id} manga={item} />;
  });

  return <div className="manga-list">{renderedManga}</div>;
}

export default MangaList;
