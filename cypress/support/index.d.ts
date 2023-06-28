declare namespace Cypress {
  interface Chainable<Subject> {
    /**
     * @param userName: string
     * @param password: string
     * @example
     * cy.register(userName, password)
     * cy.register(ashok@test.com, password123)
     */
    register(userName: string, password: string) : Chainable<any>

    /**
     * @param userName: string
     * @param password: string
     * @example
     * cy.register(userName, password)
     * cy.register(ashok@test.com, password123)
     */
    login(userName: string, password: string) : Chainable<any>

  }
}
