'use strict';
module.exports = {
  ide: function (req, res) {
    res.view('ide');
  },

  gui:function (req,res) {
    var GUI= {
      menueItems: ['File', 'Edit']
    };

    res.json(GUI);
  }
};
