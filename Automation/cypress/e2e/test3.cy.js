describe('Product pagination', () => {
  it('Verify products on the first page are different from the second page', () => {
    // Test steps
    // 1. Navigate to the website
    // 2. Collect the products from the first page
    // 3. Scroll to the second page
    // 4. Collect the products from the second page
    // 5. Verify that the products on the first page are different from those on the second page

    // Sample implementation (using Cypress commands)
    cy.visit('https://giftly.klickly-dev.com/marketplace');

    cy.get('input[type="text"]').eq(0).type('STAR WARS');
    
    cy.contains('p', 'Search').parent().click();

    let firstPageProducts, secondPageProducts;

    // Collect products from the first page
    cy.get('h3').then(($products) => {
      firstPageProducts = $products.text();
    });

    // Scroll to the bottom to load the second page
    cy.get('div[direction="row"]').last().scrollIntoView({ duration: 2000 });

    // Wait for a short duration to ensure the second page is loaded
    cy.wait(1000);

    // Collect products from the second page
    cy.get('h3').then(($products) => {
      secondPageProducts = $products.text();

      // Assert that the products on the first page are different from those on the second page
      expect(firstPageProducts).not.to.equal(secondPageProducts, 'Products on the first page are the same as on the second page');
    });
  });
});