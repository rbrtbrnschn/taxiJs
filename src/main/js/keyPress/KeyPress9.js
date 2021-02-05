import KeyPress from "./KeyPress";
import KeyPress40 from "./KeyPress40";

export default new KeyPress(9, action, validation);

function action(taxiJs, e) {
  KeyPress40.handleAction(taxiJs, e);

}

function validation(taxiJs, e) {
  return true;
}