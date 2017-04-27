/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from A.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace A.
 * @suppress {missingRequire}
 * @public
 */

goog.module('A.incrementaldom');

/** @suppress {extraRequire} */
goog.require('goog.asserts');
/** @suppress {extraRequire} */
goog.require('goog.i18n.bidi');
/** @suppress {extraRequire} */
goog.require('goog.string');
/** @suppress {extraRequire} */
var soy = goog.require('soy');
/** @suppress {extraRequire} */
var soydata = goog.require('soydata');
var IncrementalDom = goog.require('incrementaldom');
var ie_open = IncrementalDom.elementOpen;
var ie_close = IncrementalDom.elementClose;
var ie_void = IncrementalDom.elementVoid;
var ie_open_start = IncrementalDom.elementOpenStart;
var ie_open_end = IncrementalDom.elementOpenEnd;
var itext = IncrementalDom.text;
var iattr = IncrementalDom.attr;
var soyIdom = goog.require('soy.idom');
var dyn = soyIdom.renderDynamicContent;
var print = soyIdom.print;

var $templateAlias1 = Soy.getTemplate('B.incrementaldom', 'render');


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ignored, opt_ijData) {
  ie_open('div');
    itext('A');
    $templateAlias1(null, null, opt_ijData);
  ie_close('div');
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'A.render';
}

exports.render.params = [];
exports.render.types = {};
templates = exports;
return exports;

});

class A extends Component {}
Soy.register(A, templates);
export { A, templates };
export default templates;
/* jshint ignore:end */
