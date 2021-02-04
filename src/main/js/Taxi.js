/* GLOBALS */
// let __AUTO_INITIALIZE = false; //@deprecated

/**
 * TaxiOptions interface, outlining all available options to give in, when instantiating a new {@link Taxi} instance.
 * @typedef {Object} TaxiOptions
 * @property {Array} data - data
 * @property {query} query - query mode
 * @property {toHtml} toHtml - html mapping method
 * @property {number} minChar - minimum amount of avaialble characters to show auto-complete
 * @property {boolean} showWarnings - true by default
 */

/**
 * Method of querying given data. Takes in current dataset entry and the current input value.
 * @callback query
 * @param {*} record
 * @param  {String} value
 * @returns {boolean}
 */

/**
 * The {@link toHtml} method will be called for each data entry that has been queried for with the help of {@link query}.
 * @callback toHtml
 * @param {*} entry - each entry, that the data is mapping over
 * @returns {String} - html string
 */

/**
 * {@link HTMLElement}, holding the auto-complete html.
 * @name HTMLTaxiElement
 * @type {HTMLElement}
 *
 */

/**
 * Taxi instance, initializing eventlisteners for corresponding {@link HTMLInputElement} and {@link HTMLTaxiElement}.
 * @class Taxi
 */
class Taxi {
  /* Statics */

  /**
   * Holding numerous query filters.
   * @property {query} strict - strict mode query by "exact" match
   * @property {query} fuzzy - fuzzy search allowing for loose query
   */
  static Query = {
    strict: (record, query) =>
      record.toLowerCase().includes(query.toLowerCase()),
    fuzzy: (record, query) => {
      const recordLowerCase = record.toLowerCase();
      query = query.toLowerCase().replace(/ /g, "");
      const match = [];
      let searchPosition = 0;
      for (let number = 0; number < recordLowerCase.length; number++) {
        const recordChar = record[number];
        if (
          searchPosition < query.length &&
          recordLowerCase[number] === query[searchPosition]
        ) {
          searchPosition++;
        }
        match.push(recordChar);
      }
      if (searchPosition === query.length) {
        return match.join("");
      }
    },
  };

  /**
   * Holding builtin toHtml variants.
   * @property {toHtml} classic - designed for {@link TaxiOptions}.data type of string[].
   */
  static ToHtml = Object.freeze({
    classic: (entry) => {
      return `<div class="taxi-card" value="${entry}">
        <strong>${entry}</strong>
      </div>`;
    },
  });

  // /**
  //  *
  //  * Default TaxiOptions, to be used incase of none given.
  //  * @property {*} data - ["Volkwagen", "Mercedes", "Daimler"]
  //  * @property {query} query - {@link taxiquery}
  //  */
  static TaxiOptionsDefaults = Object.freeze({
    data: ["Volkwagen", "Mercedes", "Daimler"],
    query: Taxi.Query.strict,
    toHtml: Taxi.ToHtml.classic,
    minChar: 1,
    showWarnings: true,
  });

  static TaxiOptionsRecommended = Object.freeze({
    minChar: 5,
  });

  /**
   * @param {HTMLInputElement} input - input element
   * @param {HTMLElement} taxi - taxi element
   * @param {TaxiOptions} [options] - optional settings by {@link TaxiOptions}
   */
  constructor(input, taxi, options) {
    /* Property initialization by paramterers */
    this.input = input;
    this.taxi = taxi;

    /* Further property initialization */
    this.input.taxi = this;
    this.actionCodes = [40, 38, 9, 13];

    /* Validate options */
    this.injectTaxiOptions(options);

    /* Public Methods */
    this.setData = this.setData.bind(this);
    this.setFilter = this.setFilter.bind(this);
    this.setQuery = this.setQuery.bind(this);
    this.setToHtml = this.setToHtml.bind(this);

    /* Initialization */
    this.initEventlisteners();
  }

  /**
   * Inject default {@link TaxiOptions} and modify if needed.
   * @param {TaxiOptions} [options]
   */
  injectTaxiOptions(options) {
    /* Grab defaults */
    const injectedOptions = { ...Taxi.TaxiOptionsDefaults };

    /* Grab user changes */
    if (options) {
      Object.keys(options).forEach((key) => {
        injectedOptions[key] = options[key];
      });
    }

    /* Inject */
    this.options = injectedOptions;
  }

  /**
   * Adds onclick listeners.
   * @returns {void}
   */
  injectOnClicKListeners() {
    [...this.taxi.children].map((c) => {
      c.addEventListener("click", (e) => {
        this.input.value = e.target.getAttribute("value");
        this.taxi.innerHTML = "";
      });
    });
  }

