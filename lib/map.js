/* jshint node: true */
/* jshint jquery: true */
/* jshint sub: true */
/* global window,document, $,alert,history */
'use strict';

var log = function(msg)
{
  console.log('map:', msg);
};

//----------

var _ = require('lodash');

var map = function(f)
{
  log('--timecomponent-map-');
  var W = this.W;

  var preObj = this;
  var newObj = _.cloneDeep(preObj);

  W.watch(preObj, 'beacon', function()
  {
    newObj.val = f(preObj.val);
    newObj.beacon = preObj.beacon;
  });

  return newObj;
};


module.exports = map;
