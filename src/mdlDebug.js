/**
 * @license
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
 

var MDLDEBUG = {
  colorClasses: function() {
      var found = [];
      var classes = [];
      var colors = [
        'red',
        'pink',
        'purple',
        'deep-purple',
        'indigo',
        'blue',
        'light-blue',
        'cyan',
        'teal',
        'green',
        'light-green',
        'lime',
        'yellow',
        'amber',
        'orange',
        'deep-orange',
        'brown',
        'grey',
        'blue-grey',

      ];
      var levels = [
        '50',
        '100',
        '200',
        '300',
        '400',
        '500',
        '600',
        '700',
        '800',
        '900',
        'A100',
        'A200',
        'A400',
        'A700'
      ];
      var nonPalette = [
        'mdl-color--black',
        'mdl-color-text--black',
        'mdl-color-text--white',
        'mdl-color--white'
      ];
      colors.forEach(function(color) {
          var colorClass = 'mdl-color--' + color;
          var textClass = 'mdl-color-text--' + color;
          classes.push(colorClass);
          classes.push(textClass);
          levels.forEach(function(level) {
              classes.push(colorClass + '-' + level);
              classes.push(textClass + '-' + level);
          });
      });
      nonPalette.forEach(function(selector) {
          classes.push(selector);
      });
      classes.forEach(function(selector) {
        Array.prototype.slice.call(document.querySelectorAll('.' + selector)).forEach(function(node) {
            found.push(node);
        });
      });
      if(found.length > 0) {
          console.warn('Using deprecated color classes.');
      }
  },
  deprecatedFooterSelectors: function() {
    var nodes = [];
    var miniPrefix = 'mdl-mini-footer';
    var megaPrefix = 'mdl-mega-footer';
    var selectors = [
      miniPrefix + '--link-list',
      miniPrefix + '--left-section',
      miniPrefix + '--right-section',
      miniPrefix + '--social-btn',
      megaPrefix + '--top-section',
      megaPrefix + '--middle-section',
      megaPrefix + '--bottom-section',
      megaPrefix + '--left-section',
      megaPrefix + '--right-section',
      megaPrefix + '--social-btn',
      megaPrefix + '--drop-down-section',
      megaPrefix + '--heading-checkbox',
      megaPrefix + '--heading',
      megaPrefix + '--link-list'
    ];
    selectors.forEach(function(item) {
      Array.prototype.slice.call(document.querySelectorAll('.' + item)).forEach(function(node) {
        nodes.push(node);
      });
    });
    if(nodes.length > 0) {
      console.warn('Deprected footer classes are being used. Please check the documentation for updated classes to use.');
    }
  }
};


(function() {
  'use strict';
  for (var property in MDLDEBUG) {
    MDLDEBUG[property]();
  }
}());
