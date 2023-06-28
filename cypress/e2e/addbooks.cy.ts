describe('Adding Books', () => {
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

    it('Add book to personal reading list and verify', () => {
        let bookName;
        cy.visit('/');
        cy.register(userName,password);
        cy.get('[type="submit"]').click();
        cy.get('nav ul li').contains('Discover').click();
        cy.wait(1000);
        cy.get('main div li').first().within(() => {
            cy.get('h2').invoke('text').then((book) => {
                bookName = book;
            });
            cy.get('button').click();
        })
        cy.get('nav ul li').contains('Reading List').click();
        cy.get('main li h2').then (($book) => {
            expect($book).to.have.text(bookName);
        })
    });
});