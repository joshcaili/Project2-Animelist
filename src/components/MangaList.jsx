import MangaCard from './MangaCard';

function MangaList({ manga }) {
  const renderedManga = manga.map((item) => {
    return <MangaCard key={item.id} manga={item} />;
  });

  return <div>{renderedManga}</div>;
}

export default MangaList;
