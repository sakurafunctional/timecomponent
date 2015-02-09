/* jshint node: true */
/* jshint jquery: true */
/* jshint sub: true */
/* global window,document, $,alert,history */
'use strict';

var log = function(msg)
{
  //  console.log('appear:', msg);
};

//----------

var appear = function(val)
{
  log('--timecomponent-appear--');
  var W = this.W;

  var preObj = this;
  preObj.val = val;
  preObj.next();

  var newObj = preObj;

  return newObj;
};


module.exports = appear;
