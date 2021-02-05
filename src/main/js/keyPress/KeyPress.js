export default class KeyPress {
  constructor(keyCode, action, validation){
    this.action = action;
    this.validation = validation;
    this.keyCode = keyCode;
  }

  handleAction(taxi, e) {
    try {
      if(this.validation !== undefined && !this.validation(taxi,e)) return;
      return this.action(taxi, e);
    }
    catch(err){

    }
  }
}