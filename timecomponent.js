/* jshint node: true */
/* jshint jquery: true */
/* jshint sub: true */
/* global window,document, $,alert,history */
'use strict';

var log = function(msg)
{
  //  console.log('core:', msg);
};

var type = function(obj)
{

  return Object
    .prototype
    .toString
    .call(obj)
    .slice(8, -1);
};

//----------
var _ = require('lodash');

var W = require('watchjs');

var moment = require('moment');

log('=== spacetimeline initialization ===');

var objTemplate = {};


log('functions loading');
//log(functionsDir);

/*
if (typeof window === 'undefined')
{
  log('loading node-mode');

  var dir = __dirname + '/lib';
  log(dir);
  var files = require('fs').readdirSync(dir);
  log(files);

  files.map(function(file)
  {
    var moduleName = file.split('.')[0];
    objTemplate[moduleName] =
      require(dir + '/' + moduleName);

    log(moduleName + ' loaded');
  });


}
*/

['appear','compute','map','take','value']
   .map(function(moduleName)
    {
      objTemplate[moduleName] =
      require('./lib/' + moduleName);

      log(moduleName + ' loaded');
    });


//=======================
var spacetimeline = function(seq)
{
  log('======core called=======');
  var newObj = _.cloneDeep(objTemplate);

  newObj.W = W;
  /*  log('--seq--');
  log(seq);
  log('------');*/
  newObj.beacon = false;
  newObj.val = null;

  log(newObj);

  newObj.next = function()
  {
    return (newObj.beacon = !newObj.beacon);
  };

  if (!seq) //emply call,__()
  {
    newObj.type = 'null';

    log('seq type is ...');
    log(newObj.type);

    newObj.timelineCapacity = null;
    // 　　
    return newObj;
  }
  else if (type(seq) === 'Object')
  {
    newObj.type = 'Object';

    log('seq type is ...');
    log(newObj.type);

    newObj.timelineCapacity = seq;
    // 　　
    return newObj;

  }

  else if (seq === 'NOW') //call __('NOW')
  {
    return moment().utc();
  }

};


module.exports = spacetimeline;
