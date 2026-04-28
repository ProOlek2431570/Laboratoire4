// components/BlogCard.jsx
export default function BlogCard({ id, titre, description, datePublication, auteur }) {
    return (
      <div className="card h-100 shadow-sm">
        <img
          src={`https://picsum.photos/400/200?random=${id}`}
          alt={titre}
          className="card-img-top"
          style={{ height: "200px", objectFit: "cover" }}
        />
        <div className="card-body">
          <h5 className="card-title fw-bold">{titre}</h5>
          <p className="card-text text-muted">{description}</p>
        </div>
        <div className="card-footer">
        <div className="card-footer d-flex justify-content-between align-items-center">
  <small className="text-muted">
    📅 {datePublication} — ✍️ {auteur}
  </small>

  <a
    href={`/blog/${id}`}
    className="btn btn-primary btn-sm"
  >
    Lire la suite
  </a>
</div>
</div>
      </div>
    );
  }