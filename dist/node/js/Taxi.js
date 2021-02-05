/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 228:
/***/ ((module) => {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),

/***/ 858:
/***/ ((module) => {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ 646:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayLikeToArray = __webpack_require__(228);

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ 926:
/***/ ((module) => {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ 575:
/***/ ((module) => {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ 913:
/***/ ((module) => {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ 713:
/***/ ((module) => {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ 860:
/***/ ((module) => {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ 884:
/***/ ((module) => {

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ 521:
/***/ ((module) => {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ 206:
/***/ ((module) => {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ 38:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayWithHoles = __webpack_require__(858);

var iterableToArrayLimit = __webpack_require__(884);

var unsupportedIterableToArray = __webpack_require__(379);

var nonIterableRest = __webpack_require__(521);

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ 319:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayWithoutHoles = __webpack_require__(646);

var iterableToArray = __webpack_require__(860);

var unsupportedIterableToArray = __webpack_require__(379);

var nonIterableSpread = __webpack_require__(206);

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ 8:
/***/ ((module) => {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ 379:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayLikeToArray = __webpack_require__(228);

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),

/***/ 757:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(666);


/***/ }),

/***/ 666:
/***/ ((module) => {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
(() => {
"use strict";

// UNUSED EXPORTS: default

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/typeof.js
var helpers_typeof = __webpack_require__(8);
var typeof_default = /*#__PURE__*/__webpack_require__.n(helpers_typeof);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(757);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(926);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(319);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(575);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(913);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(713);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(38);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);
;// CONCATENATED MODULE: ./src/main/js/keyPress/KeyPress.js



var KeyPress = /*#__PURE__*/function () {
  function KeyPress(keyCode, action, validation) {
    classCallCheck_default()(this, KeyPress);

    this.action = action;
    this.validation = validation;
    this.keyCode = keyCode;
  }

  createClass_default()(KeyPress, [{
    key: "handleAction",
    value: function handleAction(taxi, e) {
      try {
        if (this.validation !== undefined && !this.validation(taxi, e)) return;
        return this.action(taxi, e);
      } catch (err) {}
    }
  }]);

  return KeyPress;
}();


;// CONCATENATED MODULE: ./src/main/js/keyPress/utils.js

function getCurrNextPrev(taxi) {
  /* Get Selected */
  var children = taxi.children;
  var max = children.length;
  var selected = taxi.querySelector(".is-selected");
  /* Indices */

  var current = toConsumableArray_default()(children).indexOf(selected);

  var next = getNext(current, max);
  var prev = getPrev(current);
  return [current, next, prev];
}
function getNext(current, max) {
  return current + 1 < max ? current + 1 : current;
}
function getPrev(current) {
  return current - 1 > 0 ? current - 1 : 0;
}
function cleanUp(taxi) {
  taxi.querySelectorAll(".is-selected").forEach(function (i) {
    return i.classList.toggle("is-selected");
  });
}
;// CONCATENATED MODULE: ./src/main/js/keyPress/KeyPress40.js



/* harmony default export */ const KeyPress40 = (new KeyPress(40, action, function (taxi, e) {
  return true;
}));

function action(taxiJs, e) {
  var _utils$getCurrNextPre = getCurrNextPrev(taxiJs.taxi),
      _utils$getCurrNextPre2 = slicedToArray_default()(_utils$getCurrNextPre, 2),
      next = _utils$getCurrNextPre2[1];

  cleanUp(taxiJs.taxi);
  taxiJs.taxi.children[next].classList.toggle("is-selected");
}
;// CONCATENATED MODULE: ./src/main/js/keyPress/KeyPress38.js



/* harmony default export */ const KeyPress38 = (new KeyPress(38, KeyPress38_action, validation));

function KeyPress38_action(taxiJs, e) {
  var _utils$getCurrNextPre = getCurrNextPrev(taxiJs.taxi),
      _utils$getCurrNextPre2 = slicedToArray_default()(_utils$getCurrNextPre, 3),
      prev = _utils$getCurrNextPre2[2];

  cleanUp(taxiJs.taxi);
  taxiJs.taxi.children[prev].classList.toggle("is-selected");
}

function validation(taxiJs, e) {
  return true;
}
;// CONCATENATED MODULE: ./src/main/js/keyPress/KeyPress9.js


/* harmony default export */ const KeyPress9 = (new KeyPress(9, KeyPress9_action, KeyPress9_validation));

function KeyPress9_action(taxiJs, e) {
  KeyPress40.handleAction(taxiJs, e);
}

function KeyPress9_validation(taxiJs, e) {
  return true;
}
;// CONCATENATED MODULE: ./src/main/js/keyPress/KeyPress13.js

/* harmony default export */ const KeyPress13 = (new KeyPress(13, KeyPress13_action, KeyPress13_validation));

function KeyPress13_action(taxiJs, e) {
  var selected = taxiJs.taxi.querySelector(".is-selected");
  if (!selected) return;
  taxiJs.input.value = selected.getAttribute("value");
  taxiJs.taxi.innerHTML = "";
}

function KeyPress13_validation(taxiJs, e) {
  return true;
}
;// CONCATENATED MODULE: ./src/main/js/keyPress/index.js






var keys = [KeyPress38, KeyPress40, KeyPress9, KeyPress13];

var KeyHandler = /*#__PURE__*/function () {
  function KeyHandler(keys) {
    var _this = this;

    classCallCheck_default()(this, KeyHandler);

    this.map = new Map();
    keys.forEach(function (k) {
      return _this.bind(k.keyCode, k);
    });
  }

  createClass_default()(KeyHandler, [{
    key: "bind",
    value: function bind(_keyCode, _class) {
      this.map.set(_keyCode, _class);
    }
  }, {
    key: "has",
    value: function has(_key) {
      return this.map.has(_key);
    }
  }, {
    key: "handle",
    value: function handle(taxi, e) {
      var hasKey = this.map.has(e.which);

      if (hasKey) {
        return this.map.get(e.which).handleAction(taxi, e);
      }
    }
  }]);

  return KeyHandler;
}();

/* harmony default export */ const keyPress = (new KeyHandler(keys));
;// CONCATENATED MODULE: ./src/main/js/Taxi.js








function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
 * @property {array} plugins - array of plugins
 * @property {devOps} dev - developer options & experimental features
 */

/**
 * @typedef {Object} devOps
 * @property {boolean} closeOnClickAway - hides auto-complete options on click away
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

  /**
   *
   * Default TaxiOptions, to be used incase of none given.
   * @property {*} data - ["Volkwagen", "Mercedes", "Daimler"]
   * @property {query} query - {@link taxiquery}
   * @property {devOps} devOps - experimental features
   */

  /**
   * @param {HTMLInputElement} input - input element
   * @param {HTMLElement} taxi - taxi element
   * @param {TaxiOptions} [options] - optional settings by {@link TaxiOptions}
   */
  function Taxi(input, taxi, options) {
    classCallCheck_default()(this, Taxi);

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

    this.initEventlisteners(this.options.devOps);
  }
  /**
   * Inject default {@link TaxiOptions} and modify if needed.
   * @param {TaxiOptions} [options]
   */


  createClass_default()(Taxi, [{
    key: "injectTaxiOptions",
    value: function injectTaxiOptions(options) {
      /* Grab defaults */
      var injectedOptions = _objectSpread({}, Taxi.TaxiOptionsDefaults);
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
    key: "injectOnClicKListeners",
    value: function injectOnClicKListeners() {
      var _this = this;

      toConsumableArray_default()(this.taxi.children).map(function (c) {
        c.addEventListener("click", function (e) {
          _this.input.value = e.target.getAttribute("value");
          _this.taxi.innerHTML = "";
        });
      });
    }
    /**
     * Initializes eventlisteners.
     * @param {devOps} devOps
     * @returns {void}
     */

  }, {
    key: "initEventlisteners",
    value: function () {
      var _initEventlisteners = asyncToGenerator_default()( /*#__PURE__*/regenerator_default().mark(function _callee(devOps) {
        var _this2 = this;

        var closeOnClickAway;
        return regenerator_default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                closeOnClickAway = devOps.closeOnClickAway;
                this.input.addEventListener("keydown", function (e) {
                  return _this2.handleKeyDown(e);
                });
                this.input.addEventListener("keyup", function (e) {
                  return _this2.handleKeyUp(e);
                });
                closeOnClickAway && document.addEventListener("click", function (e) {
                  return _this2.handleClick(e);
                });
                this.input.addEventListener("focusin", function (e) {
                  return _this2.taxi.style.visibility = "visible";
                });

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function initEventlisteners(_x) {
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
      var _this3 = this;

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

      var copy = toConsumableArray_default()(this.options.data);

      var filtered = copy.filter(function (entry) {
        return _this3.options.query(entry, value);
      });
      var html = filtered.map(function (entry) {
        return _this3.options.toHtml(entry);
      }).join("\n");
      /* Display */

      this.taxi.innerHTML = html;
      this.injectOnClicKListeners();
    }
    /**
     * Hanled "keydown" event, meaning only `non` text-input actions.
     * Handled keycodes: `40, 38, 9, 13`.
     * @param {Event} e
     */

  }, {
    key: "handleKeyDown",
    value: function handleKeyDown(e) {
      /* Is Valid Key? */
      if (!keyPress.has(e.which)) return;
      /* KeyHandler Validation  */

      if (!this.hasMinChar(e)) {
        this.taxi.innerHTML = "";
        return;
      }
      /* Prevent defaults */


      e.preventDefault();
      /* Handle event */

      keyPress.handle(this, e);
    }
    /**
     *
     * @param {Event} e
     */

  }, {
    key: "handleClick",
    value: function handleClick(e) {
      var isChildNode = e.path.includes(this.taxi) && e.path[0] !== this.taxi;
      var isInputNode = e.path.includes(this.input);
      if (isChildNode) return;
      if (isInputNode) return; // this will lead to problems due to binding to document.
      // TODO Idea: dispose of eventlistener on return
      // TODO Idea: and add on focusIn

      this.taxi.style.visibility = "hidden";
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
      if (this.options.showWarnings && minChar > Taxi.TaxiOptionsRecommended.minChar) {
        console.warn("You are not using the recommended range of minimum characters.\nRecommended range: 0 - ".concat(Taxi.TaxiOptionsRecommended.minChar));
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
      if (typeof_default()(boo) == Boolean) {
        this.options.showWarnings = boo;
      }
    }
  }]);

  return Taxi;
}();

defineProperty_default()(Taxi, "Query", {
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

defineProperty_default()(Taxi, "ToHtml", Object.freeze({
  classic: function classic(entry) {
    return "<div class=\"taxi-card\" value=\"".concat(entry, "\">\n        <strong value=\"").concat(entry, "\">").concat(entry, "</strong>\n      </div>");
  }
}));

defineProperty_default()(Taxi, "TaxiOptionsDefaults", Object.freeze({
  data: ["Volkwagen", "Mercedes", "Daimler"],
  query: Taxi.Query.strict,
  toHtml: Taxi.ToHtml.classic,
  minChar: 1,
  showWarnings: true,
  plugins: [],
  devOps: {
    closeOnClickAway: false
  }
}));

defineProperty_default()(Taxi, "TaxiOptionsRecommended", Object.freeze({
  minChar: 5
}));

/* harmony default export */ const js_Taxi = ((/* unused pure expression or super */ null && (Taxi)));
global.Taxi = Taxi;
})();

/******/ })()
;