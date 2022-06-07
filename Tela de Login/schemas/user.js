const mongoose =  require('mongoose');

const userSchema = mongoose.Schema({
    nome: String,
    email: String
});

const User = mongoose.model('user', userSchema);

module.exports = User;