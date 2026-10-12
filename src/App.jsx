import { useState } from 'react';
import MangaAdd from './components/MangaAdd';
import MangaSearch from './components/MangaSearch';
import './css/App.css';

const startingManga = [
  {
    id: 'naruto-placeholder',
    title: 'Naruto',
    author: 'Masashi Kishimoto',
    image: '/img/naruto.jpg',
  },
];

function App() {
  const [manga, setManga] = useState(startingManga);

  const addManga = (title, author) => {
    setManga([
      ...manga,
      {
        id: crypto.randomUUID(),
        title: title,
        author: author,
      },
    ]);
  };

  const deleteManga = (id) => {
    const updatedManga = manga.filter((item) => item.id !== id);
    setManga(updatedManga);
  };

  return (
    <div className="app">
      <header className="top-bar">
        <p className="logo">Mangalist</p>
      </header>

      <main className="page-content">
        <aside className="profile">
          <div className="avatar">MR</div>
          <h1>Manga Reader</h1>

          <MangaAdd onAdd={addManga} />
        </aside>

        <section className="list-area">
          <div className="list-heading">
            <div>
              <p className="small-title">MANGA LIST</p>
              <h2>Reading</h2>
            </div>
            <p className="list-count">{manga.length} entries</p>
          </div>
          <MangaSearch manga={manga} onDelete={deleteManga} />
        </section>
      </main>
    </div>
  );
}

export default App;
