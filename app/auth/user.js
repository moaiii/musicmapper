// /**
//  * Created by christophermelville on 13/07/2017.
//  */
// var mongoose = require('mongoose');

// var bcrypt = require('bcryptjs');


// var UserSchema = mongoose.Schema({
//   name: {
//     type: String,
//     index: true
//   },
//   email: {
//     type: String
//   },
//   username: {
//     type: String
//   },
//   password: {
//     type: String
//   }
// });

// var User = module.exports = mongoose.model('User', UserSchema);

// module.exports.createUser = function(newUser, callback) {
//   bcrypt.genSalt(10, function(err, salt) {
//     bcrypt.hash(newUser.password, salt, function(err, hash) {
//         newUser.password = hash;
//         newUser.save(callback);
//     });
//   });
// };