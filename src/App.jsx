import { useState } from 'react';
import MangaAdd from './components/MangaAdd';

function App() {
  const [manga, setManga] = useState([]);

  const addManga = (title) => {
    console.log('Add manga called:', title);
  };

  return (
    <div>
      <MangaAdd onCreate={addManga} />
    </div>
  );
}
export default App;
