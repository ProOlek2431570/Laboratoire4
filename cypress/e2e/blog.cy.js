describe('BlogList', () => {
    it('affiche la liste des articles', () => {
      cy.visit('http://localhost:3000')
      cy.get('.card').should('have.length.greaterThan', 0)
    })
  })
  
  describe('BlogCard', () => {
    it('affiche un bouton Lire la suite', () => {
      cy.visit('http://localhost:3000')
      cy.get('.btn-primary').first().should('contain', 'Lire la suite')
    })
  })
  
  describe('BlogDetails', () => {
    it('affiche les détails d\'un article', () => {
      cy.visit('http://localhost:3000/blog/1')
      cy.get('h2').should('exist')
    })
  })
  
  describe('CommentList', () => {
    it('affiche la section commentaires', () => {
      cy.visit('http://localhost:3000/blog/1')
      cy.get('h4').contains('Commentaires').should('exist')
    })
  })
  
  describe('AddComment', () => {
    it('peut soumettre un commentaire', () => {
      cy.visit('http://localhost:3000/blog/1')
      cy.get('input').last().type('Test auteur')
      cy.get('textarea').last().type('Test commentaire')
      cy.get('button[type="submit"]').click()
      cy.get('.alert-success').should('exist')
    })
  })
  
  describe('AjouterPage', () => {
    it('affiche le formulaire d\'ajout', () => {
      cy.visit('http://localhost:3000/ajouter')
      cy.get('input[name="titre"]').should('exist')
      cy.get('input[name="auteur"]').should('exist')
      cy.get('textarea[name="contenu"]').should('exist')
    })
  })