// test for landing on homepage

it("can find homepage", () => {
  cy.visit("/");
});

// check title of landing page
it("can find title on home page", () => {
  cy.visit("/");
  cy.get("h1").contains("Moo-net");
});

// check form fields are filled out correctly 'can submit form'
it("can submit form", () => {
  cy.visit("/");
  cy.get("form").find("input[name='user-name']").type("mo074");
  cy.get("form").find("input[name='message']").type("moo74");
  cy.get("form").find("input[type='submit']").click();
});

// form validation
// character limit

// redirects to home page
it("can redirect", () => {
  cy.visit("/");
  cy.get("form").find("input[name='user-name']").type("moos74");
  cy.get("form").find("input[name='message']").type("moos74");
  cy.get("form").find("input[type='submit']").click();
  cy.url().should("include", "/");
});

// check feed has increased 
it("can add new moo-post", () => {
  cy.visit("/");
  cy.get("form").find("input[name='user-name']").type("moos74");
  cy.get("form").find("input[name='message']").type("moos74");
  cy.get("form").find("input[type='submit']").click();
  cy.get("form").find("input[name='user-name']").type("moos75");
  cy.get("form").find("input[name='message']").type("moos75");
  cy.get("form").find("input[type='submit']").click();
  cy.url().should("include", "/");
  cy.get("ul").children().should("have.length",2);
});

// stretch - delete?
