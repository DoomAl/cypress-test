describe("Happy flow", () => {
    it("Happy flow accessing through e-commerce activity", () => {
      cy.visit("/");

      cy.get('[name="activities"]').first().check();
      cy.get('[type="submit"]').click();

      cy.get('[name="inventory"]').type('10000');
      cy.get('[type="submit"]').click();

      cy.url().then(($url) => {expect($url).to.contains('/checkout')})
    });

    it("No activity selected -  Error message is displayed", () => {
        cy.visit('(/');

        cy.get('[type="submit"]').click();

        cy.get('error-message').should('be.visible').should('have.value', 'No activity can lead to health problems')
    })

    it('Happy flow accessing through IT activity');
    it('One e-commerce activity selected and sumInsured is bigger than 10.000.000 - Error message is displayed');
    it('One e-commerce activity selected and sumInsured is lower than 1000 - Error message is displayed');
    it('One IT activity selected and sumInsured is bigger than 10.000.000 - Error message is displayed');
    it('One IT activity selected and sumInsured is lower than 1000 - Error message is displayed');
    it('More than 4 activities have been selected - redirect to High care');
    it('E-commerce activities selected and sumInsured is bigger than 2.000.000 - redirect to High Care');
    it('IT activities selected and sumInsured is bigger than 500.000 - redirect to High Care');
});
  
