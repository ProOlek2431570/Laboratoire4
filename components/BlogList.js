// components/BlogList.jsx
'use client'
import { useState, useEffect } from 'react'
import BlogCard from '../components/BlogCard'
import { sauvegarderPublication, obtenirPublications } from '../lib/db'

export default function BlogList() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erreur, setErreur] = useState(null);

  useEffect(() => {
    fetch("/api/publications")
      .then((res) => {
        if (!res.ok) throw new Error("Erreur lors du chargement");
        return res.json();
      })
      .then(async (data) => {
        // Sauvegarder dans IndexedDB
        for (const pub of data.publications) {
          await sauvegarderPublication(pub);
        }
        setArticles(data.publications);
        setLoading(false);
      })
      .catch(async () => {
        // Si pas de réseau → lire depuis IndexedDB
        const pubsLocales = await obtenirPublications();
        setArticles(pubsLocales);
        setLoading(false);
      });
  }, []);

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

  return (
    <main className="container my-5">
      <h2 className="mb-4">Articles récents</h2>
      <div className="row g-4">
        {articles.map((article) => (
          <div className="col-12 col-md-4" key={article.id}>
            <BlogCard
              id={article.id}
              titre={article.titre}
              description={article.contenu}
              datePublication={article.datePublication}
              auteur={article.auteur}
            />
          </div>
        ))}
      </div>
    </main>
  );
}