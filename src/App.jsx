import { useState } from 'react';
import MangaAdd from './components/MangaAdd';
import MangaSearch from './components/MangaSearch';
import './css/App.css';

function App() {
  const [manga, setManga] = useState([]);

  const addManga = (title, author) => {
    setManga((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        title,
        author,
      },
    ]);
  };

  const deleteManga = (id) => {
    setManga((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="app">
      <h1>MangaList</h1>
      <div className="app-layout">
        <div className="app-layout-left">
          <MangaAdd onAdd={addManga} />
        </div>
        <div className="app-layout-right">
          <h2>MANGA</h2>
          <MangaSearch manga={manga} onDelete={deleteManga} />
        </div>
      </div>
    </div>
  );
}

export default App;
