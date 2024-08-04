class GoldBarPage {
  visit() {
    cy.visit("http://sdetchallenge.fetch.com/");
  }

  resetGrid() {
    cy.get(":nth-child(4) > #reset").click();
  }

  weighBars(leftBowl, rightBowl) {
    leftBowl.forEach((bar) => {
      cy.get(`#left_${bar}`).type(bar);
    });

    rightBowl.forEach((bar) => {
      cy.get(`#right_${bar}`).type(bar);
    });

    cy.get("#weigh").click();

    return cy.contains(/^[=><]$/, { timeout: 10000 }).invoke("text");
  }

  checkFakeBar(barNumber) {
    cy.get(`[id^='coin'][id$='_${barNumber}']`).click();

    cy.on("window:alert", (text) => {
      expect(text).to.include("Yay! You find it!");
    });

    cy.then(() => {
      this.resetGrid();
    });
  }

  logWeighingInfo() {
    return cy.get(".game-info").then(($gameInfo) => {
      const weighings = $gameInfo.find("ol li").length;
      cy.log(`Number of weighings: ${weighings}`);

      cy.log("List of weighings:");
      $gameInfo.find("ol li").each((index, element) => {
        cy.log(Cypress.$(element).text());
      });
    });
  }
}

export default GoldBarPage;
