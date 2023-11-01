describe('User can login to system', () => {
  //positive test case
  it('user can login with valid username and password', () => {
    //arrange
    cy.visit('http://127.0.0.1:8000/');
    //act
    cy.get(':nth-child(2) > .form-control').type('superadmin@gmail.com');
    cy.get(':nth-child(3) > .form-control').type('password');
    cy.get('.btn').click();
    //asssert
    cy.get('.nav-link > .d-sm-none').should('have.text', 'Hi, SuperAdmin');
  });

  //negative test case
  it('user can not login with valid username and wrong password', () => {
    //arrange
    cy.visit('http://127.0.0.1:8000/');
    //act
    cy.get(':nth-child(2) > .form-control').type('superadmin@gmail.com');
    cy.get(':nth-child(3) > .form-control').type('password-salah');
    cy.get('.btn').click();
    //asssert
    cy.get('.invalid-feedback').should('have.text', 'These credentials do not match our records.');
  });

  it('user can not login with invalid username and valid password', () => {
    //arrange
    cy.visit('http://127.0.0.1:8000/');
    //act
    cy.get(':nth-child(2) > .form-control').type('superadminadasda@gmail.com');
    cy.get(':nth-child(3) > .form-control').type('password');
    cy.get('.btn').click();
    //asssert
    cy.get('.invalid-feedback').should('have.text', 'These credentials do not match our records.');
  });

  it('user can not login with empty username and correct password', () => {
    //arrange
    cy.visit('http://127.0.0.1:8000/');
    //act
    cy.get(':nth-child(3) > .form-control').type('password');
    cy.get('.btn').click();
    //asssert
    cy.get('.invalid-feedback').should('have.text', 'The email field is required.');
  });

  it('user can not login with correct username and empty password', () => {
    //arrange
    cy.visit('http://127.0.0.1:8000/');
    //act
    cy.get(':nth-child(2) > .form-control').type('superadmin@gmail.com');    
    cy.get('.btn').click();
    //asssert
    cy.get('.invalid-feedback').should('have.text', 'The password field is required.');
  });

  //Quiz
  it('user can not login with invalid username and invalid password', () => {
    //arrange
    cy.visit('http://127.0.0.1:8000/');
    //act
    cy.get(':nth-child(2) > .form-control').type('superadminadasda@gmail.com');
    cy.get(':nth-child(3) > .form-control').type('password-salah');
    cy.get('.btn').click();
    //asssert
    cy.get('.invalid-feedback').should('have.text', 'These credentials do not match our records.');
  });

  it('user can not login with empty username and empty password', () => {
    //arrange
    cy.visit('http://127.0.0.1:8000/');
    //act   
    cy.get('.btn').click();
    //asssert
    cy.get(':nth-child(2) > .invalid-feedback').should('have.text', 'The email field is required.');
    cy.get(':nth-child(3) > .invalid-feedback').should('have.text', 'The password field is required.');
  });

  it('user can not login with incorrect username and empty password', () => {
    //arrange
    cy.visit('http://127.0.0.1:8000/');
    //act
    cy.get(':nth-child(2) > .form-control').type('superadminadasda@gmail.com');    
    cy.get('.btn').click();
    //asssert
    cy.get('.invalid-feedback').should('have.text', 'The password field is required.');
  });

  it('user can not login with empty username and incorrect password', () => {
    //arrange
    cy.visit('http://127.0.0.1:8000/');
    //act
    cy.get(':nth-child(3) > .form-control').type('password-salah');
    cy.get('.btn').click();
    //asssert
    cy.get(':nth-child(2) > .invalid-feedback').should('have.text', 'The email field is required.');
  });

  //LOGOUT
  it.only('user can login with valid username and password', () => {
    //arrange    
    cy.visit('http://127.0.0.1:8000/');
    // cy.get('[data-id="email"]').type('superadmin@gmail.com');
    // cy.get('[data-id="password"]').type('password');
    // cy.get('[data-id="submit"]').click();
    // cy.get('[data-id="username"]').click();
    // cy.get('[data-id="logout-btn"]').click();   
    /* ==== Generated with Cypress Studio ==== */
    cy.get(':nth-child(2) > .form-control').type('superadmin@gmail.com');
    cy.get(':nth-child(3) > .form-control').type('password');
    cy.get('.btn').click();
    cy.get('.navbar-right > :nth-child(2) > .nav-link').click();
    cy.get('.text-danger').click();
    /* ==== End Cypress Studio ==== */
  });
})