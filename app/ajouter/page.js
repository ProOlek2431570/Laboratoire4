// app/ajouter/page.jsx
async function ajouterArticle(formData) {
    'use server'
    await fetch('http://localhost:3000/api/publications', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        titre: formData.get('titre'),
        auteur: formData.get('auteur'),
        contenu: formData.get('contenu'),
        datePublication: new Date().toISOString().split('T')[0],
      }),
    })
  }
  
  export default function AjouterPage() {
    return (
      <main className="container my-5">
        <h2>Ajouter un article</h2>
        <form action={ajouterArticle}>
          <div className="mb-3">
            <label className="form-label">Titre</label>
            <input name="titre" className="form-control" required />
          </div>
          <div className="mb-3">
            <label className="form-label">Auteur</label>
            <input name="auteur" className="form-control" required />
          </div>
          <div className="mb-3">
            <label className="form-label">Contenu</label>
            <textarea name="contenu" className="form-control" rows={5} required />
          </div>
          <button type="submit" className="btn btn-primary">Publier</button>
        </form>
      </main>
    )
  }