/// <reference types="cypress" />

describe('ts01 - Smoke tests',() => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    })
    it('tc01- verify page title', () => {
        cy.get('h1', {timeout: 10000}).should('contain', 'Robo Explorer');
    });
});
