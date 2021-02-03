"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

function _classStaticPrivateFieldSpecGet(receiver, classConstructor, descriptor) { if (receiver !== classConstructor) { throw new TypeError("Private static access of wrong provenance"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

var _injectOnClicKListeners = new WeakSet();

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
var Taxi = /*#__PURE__*/function () {
  /* Statics */

  /**
   * Holding numerous query filters.
   * @property {query} strict - strict mode query by "exact" match
   * @property {query} fuzzy - fuzzy search allowing for loose query
   */

  /**
   * Holding builtin toHtml variants.
   * @property {toHtml} classic - designed for {@link TaxiOptions}.data type of string[].
   */
  // /**
  //  *
  //  * Default TaxiOptions, to be used incase of none given.
  //  * @property {*} data - ["Volkwagen", "Mercedes", "Daimler"]
  //  * @property {query} query - {@link #taxiquery}
  //  */

  /**
   * @param {HTMLInputElement} input - input element
   * @param {HTMLElement} taxi - taxi element
   * @param {TaxiOptions} [options] - optional settings by {@link TaxiOptions}
   */
  function Taxi(input, taxi, options) {
    (0, _classCallCheck2.default)(this, Taxi);

    _injectOnClicKListeners.add(this);

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


  (0, _createClass2.default)(Taxi, [{
    key: "injectTaxiOptions",
    value: function injectTaxiOptions(options) {
      /* Grab defaults */
      var injectedOptions = _objectSpread({}, _classStaticPrivateFieldSpecGet(Taxi, Taxi, _TaxiOptionsDefaults));
      /* Grab user changes */


      if (options) {
        Object.keys(options).forEach(function (key) {
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

  }, {
    key: "initEventlisteners",
    value:
    /**
     * Initializes eventlisteners.
     * @returns {void}
     */
    function () {
      var _initEventlisteners = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        var _this = this;

        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.input.addEventListener("keydown", function (e) {
                  return _this.handleKeyDown(e);
                });
                this.input.addEventListener("keyup", function (e) {
                  return _this.handleKeyUp(e);
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function initEventlisteners() {
        return _initEventlisteners.apply(this, arguments);
      }

      return initEventlisteners;
    }()
    /**
     * Validates minimum amount of characters present.
     * @param {Event} e - input Element
     * @returns {boolean} boolean
     */

  }, {
    key: "hasMinChar",
    value: function hasMinChar(e) {
      if (!this.options.minChar) return true; // @deprecated

      if (e.target.value.trim().length >= this.options.minChar) return true;
      return false;
    }
    /**
     * Handles "keyup" event, meaning only text-input related actions.
     * Handles auto-complete, meaing data-filtering.
     * @param {Event} e
     */

  }, {
    key: "handleKeyUp",
    value: function handleKeyUp(e) {
      var _this2 = this;

      /* Validate minChar */
      if (!this.hasMinChar(e)) {
        this.taxi.innerHTML = "";
        return;
      }
      /* Get variables */


      var which = e.which;
      var value = e.target.value;
      /* Validate keyCode */

      var isActionCode = this.actionCodes.includes(which);
      if (isActionCode) return;
      /* Get HTML  */

      var copy = (0, _toConsumableArray2.default)(this.options.data);
      var filtered = copy.filter(function (entry) {
        return _this2.options.query(entry, value);
      });
      var html = filtered.map(function (entry) {
        return _this2.options.toHtml(entry);
      }).join("\n");
      /* Display */

      this.taxi.innerHTML = html;

      _classPrivateMethodGet(this, _injectOnClicKListeners, _injectOnClicKListeners2).call(this);
    }
    /**
     * Hanled "keydown" event, meaning only `non` text-input actions.
     * Handled keycodes: `40, 38, 9`.
     * @param {Event} e
     */

  }, {
    key: "handleKeyDown",
    value: function handleKeyDown(e) {
      if (!this.hasMinChar(e)) {
        this.taxi.innerHTML = "";
        return;
      }

      var isActionCode = this.actionCodes.includes(e.which);
      if (!isActionCode) return;
      /* Prevent defaults */

      e.preventDefault();
      /* Get selected */

      var children = this.taxi.children;
      var max = children.length;
      var selected = this.taxi.querySelector(".is-selected");
      /* Clean up */

      this.taxi.querySelectorAll(".is-selected").forEach(function (i) {
        return i.classList.toggle("is-selected");
      });
      /* Indices */

      var current = (0, _toConsumableArray2.default)(children).indexOf(selected);
      var next = current + 1 < max ? current + 1 : current;
      var prev = current - 1 > 0 ? current - 1 : 0;
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

  }, {
    key: "setData",
    value: function setData(data) {
      if (this.options.showWarnings && data.length && data[0].length == undefined) {
        console.warn("When using objects-like, be sure to it's unwise to use default `options.toHtml` and `options.query` ");
      }

      this.options.data = data;
    }
    /**
     * Sets {@link TaxiOptions} filter.
     * @param {(value: String,entry) => boolean} filter - filter method
     */

  }, {
    key: "setFilter",
    value: function setFilter(filter) {
      this.options.filter = filter;
    }
    /**
     * Sets {@link TaxiOptions} query.
     * @param {query} query
     */

  }, {
    key: "setQuery",
    value: function setQuery(query) {
      var isCustom = !(Object.values(Taxi.Query).indexOf(query) >= 0);
      if (this.options.showWarnings && isCustom) console.warn("You are using a custom query.\nTo use our selection of recommended query options, be sure to checkout the documentation here: https://taxiJs.rbrtbrnschn.dev.");
      this.options.query = query;
    }
    /**
     * Sets {@link TaxiOptions} toHtml.
     * @param {(entry: any) => String} toHtml - html mapping method
     */

  }, {
    key: "setToHtml",
    value: function setToHtml(toHtml) {
      this.options.toHtml = toHtml;
    }
    /**
     * Sets {@link TaxiOptions} minChar property.
     * @param {int} minChar
     */

  }, {
    key: "setMinChar",
    value: function setMinChar(minChar) {
      if (this.options.showWarnings && minChar > _classStaticPrivateFieldSpecGet(Taxi, Taxi, _TaxiOptionsRecommended).minChar) {
        console.warn("You are not using the recommended range of minimum characters.\nRecommended range: 0 - ".concat(_classStaticPrivateFieldSpecGet(Taxi, Taxi, _TaxiOptionsRecommended).minChar));
      }

      this.options.minChar = minChar;
    }
    /**
     * Sets {@link TaxiOptions} showWarnings property.
     * @param {boolean} boo
     */

  }, {
    key: "setWarnings",
    value: function setWarnings(boo) {
      if ((0, _typeof2.default)(boo) == Boolean) {
        this.options.showWarnings = boo;
      }
    }
  }]);
  return Taxi;
}();

(0, _defineProperty2.default)(Taxi, "Query", {
  strict: function strict(record, query) {
    return record.toLowerCase().includes(query.toLowerCase());
  },
  fuzzy: function fuzzy(record, query) {
    var recordLowerCase = record.toLowerCase();
    query = query.toLowerCase().replace(/ /g, "");
    var match = [];
    var searchPosition = 0;

    for (var number = 0; number < recordLowerCase.length; number++) {
      var recordChar = record[number];

      if (searchPosition < query.length && recordLowerCase[number] === query[searchPosition]) {
        searchPosition++;
      }

      match.push(recordChar);
    }

    if (searchPosition === query.length) {
      return match.join("");
    }
  }
});
(0, _defineProperty2.default)(Taxi, "ToHtml", Object.freeze({
  classic: function classic(entry) {
    return "<div class=\"taxi-card\" value=\"".concat(entry, "\">\n        <strong>").concat(entry, "</strong>\n      </div>");
  }
}));
var _TaxiOptionsDefaults = {
  writable: true,
  value: Object.freeze({
    data: ["Volkwagen", "Mercedes", "Daimler"],
    query: Taxi.Query.strict,
    toHtml: Taxi.ToHtml.classic,
    minChar: 1,
    showWarnings: true
  })
};
var _TaxiOptionsRecommended = {
  writable: true,
  value: Object.freeze({
    minChar: 5
  })
};

var _injectOnClicKListeners2 = function _injectOnClicKListeners2() {
  var _this3 = this;

  (0, _toConsumableArray2.default)(this.taxi.children).map(function (c) {
    c.addEventListener("click", function (e) {
      _this3.input.value = e.target.getAttribute("value");
      _this3.taxi.innerHTML = "";
    });
  });
};

// var _default = Taxi;
// exports.default = _default;
exports.default = Taxi;