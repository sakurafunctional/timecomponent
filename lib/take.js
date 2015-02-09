/* jshint node: true */
/* jshint jquery: true */
/* jshint sub: true */
/* global window,document, $,alert,history */
'use strict';

var log = function(msg)
{
  console.log('timecomponent-take:', msg);
};

var take = function(n)
{
  var W = this.W;

  var preObj = this;
  var pre_tl = preObj.tl;

  var newObj = preObj;

  newObj.tl = function()
  {

    log('--take--');
    var preTl = pre_tl();

    var newTl = {
      beacon: false,
      next: function()
      {
        return (this.beacon = !this.beacon);
      },
      stop: preTl.stop
    };

    var i = 0;

    W.watch(preTl, 'beacon', function()
    {
      if (i < n)
      {
        newTl.val = preTl.val;
        i++;

        newTl.next();
      }
      else
      {
        W.unwatch(preTl, 'beacon');

        preTl.stop();
      }
    });

    return newTl;
  };

  return newObj;
};


module.exports = take;
