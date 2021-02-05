import KeyPress from "./KeyPress";

export default new KeyPress(13, action, validation);

function action(taxiJs, e) {
    const selected = taxiJs.taxi.querySelector(".is-selected");
    if(!selected) return;
    taxiJs.input.value = selected.getAttribute("value");
    taxiJs.taxi.innerHTML = "";
}

function validation(taxiJs, e) {
  return true;
}