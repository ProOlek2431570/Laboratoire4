// components/AddComment.jsx
'use client'
import { useState } from 'react'

export default function AddComment({ id }) {
  const [auteur, setAuteur] = useState('');
  const [contenu, setContenu] = useState('');
  const [succes, setSucces] = useState(false);

  const envoyerCommentaire = async (e) => {
    e.preventDefault();
    await fetch(`/api/publications/${id}/commentaires`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ auteur, contenu, date: new Date().toISOString().split('T')[0] }),
    });
    setAuteur('');
    setContenu('');
    setSucces(true);
    setTimeout(() => setSucces(false), 3000);
  };

  return (
    <div className="container my-4">
      <h4>Ajouter un commentaire</h4>
      {succes && <div className="alert alert-success">✅ Commentaire ajouté !</div>}
      <form onSubmit={envoyerCommentaire}>
        <div className="mb-3">
          <label className="form-label">Nom</label>
          <input
            className="form-control"
            value={auteur}
            onChange={(e) => setAuteur(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Commentaire</label>
          <textarea
            className="form-control"
            rows={3}
            value={contenu}
            onChange={(e) => setContenu(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Envoyer</button>
      </form>
    </div>
  );
}