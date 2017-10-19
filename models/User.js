const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({ //mongo schema
  googleId: String,

});

mongoose.model('users', userSchema);