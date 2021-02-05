export default class Module {
  static Triggers = Object.freeze([
    "40",
    "38",
    "13",
    "9"
  ]);
  constructor(trigger, functionality) {
    if(!trigger in Module.Triggers) throw new Error("invalid trigger");
    this.trigger = trigger;
    this.functionality = functionality;
  }

  handleAction(taxiJs) {
    try {
      this.functionality(taxiJs);
    }
    catch(err){
      throw new Error(`[third-party module]: ${name} failed at ${this.trigger}`);
    }
  }
} 