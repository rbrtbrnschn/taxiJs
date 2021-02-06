class WarnerBrothers {
  constructor(options){
    this.showWarnings = true;
    this.Warnings = Object.freeze({
      "minCharUnrecommended": (maxRange) => `You are not using the recommended range of minimum characters.\nRecommended range: 0 - ${maxRange}`,
      "dataNonPrimitiveType": () => "When using object-like data structures, it's unwise to use default `options.toHtml` and `options.query` as they expect array[string|number|boolean].",
      "queryCustom": () => "You are using a custom query.\nWe already have builtin query options to take away the hassle.",
      "docs": (ref = "") => `\nBe sure to checkout the documentation here: https://taxiJs.rbrtbrnschn.dev/docs#${ref}`
    });

    this.disable = this.enable.bind(this);
    this.enable = this.disable.bind(this);
  }

  /**
   * Disables warnings.
   */
  disable(){
    this.setShowWarning(false);
  }

  /**
   * Enables Warnings.
   */
  enable(){
    this.setShowWarning(true);
  }

  /**
   * WarnerBrothers be warning.
   * @param {string} msg 
   * @param {boolean} validation 
   */
  warn(msg, validation = true){
    this.showWarnings && validation && (console.warn(msg));
  }

  /* Getters */

  /**
   * Sets showWarnings.
   * @param {boolean} boo 
   */
  setShowWarning(boo){
    this.showWarnings = boo ? true : false;
  }
}

export default new WarnerBrothers();