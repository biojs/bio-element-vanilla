var tmpl = require('./bio-element-vanilla.html!text');

// Create a prototype for a new element that extends HTMLElement
var ElementProto = Object.create(HTMLElement.prototype);

// Setup our Shadow DOM and inject the template
ElementProto.createdCallback = function() {
  var root = this.createShadowRoot();
  // TODO: this is still work in progress
  //root.appendChild(document.importNode(tmpl.content, true));
  //var tmplDOM = document.createElement('template');
  // root.innerHTML = tmpl;
  //root.appendChild(tmplDOM);
  root.textContent = 'Bio-element vanilla is still work in progress';
  console.log('<bio-element-vanilla> created');
};

ElementProto.attributeChangedCallback = function(){
    console.log('vanilla attr changed', arguments);
};

ElementProto.attachedCallback = function(){
  console.log('vanilla attached');
};

ElementProto.detachedCallback = function(){
  console.log('vanilla detached');
};

// Register our new element
var BioElementVanilla = document.registerElement('bio-element-vanilla', {
  prototype: ElementProto
});

module.exports = BioElementVanilla;
