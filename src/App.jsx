import { useState } from 'react';
import MangaAdd from './components/MangaAdd';

function App() {
  const [manga, setManga] = useState([]);

  const addManga = (title) => {
    const updatedManga = [
      ...manga,
      {
        id: crypto.randomUUID(),
        title,
      },
    ];
    setManga(updatedManga);
  };

  return (
    <div>
      {manga.length}
      <MangaAdd onAdd={addManga} />
    </div>
  );
}

export default App;
