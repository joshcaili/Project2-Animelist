import '../css/MangaDelete.css';

function MangaDelete({ id, title, onDelete }) {
  return (
    <button
      className="manga-delete"
      type="button"
      aria-label={`Delete ${title}`}
      onClick={() => onDelete(id)}
    >
      ×
    </button>
  );
}

export default MangaDelete;
