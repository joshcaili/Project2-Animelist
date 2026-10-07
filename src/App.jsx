import { useState } from 'react';
import MangaAdd from './components/MangaAdd';
import MangaList from './components/MangaList';

function App() {
  const [manga, setManga] = useState([]);

  const addManga = (title, author) => {
    const updatedManga = [
      ...manga,
      {
        id: crypto.randomUUID(),
        title,
        author,
      },
    ];
    setManga(updatedManga);
  };

  return (
    <div>
      <MangaAdd onAdd={addManga} />
      <MangaList manga={manga} />
    </div>
  );
}

export default App;
