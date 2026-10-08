import '../css/MangaDelete.css';

function MangaDelete({ id, onDelete }) {
  return (
    <button className="manga-delete" onClick={() => onDelete(id)}>
      Delete
    </button>
  );
}

export default MangaDelete;
