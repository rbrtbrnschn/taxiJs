import KeyPress from "./KeyPress";
import * as utils from "./utils";
export default new KeyPress(40, action, (taxi, e) => true);

function action(taxiJs, e) {
  const [, next] = utils.getCurrNextPrev(taxiJs.taxi);
  utils.cleanUp(taxiJs.taxi);
  taxiJs.taxi.children[next].classList.toggle("is-selected");
}