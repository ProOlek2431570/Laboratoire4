// components/Comment.jsx
export default function Comment({ auteur, contenu, date }) {
    return (
      <div className="card mb-3">
        <div className="card-body">
          <h6 className="card-subtitle mb-2 text-muted">
            ✍️ {auteur} — 📅 {date}
          </h6>
          <p className="card-text">{contenu}</p>
        </div>
      </div>
    );
  }