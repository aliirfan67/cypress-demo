describe('template spec', () => {

  // beforeEach(() => {                   
  //   cy.session('mySession', () => {     
  //     cy.visit('https://example.cypress.io')
  //   })
  // }) 

  it('passes', () => {
    cy.visit('https://www.fedex.com/en-us/tracking.html');
    // cy.get('body > div.banner > div > h1').should('have.text','Kitchen Sink')
    // cy.get('body > div:nth-child(4) > div > div > ul > li:nth-child(1) > ul > li:nth-child(3) > a').click();
   // cy.get('body > div.banner > div > h1').should('have.text','Sink')

  });

  // it('valdiate headers',()=>{
  //   
  // })
})