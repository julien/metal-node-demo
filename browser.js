
function noop() {}

function Document() {}

Document.prototype.createElement = function (tagName) {
  return Object.create(Element);
};

function DocumentFragment() {}

const Element = {
  ATTRIBUTE_NODE: 2,
  CDATA_SECTION_NODE: 4,
  COMMENT_NODE: 8,
  DOCUMENT_FRAGMENT_NODE: 11,
  DOCUMENT_NODE: 9,
  DOCUMENT_POSITION_CONTAINED_BY: 16,
  DOCUMENT_POSITION_CONTAINS: 8,
  DOCUMENT_POSITION_DISCONNECTED: 1,
  DOCUMENT_POSITION_FOLLOWING: 4,
  DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: 32,
  DOCUMENT_POSITION_PRECEDING: 2,
  DOCUMENT_TYPE_NODE: 10,
  ELEMENT_NODE: 1,
  ENTITY_NODE: 6,
  ENTITY_REFERENCE_NODE: 5,
  NOTATION_NODE: 12,
  PROCESSING_INSTRUCTION_NODE: 7,
  TEXT_NODE: 3,
  accessKey: '',
  addEventListener: noop,
  after: noop,
  align: noop,
  animate: noop,
  append: noop,
  appendChild: noop,
  assignedSlot: null,
  attachShadow: null,
  attributes: [],
  baseURI: '',
  before: noop,
  blur: noop,
  childElementCount: 0,
  childNodes: [],
  children: [],
  classList: [],
  className: '',
  click: noop,
  clientHeight: 0,
  clientLeft: 0,
  clientTop: 0,
  clientWidth: 0,
  cloneNode: noop,
  closest: noop,
  compareDocumentPosition: noop,
  contains: noop,
  contentEditable: 'inherit',
  createShadowRoot: noop,
  dataset: {},
  dir: '',
  dispatchEvent: noop,
  draggable: false,
  firstChild: null,
  firstElementChild: null,
  focus: noop,
  getAttribute: noop,
  getAttributeNS: noop,
  getAttributeNode: noop,
  getAttributeNodeNS: noop,
  getBoundingClientRect: noop,
  getClientRects: noop,
  getDestinationInsertionPoints: noop,
  getElementsByClassName: noop,
  getElementsByTagName: noop,
  getElementsByTagNameNS: noop,
  getRootNode: noop,
  hasAttribute: noop,
  hasAttributeNS: noop,
  hasAttributes: noop,
  hasChildNodes: noop,
  hasPointerCapture: noop,
  hidden: false,
  id: '',
  innerHTML: '',
  innerText: '',
  insertAdjacentElement: noop,
  insertAdjacentHTML: noop,
  insertAdjacentText: noop,
  insertBefore: noop,
  isConnected: false,
  isContentEditable: false,
  isDefaultNamespace: false,
  isEqualNode: noop,
  isSameNode: noop,
  lang: '',
  lastChild: null,
  lastElementChild: null,
  localName: '',
  lookupNamespaceURI: noop,
  lookupPrefix: noop,
  matches: noop,
  namespaceURI: '',
  nextElementSibling: null,
  nextSibling: null,
  nodeName: '',
  nodeType: 1,
  nodeValue: null,
  normalize: noop,
  offsetHeight: 0,
  offsetLeft: 0,
  offsetParent: null,
  offsetTop: 0,
  offsetWidth: 0,
  onabort: noop,
  onauxclick: noop,
  onbeforecopy: noop,
  onbeforecut: noop,
  onbeforepaste: noop,
  onblur: noop,
  oncancel: noop,
  oncanplay: noop,
  oncanplaythrough: noop,
  onchange: noop,
  onclick: noop,
  onclose: noop,
  oncontextmenu: noop,
  oncopy: noop,
  oncuechange: noop,
  oncut: noop,
  ondblclick: noop,
  ondrag: noop,
  ondragend: noop,
  ondragenter: noop,
  ondragleave: noop,
  ondragover: noop,
  ondragstart: noop,
  ondrop: noop,
  ondurationchange: noop,
  onemptied: noop,
  onended: noop,
  onerror: noop,
  onfocus: noop,
  ongotpointercapture: noop,
  oninput: noop,
  oninvalid: noop,
  onkeydown: noop,
  onkeypress: noop,
  onkeyup: noop,
  onload: noop,
  onloadeddata: noop,
  onloadedmetadata: noop,
  onloadstart: noop,
  onlostpointercapture: noop,
  onmousedown: noop,
  onmouseenter: noop,
  onmouseleave: noop,
  onmousemove: noop,
  onmouseout: noop,
  onmouseover: noop,
  onmouseup: noop,
  onmousewheel: noop,
  onpaste: noop,
  onpause: noop,
  onplay: noop,
  onplaying: noop,
  onpointercancel: noop,
  onpointerdown: noop,
  onpointerenter: noop,
  onpointerleave: noop,
  onpointermove: noop,
  onpointerout: noop,
  onpointerover: noop,
  onpointerup: noop,
  onprogress: noop,
  onratechange: noop,
  onreset: noop,
  onresize: noop,
  onscroll: noop,
  onsearch: noop,
  onseeked: noop,
  onseeking: noop,
  onselect: noop,
  onselectstart: noop,
  onshow: noop,
  onstalled: noop,
  onsubmit: noop,
  onsuspend: noop,
  ontimeupdate: noop,
  ontoggle: noop,
  onvolumechange: noop,
  onwaiting: noop,
  onwebkitfullscreenchange: noop,
  onwebkitfullscreenerror: noop,
  onwheel: noop,
  outerHTML: '',
  outerText: '',
  ownerDocument: null,
  parentElement: null,
  parentNode: null,
  prefix: null,
  prepend: noop,
  previousElementSibling: null,
  previousSibling: null,
  querySelector: noop,
  querySelectorAll: noop,
  releasePointerCapture: noop,
  remove: noop,
  removeAttribute: noop,
  removeAttributeNS: noop,
  removeAttributeNode: noop,
  removeChild: noop,
  removeEventListener: noop,
  replaceChild: noop,
  replaceWith: noop,
  requestPointerLock: noop,
  scrollHeight: 0,
  scrollIntoView: noop,
  scrollIntoViewIfNeeded: noop,
  scrollLeft: 0,
  scrollTop: 0,
  scrollWidth: 0,
  setAttribute: noop,
  setAttributeNS: noop,
  setAttributeNode: noop,
  setAttributeNodeNS: noop,
  setPointerCapture: noop,
  shadowRoot: null,
  slot: '',
  spellcheck: true,
  style: {},
  tabIndex: '',
  tagName: '',
  textContent: '',
  title: '',
  translate: noop,
  webkitMatchesSelector: noop,
  webkitRequestFullScreen: noop,
  webkitRequestFullscreen: noop,
  webkitdropzone: ''
};

module.exports.Document = Document;
module.exports.DocumentFragment = DocumentFragment;
module.exports.Element = Element;
module.exports.document = new Document();