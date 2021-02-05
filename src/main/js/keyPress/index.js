import KeyPress40 from "../keyPress/KeyPress40";
import KeyPress38 from "../keyPress/KeyPress38";
import KeyPress9 from "../keyPress/KeyPress9";
import KeyPress13 from "../keyPress/KeyPress13";

const keys = [KeyPress38, KeyPress40, KeyPress9, KeyPress13];
class KeyHandler {
  constructor(keys) {
    this.map = new Map();
    keys.forEach((k) => this.bind(k.keyCode, k));
  }

  bind(_keyCode, _class){
    this.map.set(_keyCode, _class);
  }

  has(_key){
    return this.map.has(_key);
  }

  handle(taxi, e){
    const hasKey = this.map.has(e.which);
    if(hasKey) {
      return this.map.get(e.which).handleAction(taxi, e);
    }
  }
  
}

export default new KeyHandler(keys);