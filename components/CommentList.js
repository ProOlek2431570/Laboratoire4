// components/CommentList.jsx
'use client'
import { useState, useEffect } from 'react'
import Comment from '../components/Comment'

export default function CommentList({ id }) {
  const [commentaires, setCommentaires] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/publications/${id}/commentaires`)
      .then(res => res.json())
      .then(data => {
        setCommentaires(data.commentaires || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) return <p>Chargement des commentaires...</p>;

  return (
    <div className="container my-4">
      <h4>Commentaires ({commentaires.length})</h4>
      {commentaires.length === 0
        ? <p className="text-muted">Aucun commentaire pour le moment.</p>
        : commentaires.map((c, index) => (
            <Comment
              key={index}
              auteur={c.auteur}
              contenu={c.contenu}
              date={c.date}
            />
          ))
      }
    </div>
  );
}