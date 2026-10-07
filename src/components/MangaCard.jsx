import { useState } from 'react';

function MangaCard({ manga }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div>
        <div>{manga.title}</div>
        <div>{manga.author}</div>
      </div>
      {hovered && <button>Edit</button>}
    </div>
  );
}

export default MangaCard;
