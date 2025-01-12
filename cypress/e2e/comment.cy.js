describe('Resource Management Frontend', () => {
  let baseUrl;
  before(() => {
    cy.task('startServer').then((url) => {
      baseUrl = url;
      console.log('------- started server ---------')
      cy.visit(baseUrl);
    });
  });
  after(() => {
    return cy.task('stopServer');
  });
});

//Delete comments before submitting please :)
it('should add a new comment', () => {

  // cy.get('button.commentbtn').filter(':contains("Comment")').last().click();
  cy.get('#name').type('Test name', { force: true });


});