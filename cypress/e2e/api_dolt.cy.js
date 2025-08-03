/// <reference types="cypress" />

describe("Dolt Mock API Tests", () => {
  const baseUrl = "https://2dbf25e5-573e-41f7-b877-9620b3170cf0.mock.pstmn.io";

  it("should GET all tasks", () => {
    cy.request("GET", `${baseUrl}/tasks`).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.an("array");
      expect(response.body.length).to.be.greaterThan(0);
      expect(response.body[0]).to.have.all.keys(
        "id",
        "title",
        "description",
        "done"
      );
    });
  });

  it("should GET a task by ID", () => {
    cy.request("GET", `${baseUrl}/tasks/1`).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("id", "1");
      expect(response.body).to.have.property("title", "Buy groceries");
      expect(response.body).to.have.property(
        "description",
        "Milk, eggs, bread"
      );
      expect(response.body).to.have.property("done", false);
    });
  });

  it("should CREATE a new task", () => {
    cy.request("POST", `${baseUrl}/tasks`, {
      title: "New Task from Cypress",
      description: "Test created via Cypress",
      done: false,
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property("id");
      expect(response.body).to.have.property("title", "New Task from Cypress");
      expect(response.body).to.have.property(
        "description",
        "Test created via Cypress"
      );
      expect(response.body).to.have.property("done", false);
    });
  });

  it("should UPDATE a task by ID", () => {
    cy.request("PUT", `${baseUrl}/tasks/1`, {
      title: "Buy groceries and water",
      description: "Milk, eggs, bread, water",
      done: true,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("id", "1");
      expect(response.body).to.have.property(
        "title",
        "Buy groceries and water"
      );
      expect(response.body).to.have.property(
        "description",
        "Milk, eggs, bread, water"
      );
      expect(response.body).to.have.property("done", true);
    });
  });

  it("should DELETE a task by ID", () => {
    cy.request({
      method: "DELETE",
      url: `${baseUrl}/tasks/1`,
    }).then((response) => {
      expect(response.status).to.eq(204);
      expect(response.body).to.be.empty;
    });
  });
});
