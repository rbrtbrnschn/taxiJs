import KeyPress from "./KeyPress";
import PluginFactory from "./index";

export default new KeyPress(13, action, validation);

function action(taxiJs, e) {
    const selected = taxiJs.taxi.querySelector(".is-selected");
    if(!selected) return;
    taxiJs.input.value = selected.getAttribute("value");
    taxiJs.taxi.innerHTML = "";
    PluginFactory.handle("13",taxiJs, e);
}

function validation(taxiJs, e) {
  return true;
}