import { useState } from 'react';
import MangaAdd from './components/MangaAdd';
import MangaList from './components/MangaList';
import './App.css';

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
    <div className="app">
      <h1>MangaList</h1>
      <div className="app-layout">
        <div className="app-layout-left">
          <MangaAdd onAdd={addManga} />
        </div>
        <div className="app-layout-right">
          <h2>MANGA</h2>
          <MangaList manga={manga} />
        </div>
      </div>
    </div>
  );
}

export default App;
