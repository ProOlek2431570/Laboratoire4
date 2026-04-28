// components/BlogDetails.jsx
'use client'
import { useState, useEffect } from 'react'

export default function BlogDetails({ id }) {
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [erreur, setErreur] = useState(null);

  useEffect(() => {
    fetch(`/api/publications/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Article introuvable");
        return res.json();
      })
      .then((data) => {
        setArticle(data);
        setLoading(false);
      })
      .catch((err) => {
        setErreur(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return (
    <div className="text-center my-5">
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Chargement...</span>
      </div>
    </div>
  );

  if (erreur) return (
    <div className="alert alert-danger m-5">❌ Erreur : {erreur}</div>
  );

  if (!article) return null;

  return (
    <div className="container-fluid my-5" style={{ backgroundColor: "#EEEEEE" }}>
      <img
        className="col-12 mb-4"
        src={`https://picsum.photos/800/400?random=${id}`}
        alt="Blog Image"
        style={{ maxHeight: "150px", objectFit: "cover" }}
      />
      <h2 className="text-center mb-4">{article.titre}</h2>
      <div className="container">
        <p>{article.contenu}</p>
        <p className="mt-4 text-muted">
          {article.auteur} — {article.datePublication}
        </p>
      </div>
    </div>
  );
}