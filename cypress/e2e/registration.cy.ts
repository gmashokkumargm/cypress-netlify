describe('Registration', () => {

    let userName;
    let password;

    before(() => {
        cy.task('randomGenerator', 'email' ).then((email): any => {
            userName = email;
        });
        cy.task('randomGenerator').then((pwd) => {
            password = pwd;
        });
    });

    it('Register with valid user name and verify the user', () => {
        cy.visit('/');
        cy.register(userName,password);
        cy.get('[type="submit"]').click();
        cy.contains('Logout').parent('div').should('contain.text',userName);
        cy.contains('Logout').click();
    });
    it('Register with existing user and verify the error message', () => {
        cy.register(userName, password);
        cy.on('uncaught:exception', (err) => {
            expect(err.message).to.include(`Cannot create a new user with the username "${userName}"`);
            return false;
        })
        cy.get('[type="submit"]').click();
    });
});