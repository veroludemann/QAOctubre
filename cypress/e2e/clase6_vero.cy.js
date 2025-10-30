describe ('Clase 6 - Vero', () => {
    beforeEach(() => {
        cy.visit ('https://ticketazo.com.ar/')
    })

    it('Login - Wrong path', () => {
        cy.log('Ingresado sin credenciales')
        cy.get('.justify-end > .text-sm').click()
        cy.get()
        // cy.contains('Correo o contraseña incorrectos').should('be.visible')


        cy.log('Ingresando Correo incorrecto')
        cy.get('[data-cy="input-email"]').type('vero.com')
        cy.get('[data-cy="input-password"]').focus()
        cy.get('div[data-slot-"error-message"]')
        .invoke('text')
        .should('match', /Incluye un signo "@"|Please include an '@'/)

        cy.log('Contraseña incorrecta')
        cy.get('[data-cy="input-email"]').clear().type('homejo5153@filipx.com')
        cy.get('[data-cy="input-password"]').clear().type('Admin1234*')
        cy.contains('Correo o contraseña incorrectos').should('be.visible')

        


    })
})