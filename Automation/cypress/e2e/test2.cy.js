// Test Case 1
describe('Product search', () => {
  it('Find a product by title and verify its accessibility', () => {
      // Test steps
      // 1. Navigate to the website
      // 2. Find the search text field and enter a specific product title
      // 3. Click the search button
      // 4. Verify that the product page is accessible

      cy.visit('https://giftly.klickly-dev.com/marketplace');
      cy.get('input[type="text"]').eq(0).type('Box'); // Assuming 'Box' is the specific product title
      cy.contains('p', 'Search').parent().click(); // Corrected the typo in 'button'
      cy.url().should('include', 'Box'); // Corrected the assertion to check for the product title in the URL
  });
});
