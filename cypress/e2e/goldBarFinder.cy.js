import GoldBarPage from "../pages/GoldBarPage";
import { findFakeBar } from "../support/utils/weighingUtils";

describe("Fake Gold Bar Finder", () => {
  const goldBarPage = new GoldBarPage();

  beforeEach(() => {
    goldBarPage.visit();
  });

  it("finds the fake gold bar", () => {
    findFakeBar();
  });
});
