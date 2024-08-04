import GoldBarPage from "../../pages/GoldBarPage";
import { getGoldBars } from "./goldBarUtils";

const goldBarPage = new GoldBarPage();

export function findFakeBar() {
  getGoldBars().then((values) => {
    const firstThird = values.slice(0, Math.floor(values.length / 3));
    const secondThird = values.slice(
      Math.floor(values.length / 3),
      Math.floor((2 * values.length) / 3)
    );

    goldBarPage.weighBars(firstThird, secondThird).then((result) => {
      let fakeGroup;
      if (result === "<") {
        fakeGroup = firstThird;
      } else if (result === ">") {
        fakeGroup = secondThird;
      } else {
        fakeGroup = values.slice(Math.floor((2 * values.length) / 3));
      }

      goldBarPage.resetGrid();

      goldBarPage.weighBars([fakeGroup[0]], [fakeGroup[1]]).then((result) => {
        let fakeBar;
        if (result === "<") {
          fakeBar = fakeGroup[0];
        } else if (result === ">") {
          fakeBar = fakeGroup[1];
        } else {
          fakeBar = fakeGroup[2];
        }

        goldBarPage.checkFakeBar(fakeBar);

        goldBarPage.logWeighingInfo();
      });
    });
  });
}

export function calculateWeighingEfficiency(totalBars, weighingsUsed) {
  const optimalWeighings = Math.ceil(Math.log2(totalBars));
  const efficiency = (optimalWeighings / weighingsUsed) * 100;
  return Math.round(efficiency * 100) / 100;
}

export function logWeighingStrategy(weighings) {
  console.log("Analyzing weighing strategy:", weighings);
}
