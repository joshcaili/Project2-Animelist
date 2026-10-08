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
      <div className="title">{manga.title}</div>
      <div className="author">{manga.author}</div>
      {hovered && (
        <div className="hoverActions">
          <MangaDelete id={manga.id} onDelete={onDelete} />
        </div>
      )}
    </div>
  );
}

export default MangaCard;
