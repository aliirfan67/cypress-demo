describe('template spec', () => {
  it('passes', () => {
      cy.visit('https://example.cypress.io').then(() => {
          cy.log('Test');
      })
  })
})