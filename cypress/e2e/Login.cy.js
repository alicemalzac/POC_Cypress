describe('Login Functionality', () => {
  it('should allow a standard user to login successfully', () => {
    cy.login('standard_user', 'secret_sauce');
    cy.url().should('include', '/inventory.html');
    cy.get('.title').should('have.text', 'Products');
  });

  it('should display an error for invalid credentials', () => {
    cy.login('invalid_user', 'wrong_password');
    cy.get('[data-test="error"]').should('be.visible');
    cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username and password do not match any user in this service');
  });
});