var bcrypt = require('bcrypt');

module.exports = {

  attributes: {
    name:{
      type:'string'
    },
    email:{
      type:'string',
      required:true,
      unique:true,
    },
    password:{
      type:'string',
      required:true,
    }
  },

  beforeCreate: function(user, cb) {
    bcrypt.genSalt(10, function(err, salt) {
      bcrypt.hash(user.password, salt, function(err, hash) {
        if (err) {
          console.log(err);
          cb(err);
        }else{
          user.password = hash;
          cb(null, user);
        }
      });
    });
  }
};

