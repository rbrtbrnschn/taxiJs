import KeyPress from "./KeyPress";
import * as utils from "./utils";
import PlugInFactory from "../plugin";

export default new KeyPress(38, action, validation);

function action(taxiJs, e) {
  const [,, prev] = utils.getCurrNextPrev(taxiJs.taxi);
  utils.cleanUp(taxiJs.taxi);
  taxiJs.taxi.children[prev].classList.toggle("is-selected");
  PlugInFactory.handle("38", taxiJs, e);
}
function validation(taxiJs, e) {
  return true;
}