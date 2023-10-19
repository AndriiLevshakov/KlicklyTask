describe('Product search with specific keyword', () => {
  it('Search for products containing STAR WARS and verify their presence', () => {
      // Test steps
      // 1. Navigate to the website
      // 2. Find the search text field and enter 'STAR WARS'
      // 3. Click the search button
      // 4. Verify that at least two products containing 'STAR WARS' are present in the search results
      // 5. Provide an informative failure message if any of the products are not found

      // Sample implementation (using Cypress commands)
      cy.visit('https://giftly.klickly-dev.com/marketplace');
      cy.get('input[type="text"]').eq(0).type('STAR WARS');
      cy.contains('p', 'Search').parent().click();
      cy.get('h3').should('contain', 'STAR WARS').should('have.length.of.at.least', 2);
  });
});