import '../css/MangaDelete.css';

function MangaDelete({ id, onDelete }) {
  return (
    <button className="manga-delete" onClick={() => onDelete(id)}>
      x
    </button>
);
}

export default MangaDelete;
