export function getGoldBars() {
  return cy.get('[id^="coin_"]').then(($list) => {
    const values = [];
    $list.each((index, button) => {
      const value = Cypress.$(button).text().trim();
      values.push(value);
    });
    return cy.wrap(values);
  });
}
