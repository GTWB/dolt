// Crea una funzione di utilità all'inizio del file
function addTask(title, description) {
  cy.get(".addButton").click();
  cy.get(".titleInput").type(title);
  cy.get(".descriptionInput").type(description);
  cy.wait(2000);
  cy.get(".addTask").click();
  cy.get(".taskItem").should("contain", title);
  cy.get(".taskItem").should("contain", description);
}

describe("Dolt App", () => {
  beforeEach(() => {
    cy.visit("https://gtwb.github.io/dolt/");
  });

  it("display the correct title", () => {
    cy.get("h1").contains("Dolt");
  });

  it("add a new task", () => {
    addTask("Giuseppe", "Is testing the application that he made");
    addTask("Erika Cucchiara", "She's working at St Thomas Hospital");
  });

  it("should delete a specific task by its title", () => {
    const title = "Task to Delete";
    const description = "This task will be removed";

    // Step 1: Aggiunge un nuovo task
    addTask(title, description);
    cy.wait(2000);
    // Step 2: Verifica che il task esista
    cy.contains(".taskItem", title).should("exist");

    // Step 3: Trova il task e clicca su "Delete"
    cy.contains(".taskItem", title).find(".deleteTask").click();

    // Step 4: Verifica che il task sia stato rimosso
    cy.contains(".taskItem", title).should("not.exist");
  });
});
