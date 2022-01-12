// test for landing on homepage

it("can find homepage", () => {
  cy.visit("/");
});

// check title of landing page 
it("can find title on home page", () => {
  cy.visit("/");
  cy.get("h1").contains("momsnet");
});

// check form fields are filled out correctly 'can submit form'
it("can submit form", () => {
  cy.visit("/");
  cy.get("form").find("input[name='user-name']").type("moms74");
  cy.get("form").find("input[name='message']").type("moms74");
  cy.get("form").find("input[type='submit']").click();
});

// form validation 
// check 

// redirects to home page 
it("can submit form", () => {
  cy.visit("/");
  cy.get("form").find("input[name='user-name']").type("moms74");
  cy.get("form").find("input[name='message']").type("moms74");
  cy.get("form").find("input[type='submit']").click();
  cy.url().should("include", "/");
});

// stretch - delete?