/* jshint node: true */
/* jshint jquery: true */
/* jshint sub: true */
/* global window,document, $,alert,history */
'use strict';

var log = function(msg)
{
  //  console.log('compute:', msg);
};

var compute = function(f)
{
  log('--timecomponent-compute--');
  var W = this.W;

  var preObj = this;

  W.watch(preObj, 'beacon', function()
  {

    var moment = require('moment');

    var utc = moment().utc();

    var YY = utc.year() - 2000 + '';
    var MM = utc.month() + 1 + '';
    var DD = utc.date() + '';
    var HH = utc.hour() + '';
    var mm = utc.minute() + '';
    var ss = utc.second() + '';
    var msc = utc.millisecond() + '';

    log(YY);
    log(MM);
    log(DD);
    log(HH);
    log(mm);
    log(ss);
    log(msc);

    var YY0;
    var MM0;
    var DD0;
    var HH0;
    var mm0;
    var ss0;
    var msc0;

    if (preObj.timelineCapacity === null)
    {
      log('timelineCapacity ===null');
    }
    else
    {
      var utc0 = utc.subtract(preObj.timelineCapacity);

      YY0 = utc0.year() - 2000 + '';
      MM0 = utc0.month() + 1 + '';
      DD0 = utc0.date() + '';
      HH0 = utc0.hour() + '';
      mm0 = utc0.minute() + '';
      ss0 = utc0.second() + '';
      msc0 = utc0.millisecond() + '';

      log(YY0);
      log(MM0);
      log(DD0);
      log(HH0);
      log(mm0);
      log(ss0);
      log(msc0);
    }

    if (preObj[YY] === undefined)
    {
      preObj[YY] = {};
    }

    if (preObj[YY][MM] === undefined)
    {
      preObj[YY][MM] = {};
    }

    if (preObj[YY][MM][DD] === undefined)
    {
      preObj[YY][MM][DD] = {};
    }

    if (preObj[YY][MM][DD][HH] === undefined)
    {
      preObj[YY][MM][DD][HH] = {};
    }

    if (preObj[YY][MM][DD][HH][mm] === undefined)
    {
      preObj[YY][MM][DD][HH][mm] = {};
    }

    if (preObj[YY][MM][DD][HH][mm][ss] === undefined)
    {
      preObj[YY][MM][DD][HH][mm][ss] = {};
    }

    preObj[YY][MM][DD][HH][mm][ss][msc] = preObj.val;


    // ------------
    try
    {
      if (YY > YY0)
        for (var iYY = 0; iYY < YY0; iYY++)
        {
          delete preObj[iYY];
        }
      else if (MM > MM0)
        for (var iMM = 0; iMM < MM0; iMM++)
        {
          delete preObj[YY0][iMM];
        }
      else if (DD > DD0)
        for (var iDD = 0; iDD < DD0; iDD++)
        {
          delete preObj[YY0][MM0][iDD];
        }

      else if (HH > HH0)
        for (var iHH = 0; iHH < HH0; iHH++)
        {
          delete preObj[YY0][MM0][DD0][iHH];
        }

      else if (mm > mm0)
      {
        log('deleting mm ' + mm0);
        for (var imm = 0; imm < mm0; imm++)
        {
          delete preObj[YY0][MM0][DD0][HH0][imm];
        }
      }

      else if (ss > ss0)
      {
        log('deleting ss ' + ss0);
        for (var iss = 0; iss < ss0; iss++)
        {
          delete preObj[YY0][MM0][DD0][HH0][mm0][iss];
        }
      }
    }
    catch (e)
    {
      log('deletion error');
    }
    //-------------

    f(preObj.val); //calc f on change
    //---------------
  });

  return true; //seq;

};

module.exports = compute;
