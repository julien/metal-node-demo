'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var noop = function noop() {};

var outputTarget_ = {
  addEventListener: function addEventListener() {}
};

var buffer_ = [];
var output_ = {};
var nestingCount_ = 1;
var keepOpen_ = false;
var prettyPrint_ = '';
var doneCallback_ = void 0;

var push_ = function push_(token) {
  var close = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  buffer_.push(token);

  if (close) {
    output_.html = buffer_.slice().join('');
    buffer_ = [];
  }
};

var getOutput = function getOutput() {
  var flush = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

  if (flush) {
    output_.html = '';
  }
  var tmp = output_.html.slice();
  return tmp;
};

var attrsArray_ = function attrsArray_(data) {
  for (var i = 0, l = data.length; i < l; i += 2) {
    attr(data[i], data[i + 1]);
  }
};

/***
 * Defines a virtual attribute at this point of the DOM. This is only valid
 * when called between elementOpenStart and elementOpenEnd.
 *
 * @param {string} name
 * @param {*} value
 */
var attr = function attr(name, value) {
  push_(' ' + name + '="' + value + '"');
};

/**
 * Closes an open virtual Element.
 *
 * @param {NameOrCtorDef} nameOrCtor The Element's tag or constructor.
 * @return {!Element} The corresponding Element.
 */
var elementClose = function elementClose(nameOrCtor) {
  var close = false;
  nestingCount_--;
  if (nestingCount_ === 1) {
    close = true;
  }
  push_('</' + nameOrCtor + '>', close);

  return outputTarget_;
};

/**
 * Declares a virtual Element at the current location in the document that has
 * no children.
 * @param {NameOrCtorDef} nameOrCtor The Element's tag or constructor.
 * @param {?string=} key The key used to identify this element. This can be an
 *     empty string, but performance may be better if a unique value is used
 *     when iterating over an array of items.
 * @param {?Array<*>=} statics An array of attribute name/value pairs of the
 *     static attributes for the Element. These will only be set once when the
 *     Element is created.
 * @param {...*} var_args Attribute name/value pairs of the dynamic attributes
 *     for the Element.
 * @return {!Element} The corresponding Element.
 */
var elementVoid = function elementVoid(nameOrCtor, key, statics, var_args) {
  elementOpen(nameOrCtor, key, statics, var_args);
  return elementClose(nameOrCtor);
};

/**
 * @param {NameOrCtorDef} nameOrCtor The Element's tag or constructor.
 * @param {?string=} key The key used to identify this element. This can be an
 *     empty string, but performance may be better if a unique value is used
 *     when iterating over an array of items.
 * @param {?Array<*>=} statics An array of attribute name/value pairs of the
 *     static attributes for the Element. These will only be set once when the
 *     Element is created.
 * @param {...*} var_args, Attribute name/value pairs of the dynamic attributes
 *     for the Element.
 * @return {!Element} The corresponding Element.
 */
var elementOpen = function elementOpen(nameOrCtor, key, statics, var_args) {

  elementOpenStart(nameOrCtor, key, statics);

  if (Array.isArray(var_args)) {
    attrsArray_(var_args);
  }

  return elementOpenEnd();
};

/**
 * Closes an open tag started with elementOpenStart.
 * @return {!Element} The corresponding Element.
 */
var elementOpenEnd = function elementOpenEnd() {
  push_('>');
  nestingCount_++;

  return outputTarget_;
};

/**
 * Declares a virtual Element at the current location in the document. This
 * corresponds to an opening tag and a elementClose tag is required. This is
 * like elementOpen, but the attributes are defined using the attr function
 * rather than being passed as arguments. Must be folllowed by 0 or more calls
 * to attr, then a call to elementOpenEnd.
 * @param {NameOrCtorDef} nameOrCtor The Element's tag or constructor.
 * @param {?string=} key The key used to identify this element. This can be an
 *     empty string, but performance may be better if a unique value is used
 *     when iterating over an array of items.
 * @param {?Array<*>=} statics An array of attribute name/value pairs of the
 *     static attributes for the Element. These will only be set once when the
 *     Element is created.
 */
var elementOpenStart = function elementOpenStart(nameOrCtor, key, statics) {
  push_('<' + nameOrCtor);

  // TODO: probably do something useful with key
  if (Array.isArray(statics)) {
    attrsArray_(statics);
  }
};

var patch = function patch(node, description, data) {

  var fn = typeof description === 'function' ? description : noop;
  if (typeof node === 'function') {
    node(function () {
      return fn(data);
    });
  } else {
    fn(data);
  }

  var output = getOutput();
  if (Object.prototype.hasOwnProperty.call(node, 'innerHTML')) {
    node.innerHTML = output;
  }
  if (doneCallback_) {
    doneCallback_(output_);
  }
};

var patchOuter = patch;
var patchInner = patch;

/**
 * Declares a virtual Text at this point in the document.
 *
 * @param {string|number|boolean} value The value of the Text.
 * @param {...(function((string|number|boolean)):string)} var_args
 *     Functions to format the value which are called only when the value has
 *     changed.
 * @return {!Text} The corresponding text node.
 */
var text = function text(value, var_args) {
  var formatted = value;

  if (Array.isArray(var_args)) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = var_args[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var v = _step.value;

        formatted = v(formatted);
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }

  push_('' + formatted);
};

var setOutput = function setOutput(prettyPrint, output, doneCallback, keepOpen) {
  prettyPrint_ = prettyPrint;
  output_ = output ? output : {};
  doneCallback_ = typeof callback === 'function' ? callback : undefined;
  keepOpen_ = keepOpen;
};

var setOutputTarget = function setOutputTarget(obj, merge) {
  if (merge) {
    Object.assign(outputTarget_, obj);
  } else {
    outputTarget_ = obj;
  }
};

exports.elementOpenStart = elementOpenStart;
exports.elementOpenEnd = elementOpenEnd;
exports.elementOpen = elementOpen;
exports.elementVoid = elementVoid;
exports.elementClose = elementClose;
exports.text = text;
exports.attr = attr;
exports.patch = patch;
exports.patchInner = patchInner;
exports.patchOuter = patchOuter;
exports.getOutput = getOutput;
exports.setOutput = setOutput;
exports.setOutputTarget = setOutputTarget;