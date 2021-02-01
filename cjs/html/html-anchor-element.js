'use strict';
const {stringAttribute, registerHTMLClass} = require('../utils.js');
const {HTMLElement} = require('./html-element.js');

const tagName = 'a';

/**
 * @implements globalThis.HTMLAnchorElement
 */
class HTMLAnchorElement extends HTMLElement {
  constructor(ownerDocument, localName = tagName) {
    super(ownerDocument, localName);
  }

  /* c8 ignore start */ // copy paste from img.src, already covered
  get href() { return stringAttribute.get(this, 'href'); }
  set href(value) { stringAttribute.set(this, 'href', value); }

  get download() { return stringAttribute.get(this, 'download'); }
  set download(value) { stringAttribute.set(this, 'download', value); }

  get target() { return stringAttribute.get(this, 'target'); }
  set target(value) { stringAttribute.set(this, 'target', value); }

  get type() { return stringAttribute.get(this, 'type'); }
  set type(value) { stringAttribute.set(this, 'type', value); }
  /* c8 ignore stop */

}

registerHTMLClass(tagName, HTMLAnchorElement);

exports.HTMLAnchorElement = HTMLAnchorElement;
