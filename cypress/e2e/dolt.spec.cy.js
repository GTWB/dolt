/// <reference types="cypress" />

describe("Dolt – Task Manager App", () => {
  beforeEach(() => {
    cy.clearLocalStorage().then(() => {
      cy.visit("https://gtwb.github.io/dolt");
    });
  });

  it("should load the app", () => {
    cy.contains("Dolt📌");
    cy.contains("Your simple, no-fuss task manager");
  });

  it("should open and close the task input interface", () => {
    cy.get(".addButton").click();
    cy.contains("Create New Task");
    cy.get(".closeButton").click();
    cy.get(".taskInputInterface").should("not.exist");
  });

  it("should not allow adding task with empty fields", () => {
    cy.get(".addButton").click();
    cy.get(".addTask").click();
    cy.get(".taskContainer .taskItem").should("not.exist");
  });

  it("should add a new task", () => {
    cy.get(".addButton").click();
    cy.get(".titleInput").type("Test Task");
    cy.get(".descriptionInput").type("This is a test task");
    cy.get(".addTask").click();
    cy.contains("Test Task");
    cy.contains("This is a test task");
  });

  it("should not allow duplicate title or description", () => {
    cy.addTask("Unique Title", "Unique Description");
    cy.get(".addButton").click();
    cy.get(".titleInput").type("Unique Title");
    cy.get(".descriptionInput").type("Unique Description");
    cy.on("window:alert", (txt) => {
      expect(txt).to.contain("already exist");
    });
    cy.get(".closeButton").click();
  });

  it("should mark a task as completed and persist", () => {
    cy.addTask("Complete Me", "Mark this as done");
    cy.get('input[type="checkbox"]').check();
    cy.reload();
    cy.get('input[type="checkbox"]').should("be.checked");
  });

  it("should filter tasks correctly", () => {
    cy.addTask("To Do Task", "Still pending");
    cy.addTask("Completed Task", "Already done");
    cy.get(".taskItem").eq(1).find('input[type="checkbox"]').check();

    cy.get(".filter.completed").click();
    cy.contains("Completed Task");
    cy.contains("To Do Task").should("not.exist");

    cy.get(".filter.toDo").click();
    cy.contains("To Do Task");
    cy.contains("Completed Task").should("not.exist");

    cy.get(".filter.all").click();
    cy.contains("To Do Task");
    cy.contains("Completed Task");
  });

  it("should search tasks by keyword", () => {
    cy.addTask("Groceries", "Buy milk and eggs");
    cy.addTask("Work", "Send the report");

    cy.get("#input").type("milk");
    cy.contains("Buy milk and eggs");
    cy.contains("Send the report").should("not.exist");
  });

  it("should delete a specific task", () => {
    cy.addTask("Task to Remove", "This will be removed");
    /*  cy.wait(2000);
    cy.contains("delete").click();
    cy.contains("Task to Delete").should("not.exist"); */
    cy.contains("Task to Remove")
      .parents(".taskItem")
      .find(".deleteTask")
      .click();
    cy.contains("Task to Remove").should("not.exist");
  });

  it("should clear all tasks", () => {
    cy.addTask("First");
    cy.addTask("Second");
    cy.get(".deleteAll").click();
    cy.get(".taskItem").should("not.exist");
  });

  it("Should show or hide the 'Clear List' button depending on tasks", () => {
    // All tasks cleared: button should be hidden
    cy.get(".deleteAll").should("not.be.visible");

    // Add one task → button should be visible
    cy.addTask("Sample Task", "Sample Description");

    cy.get(".deleteAll").should("be.visible");

    // Delete the task → button should be hidden again
    cy.get(".deleteAll").click();

    cy.get(".deleteAll").should("not.be.visible");
  });

  it("should persist tasks between page reloads", () => {
    cy.addTask("Persistent Task", "Should survive reload");
    cy.reload();
    cy.contains("Persistent Task");
  });
});
