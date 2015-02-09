/* jshint node: true */
/* jshint jquery: true */
/* jshint sub: true */
/* global window,document, $,alert,history */
'use strict';

var log = function(msg)
{
  //console.log('value:', msg);
};

var value = function(utc)
{
  log('--timecomponent-value--');

  var Obj = this;

  var YY = utc.year() - 2000;
  var MM = utc.month() + 1;
  var DD = utc.date();
  var HH = utc.hour();
  var mm = utc.minute();
  var ss = utc.second();
  var msc = utc.millisecond();

  log(YY);
  log(MM);
  log(DD);
  log(HH);
  log(mm);
  log(ss);
  log(msc);


  var iYY = YY;
  while (iYY >= 0)
  {
    if (Obj[iYY] === undefined)
    {
      log('YY NOT found');
      iYY--;
      MM = 12;

    }
    else
    {
      log('YY found');

      var iMM = MM;
      while (iMM >= 1)
      {
        if (Obj[iYY][iMM] === undefined)
        {
          log('MM NOT found');
          iMM--;
          DD = 31;

        }
        else
        {
          log('MM found');

          var iDD = DD;
          while (iDD >= 1)
          {
            if (Obj[iYY][iMM][iDD] === undefined)
            {
              log('DD NOT found');
              iDD--;
              HH = 23;

            }
            else
            {
              log('DD found');

              var iHH = HH;
              while (iHH >= 0)
              {
                if (Obj[iYY][iMM][iDD][iHH] === undefined)
                {
                  log('HH NOT found');
                  iHH--;
                  mm = 59;

                }
                else
                {
                  log('HH found');

                  var imm = mm;
                  while (imm >= 0)
                  {
                    if (Obj[iYY][iMM][iDD][iHH][imm] === undefined)
                    {
                      log('mm NOT found');
                      imm--;
                      ss = 59;

                    }
                    else
                    {
                      log('mm found');

                      var iss = ss;
                      while (iss >= 0)
                      {
                        if (Obj[iYY][iMM][iDD][iHH][imm][iss] === undefined)
                        {
                          log('ss NOT found');
                          iss--;
                          msc = 999;
                        }
                        else
                        {
                          log('ss found');

                          var imsc = msc;
                          while (imsc >= 0)
                          {

                            log(imsc);
                            if (Obj[iYY][iMM][iDD][iHH][imm][iss][imsc] === undefined)
                            {
                              log('msc NOT found');
                              imsc--;

                            }
                            else
                            {
                              log('msc found');

                              return Obj[iYY][iMM][iDD][iHH][imm][iss][imsc];

                            }
                          }

                          iss--;
                          msc = 999;

                        }
                      }
                      imm--;
                      ss = 59;
                    }
                  }
                  iHH--;
                  mm = 59;
                }
              }
              iDD--;
              HH = 23;
            }
          }
          iMM--;
          DD = 31;

        }
      }
      iYY--;
      MM = 12;
    }
  }

  return null;

};

module.exports = value;
