/* jshint node: true */
/* jshint jquery: true */
/* jshint sub: true */
/* global window,document, $,alert,history */

"use strict";

var ___ = require('./timecomponent');
var moment = require('moment');

var timelineCapacity = moment.duration(10, 'seconds');

var ___a = ___(timelineCapacity);
var ___b = ___(timelineCapacity);


var f = function()
{
  ___a.appear(___a.value(___('NOW')) + 1);
};

var interval = setInterval(f, 1000);

___a.compute(function(x)
{
  ___b.appear(x * 5);
  console.log(x);
});

___b.compute(function(x)
{
  console.log(x);
});

/*
(function() {

  var timelineCapacity = moment.duration(10, 'seconds');

  var ___cursor = ___(timelineCapacity);

  var onMouseMove = function(e) {

    var cursor = {
      x: e.clientX,
      y: e.clientY
    };

    ___cursor.appear(cursor);
  };

  document.addEventListener("mousemove", onMouseMove);

  // here is the final part where pure logic meets our physical world
  // in lazy evaluation context, this corresponds to  `toArray()`
  ___cursor.compute(function() {});

  var Dom1 = React.createClass({
    getInitialState: function() {
      return {cursor: {x:100,y:100}};
    },
    tick: function() {
      this.setState({cursor: ___cursor.value(___('NOW').subtract(1, 'seconds'))});
    },
    componentDidMount: function() {
      this.interval = setInterval(this.tick, 10);
    },
    componentWillUnmount: function() {
      clearInterval(this.interval);
    },
    render: function() {
      return ( <div> <svg height = "100%"  width = "100%" >
      <circle cx = {  this.state.cursor.x  }  cy = {  this.state.cursor.y }  r = "20"  fill = "red" />
      </svg></div>);
    }
  });

  React.render(<Dom1 />, document.body);

  //====================================
})();

*/
