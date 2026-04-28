export default function Header() {
    return (
      <header className="container-fluid py-4" style={{ backgroundColor: "#222831" }}>
        <div className="container d-flex justify-content-between align-items-center">
  
          <div className="col-6 col-md-3">
            {/* Logo depuis public/ */}
            <img
              src="/CEPI-logo.png"
              alt="Logo"
              className="img-fluid border border-dark border-2 rounded"
              style={{ maxHeight: "100px" }}
            />
          </div>
  
          <div className="col-md-6 d-none d-md-block">
            <nav className="d-flex justify-content-around">
              {/* href="/" = page principale avec tous les articles */}
              <a href="/" className="text-white text-decoration-none fw-bold">Accueil</a>
              <a href="/" className="text-white text-decoration-none fw-bold">Articles</a>
              <a href="/ajouter" className="text-white text-decoration-none fw-bold">Ajouter</a>
              <a href="/" className="text-white text-decoration-none fw-bold">Contact</a>
            </nav>
          </div>
  
          <div className="header-actions">
            <div className="d-none d-md-block text-white fs-1">
              👤
            </div>
  
            <button
              className="navbar-toggler d-md-none text-white border-0"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#menuMobile"
            >
              <div style={{ fontSize: "2.5rem", lineHeight: "0.8" }}>
                <div>☰</div>
              </div>
            </button>
          </div>
        </div>
  
        <div className="collapse d-md-none" id="menuMobile">
          <div className="bg-secondary p-3 mt-2">
            <nav className="nav flex-column text-center">
              <a className="nav-link text-white fw-bold border-bottom" href="/">Accueil</a>
              <a className="nav-link text-white fw-bold border-bottom" href="/">Articles</a>
              <a className="nav-link text-white fw-bold border-bottom" href="/ajouter">Ajouter</a>
              <a className="nav-link text-white fw-bold border-bottom" href="/">Contact</a>
            </nav>
          </div>
        </div>
      </header>
    );
  }