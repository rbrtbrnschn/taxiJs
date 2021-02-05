import KeyPress from "./KeyPress";
import * as utils from "./utils";
import PlugInFactory from "../plugin";
export default new KeyPress(40, action, (taxi, e) => true);

function action(taxiJs, e) {
  const [, next] = utils.getCurrNextPrev(taxiJs.taxi);
  utils.cleanUp(taxiJs.taxi);
  taxiJs.taxi.children[next].classList.toggle("is-selected");
  PlugInFactory.handle("40", taxiJs, e);
}