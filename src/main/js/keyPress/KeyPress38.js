import KeyPress from "./KeyPress";
import * as utils from "./utils";

export default new KeyPress(38, action, validation);

function action(taxiJs, e) {
  const [,, prev] = utils.getCurrNextPrev(taxiJs.taxi);
  utils.cleanUp(taxiJs.taxi);
  taxiJs.taxi.children[prev].classList.toggle("is-selected");
}
function validation(taxiJs, e) {
  return true;
}