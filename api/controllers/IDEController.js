'use strict';
module.exports = {
  ide: function (req,res) {
    var IDE =
    {
      GUI: {
        menueItems: ['File', 'Edit']
      }
    };
    // res.json(IDE);
    res.view('ide');
  }
};
