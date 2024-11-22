describe("Homepage", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it('should contain "Get started by ~" text', () => {
    cy.contains("Get started by").should("exist");
  });
  it('should contain "Learn" heading anchor with correct href props', () => {
    cy.contains("a", "Learn")
      .should("have.prop", "href")
      .and(
        "equal",
        "https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
      );
  });
});
