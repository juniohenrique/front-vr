describe('The Home Page', () => {
  context('720p resolution', () => {
    beforeEach(() => {
      // Teste realizado na resolução 1280x720
      cy.viewport(1280, 720)
    })
    it('Mapa visivel somente após o click', () => {
      cy.visit('/') 
      cy.clickLink('Pra Você')
      cy.clickLink('Onde usar meu cartão VR?')
      cy.get('.vr-container__mapa').should('be.visible')
    })
  })
})