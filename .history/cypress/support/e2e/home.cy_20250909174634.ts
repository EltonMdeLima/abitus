describe('Navegação e interação na página inicial', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('deve exibir o título da página corretamente', () => {
    cy.get('h1').should('contain.text', 'Abitus Project');
  });

  it('deve interagir com o contador do Redux e atualizar o valor', () => {
    // Verifica o valor inicial do contador
    cy.get('span').should('contain.text', '0');

    // Clica no botão de incremento
    cy.get('button').contains('Increment').click();

    // Verifica se o valor foi atualizado para 1
    cy.get('span').should('contain.text', '1');

    // Clica no botão de decremento
    cy.get('button').contains('Decrement').click();

    // Verifica se o valor voltou para 0
    cy.get('span').should('contain.text', '0');
  });
});