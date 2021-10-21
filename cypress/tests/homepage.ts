describe("Navigation", () => {
  it("should change the page on navbar item click", () => {
    cy.findByText(/blog/i).click();
    cy.findByRole("heading", { name: "Blog" }).should("exist");
    cy.findByText(/home/i).click();
    cy.findByRole("heading", { name: "Baptiste Arnaud" }).should("exist");
  });

  it.only("should not contain empty links", () => {
    cy.visit("/");
    cy.shouldNotHaveEmptyLinks();
    cy.visit("/blog");
    cy.shouldNotHaveEmptyLinks();
  });
});

describe("Newsletter subscription form", () => {
  it("shouldn't work if invalid email format", () => {
    cy.findByRole("textbox").type("baptiste");
    cy.findByText(/submit/i).click();
    cy.findByRole("textbox")
      .should("not.be.disabled")
      .should("have.value", "baptiste");
  });

  it("shouldn't work with invalid email", () => {
    cy.intercept(
      {
        method: "POST",
        url: "/api/subscribe",
      },
      { statusCode: 500, body: { error: "Email invalid, sorry" } }
    ).as("subscribeToNewsletter");
    cy.findByRole("textbox").clear().type("baptiste.arnaud95@gmail");
    cy.findByText(/submit/i).click();
    cy.wait("@subscribeToNewsletter");
    cy.findByText("Email invalid, sorry").should("exist");
  });

  it("should work with valid email", () => {
    cy.intercept(
      {
        method: "POST",
        url: "/api/subscribe",
      },
      { statusCode: 201, body: { message: "success" } }
    ).as("subscribeToNewsletter");
    cy.findByRole("textbox").clear().type("baptiste.arnaud95@gmail.com");
    cy.findByText(/submit/i).click();
    cy.wait("@subscribeToNewsletter");
    cy.findByRole("textbox").should("be.disabled");
    cy.findByText("Hooray! You're now on the list.").should("exist");
  });
});