  /**
   * Initializes eventlisteners.
   * @returns {void}
   */
  async initEventlisteners() {
    this.input.addEventListener("keydown", (e) => this.handleKeyDown(e));
    this.input.addEventListener("keyup", (e) => this.handleKeyUp(e));
  }

  /**
   * Validates minimum amount of characters present.
   * @param {Event} e - input Element
   * @returns {boolean} boolean
   */
  hasMinChar(e) {
    if (!this.options.minChar) return true; // @deprecated
    if (e.target.value.trim().length >= this.options.minChar) return true;
    return false;
  }

  /**
   * Handles "keyup" event, meaning only text-input related actions.
   * Handles auto-complete, meaing data-filtering.
   * @param {Event} e
   */
  handleKeyUp(e) {
    /* Validate minChar */
    if (!this.hasMinChar(e)) {
      this.taxi.innerHTML = "";
      return;
    }

    /* Get variables */
    const { which } = e;
    const { value } = e.target;

    /* Validate keyCode */
    const isActionCode = this.actionCodes.includes(which);
    if (isActionCode) return;

    /* Get HTML  */
    const copy = [...this.options.data];
    const filtered = copy.filter((entry) => this.options.query(entry, value));
    const html = filtered.map((entry) => this.options.toHtml(entry)).join("\n");

    /* Display */
    this.taxi.innerHTML = html;
    this.injectOnClicKListeners();
  }

  /**
   * Hanled "keydown" event, meaning only `non` text-input actions.
   * Handled keycodes: `40, 38, 9`.
   * @param {Event} e
   */
  handleKeyDown(e) {
    if (!this.hasMinChar(e)) {
      this.taxi.innerHTML = "";
      return;
    }
    const isActionCode = this.actionCodes.includes(e.which);
    if (!isActionCode) return;

    /* Prevent defaults */
    e.preventDefault();

    /* Get selected */
    const children = this.taxi.children;
    const max = children.length;
    const selected = this.taxi.querySelector(".is-selected");

    /* Clean up */
    this.taxi
      .querySelectorAll(".is-selected")
      .forEach((i) => i.classList.toggle("is-selected"));

    /* Indices */
    const current = [...children].indexOf(selected);
    const next = current + 1 < max ? current + 1 : current;
    const prev = current - 1 > 0 ? current - 1 : 0;

    /* Handle actions */
    switch (e.which) {
      case 40:
        /* Down */
        children[next].classList.toggle("is-selected");
        break;
      case 38:
        // Up
        children[prev].classList.toggle("is-selected");
        break;
      case 9:
        // Tab => Down
        children[next].classList.toggle("is-selected");
        break;
      case 13:
        // Enter
        if (!selected) return;
        this.input.value = selected.getAttribute("value");
        this.taxi.innerHTML = "";
        break;
      default:
        break;
    }
  }

  /* Public Functionality */
  /* Option Setters */

  /**
   * Sets {@link TaxiOptions} data.
   * @param {Array} data
   */
  setData(data) {
    if (
      this.options.showWarnings &&
      data.length &&
      data[0].length == undefined
    ) {
      console.warn(
        "When using objects-like, be sure to it's unwise to use default `options.toHtml` and `options.query` "
      );
    }
    this.options.data = data;
  }

  /**
   * Sets {@link TaxiOptions} filter.
   * @param {(value: String,entry) => boolean} filter - filter method
   */
  setFilter(filter) {
    this.options.filter = filter;
  }

  /**
   * Sets {@link TaxiOptions} query.
   * @param {query} query
   */
  setQuery(query) {
    const isCustom = !(Object.values(Taxi.Query).indexOf(query) >= 0);
    if (this.options.showWarnings && isCustom)
      console.warn(
        `You are using a custom query.\nTo use our selection of recommended query options, be sure to checkout the documentation here: https://taxiJs.rbrtbrnschn.dev.`
      );
    this.options.query = query;
  }

  /**
   * Sets {@link TaxiOptions} toHtml.
   * @param {(entry: any) => String} toHtml - html mapping method
   */
  setToHtml(toHtml) {
    this.options.toHtml = toHtml;
  }

  /**
   * Sets {@link TaxiOptions} minChar property.
   * @param {int} minChar
   */
  setMinChar(minChar) {
    if (
      this.options.showWarnings &&
      minChar > Taxi.TaxiOptionsRecommended.minChar
    ) {
      console.warn(
        `You are not using the recommended range of minimum characters.\nRecommended range: 0 - ${
          Taxi.TaxiOptionsRecommended.minChar
        }`
      );
    }
    this.options.minChar = minChar;
  }

  /**
   * Sets {@link TaxiOptions} showWarnings property.
   * @param {boolean} boo
   */
  setWarnings(boo) {
    if (typeof boo == Boolean) {
      this.options.showWarnings = boo;
    }
  }
}

export default Taxi;
window.Taxi = Taxi;