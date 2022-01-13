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
  cy.get("form").find("input[name='user-name']").type("mooUser54");
  cy.get("form").find("input[name='message']").type("help me find my cows");
  cy.get("form").find("input[type='submit']").click();
});

// form validation
// character limit

// redirects to home page
it("can redirect", () => {
  cy.visit("/");
  cy.get("form").find("input[name='user-name']").type("milkman77");
  cy.get("form").find("input[name='message']").type("call me postman pat");
  cy.get("form").find("input[type='submit']").click();
  cy.url().should("include", "/");
});

// check feed has increased
it("can add new moo-post", () => {
  let currentListLength = 0;

  cy.visit("/");
  cy.get("body")
    .find("li") // array of li
    .then((list) => {
      currentListLength = Cypress.$(list).length;
    });

  cy.get("form").find("input[name='user-name']").type("troll99");
  cy.get("form").find("input[name='message']").type("I h8 cows");
  cy.get("form").find("input[type='submit']").click();
  cy.url().should("include", "/");

  cy.get("body")
    .find("li")
    .then((list) => {
      expect(list).to.have.length(currentListLength + 1);
    });
});

// check feed has decreased after delete
it("can delete moo-post", () => {
  let currentListLength = 0;

  cy.visit("/");
  cy.get("body")
    .find("li") // array of li
    .then((list) => {
      //starting length
      currentListLength = Cypress.$(list).length;
    });

  //get first li
  cy.get("li").first().find("button").click();

  cy.url().should("include", "/");

  cy.get("body")
    .find("li")
    .then((list) => {
      expect(list).to.have.length(currentListLength - 1);
    });
});

it("can link to css file", () => {
  cy.visit("/");
  cy.get("h1").should("have.css", "color", "rgb(0, 0, 255)");
});

it("can display 404 if page not found", () => {
  cy.request({url: "/page-not-found", failOnStatusCode: false}).should((response) => {
    expect(response.status).to.eq(404)
  });
})