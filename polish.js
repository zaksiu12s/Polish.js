String.prototype.doZnakow = String.prototype.toString;
// String.prototype.charAt;
// String.prototype.charCodeAt;
// String.prototype.codePointAt;
// String.prototype.concat;
// String.prototype.endsWith;
// String.prototype.includes;
// String.prototype.indexOf;
// String.prototype.lastIndexOf;
// String.prototype.localeCompare;
// String.prototype.match;
// String.prototype.matchAll;
// String.prototype.normalize;
// String.prototype.padEnd;
// String.prototype.padStart;
// String.prototype.repeat;
// String.prototype.replace;
// String.prototype.replaceAll;
// String.prototype.search;
// String.prototype.slice;
// String.prototype.split;
// String.prototype.startsWith;
// String.prototype.substring;
// String.prototype.toLocaleLowerCase;
// String.prototype.toLocaleUpperCase;
// String.prototype.toLowerCase;
// String.prototype.toUpperCase;
// String.prototype.toString;
// String.prototype.trim;
// String.prototype.trimEnd;
// String.prototype.trimStart;
// String.prototype.valueOf;
// String.prototype.at;
// String.prototype.anchor;
// String.prototype.big;
// String.prototype.blink;
// String.prototype.bold;
// String.prototype.fixed;
// String.prototype.fontcolor;
// String.prototype.fontsize;
// String.prototype.italics;
// String.prototype.link;
// String.prototype.small;
// String.prototype.strike;
// String.prototype.sub;
// String.prototype.sup;

document.wezElementPrzezId = document.getElementById;
document.wezElementyPrzezKlase = document.getElementsByClassName;
Object.defineProperty(Element.prototype, "wewnetrznyTekst", {
  get: function () {
    return this.innerText;
  },
  set: function (value) {
    this.innerText = value;
  },
});
