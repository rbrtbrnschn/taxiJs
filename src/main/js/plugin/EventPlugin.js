import Module from "./Plugin.js";
export default class EventModule extends Module {
  static Triggers = Object.freeze([
    "40",
    "38",
    "13",
    "9"
  ]);
  constructor(trigger, functionality) {
    super(trigger, functionality);
  }

  handleAction(taxiJs, e) {
    try {
      this.functionality(taxiJs, e);
    }
    catch(err){
      throw new Error(`[third-party eventmodule]: ${name} failed at ${this.trigger}`);
    }
  }

}