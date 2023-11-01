describe('User Can Edit Existing Data', () => {
  //after each test case
  afterEach(() => {
    cy.exec('cd ../demo-app-cypress-automation && php artisan migrate:fresh --seed');
  });
  //before each test case
  beforeEach(() => {
    //reset database using cypress comand
    cy.exec('cd ../demo-app-cypress-automation && php artisan migrate:fresh --seed');
    //arrange
    cy.visit('http://localhost:8000/')
    //act
    cy.get(':nth-child(2) > .form-control').type('superadmin@gmail.com');
    cy.get(':nth-child(3) > .form-control').type('password');
    cy.get('.btn').click();
    cy.visit('http://localhost:8000/user-management/user');
  });
  //positive test case
  it('User can edit existing data', () => {
    cy.get('.table td')
      .contains('user')
      .parent()
      .find('a')
      .contains('Edit')
      .click();
    cy.get('#name').clear('user');
    cy.get('#name').type('user edited');
    cy.get('.btn-primary').contains('Submit').click();
    cy.get('.table td').contains('user').should('have.text', 'user edited');
    cy.get('.alert')
      .should('be.visible')
      .and('have.class', 'alert-success')
      .and('contain', 'User Berhasil Diupdate');
  })

  //Soal UTS (Mengedit data user baru dan Mengedit data User)
  //Mengedit data user baru
  it('User can edit existing data (User baru)', () => {
    cy.get('.table td')
      .contains('user baru')
      .parent()
      .find('a')
      .contains('Edit')
      .click();
    cy.get('#name').clear('user baru');
    cy.get('#name').type('user nikken');
    cy.get('.btn-primary').contains('Submit').click();
    cy.get('.table td').contains('user nikken').should('have.text', 'user nikken');
    cy.get('.alert')
      .should('be.visible')
      .and('have.class', 'alert-success')
      .and('contain', 'User Berhasil Diupdate');
  })
  //Mengedit data User  
  it('User can edit existing data (user)', () => {
    cy.get('.table td')
      .contains('user edited')
      .parent()
      .find('a')
      .contains('Edit')
      .click();
    cy.get('#name').clear('user edited');
    cy.get('#name').type('user edited2');
    cy.get('.btn-primary').contains('Submit').click();
    cy.get('.table td').contains('user edited2').should('have.text', 'user edited2');
    cy.get('.alert')
      .should('be.visible')
      .and('have.class', 'alert-success')
      .and('contain', 'User Berhasil Diupdate');
  })

  //negative test case
  it('negative test case', () => {    
  })
})