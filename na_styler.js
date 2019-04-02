"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 12
   Case Problem 1

   Author: Justin Aybar
   Date: 4.2.19 

   Filename: na_styler.js

   Functions
   =========
   
   setStyles()
      Sets up the style sheets and the style sheet switcher.
      
   randInt(size)
      Returns a random integer from 0 up to size-1.

*/
window.addEventListener("load", setStyles);

function setStyles() {
      var styleNum = randInt(5);
      var link = document.createElement("link");
      link.setAttribute("rel", "stylesheet");
      link.setAttribute("id", "fancySheet");
      link.setAttribute("href", "na_style_" + styleNum + ".css");
      document.head.appendChild(link);

      var figBox = document.createElement("figure");
      figBox.setAttribute("id", "styleThumbs");
      document.getElementById("box").appendChild(figBox);

      for (var i = 0; i < 5; i++) {
            var sheetImg = document.createElement("sheetImg");
            sheetImg.setAttribute("src", "na_small" + i + ".png");
            sheetImg.setAttribute("alt", "na_style_" + i + ".css");

            sheetImg.addEventListener('click', (e) => {
                  link.setAttribute("href", e.target.alt);
            });
            figBox.appendChild(sheetImg);
      }

      var styleThumbs = document.createElement("style");
      document.head.appendChild(styleThumbs);

      document.styleSheets[document.styleSheets.length - 1].insertRule("figure#styleThumbs {\
            position: absolute; \
            left: 0px; \
            bottom: 0px; \
      }", 0);

      document.styleSheets[document.styleSheets.length - 1].insertRule("figure#styleThumbs img { \
            outline: 1px solid black; \
            cursor: pointer; \
            opacity: 0.75; \
      }", 1);

      document.styleSheets[document.styleSheets.length - 1].insertRule(
            "figure#styleThumbs img:hover { \
            outline: 1px solid red; \
            opacity: 1.0; \
            }", 2);

}

function randInt(size) {
      return Math.floor(size * Math.random());
}