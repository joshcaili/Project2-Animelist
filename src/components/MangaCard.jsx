import { useState } from 'react';
import MangaDelete from './MangaDelete';
import '../css/MangaCard.css';

function MangaCard({ manga, onDelete }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="manga-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="cover">
        <p>{manga.title}</p>
      </div>
      <div className="manga-info">
        <h3>{manga.title}</h3>
        <p>{manga.author}</p>
        <p className="progress">Reading</p>
      </div>
      {hovered && <MangaDelete id={manga.id} onDelete={onDelete} />}
    </div>
  );
}

export default MangaCard;
