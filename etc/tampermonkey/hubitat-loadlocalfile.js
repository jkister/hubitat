// ==UserScript==
// @name        Load Local File as an App, Driver, or Library
// @namespace   jkister
// @description Loads a local file into source editor
// @match       *://hubname/app/*
// @match       *://hubname/driver/*
// @match       *://hubname/library/*
// @version     1.1
// @grant       none
// @run-at      document-idle
// ==/UserScript==

// Add a button that allows the user to select a local file

const importPopup = document.getElementById('importPopup');

var div = document.createElement('div');
div.innerHTML = '<input id="file" type="file" onChange="loadFile()" accept=".groovy, .txt, .js" />';
importPopup.appendChild(div);

document.loadFile = function() {
 const file = document.querySelector("input[type=file]").files[0];
 const reader = new FileReader();

 reader.addEventListener("load", () => {
     myCodeMirror.setValue(reader.result);
     $('#importPopup').hide();
 }, false);

 if (file) {
  reader.readAsText(file);
 }
}
