const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  email: {
    type: 'String',
    required: true,
  },
  username: {
    type: 'String',
    required: true,
    default: 'Fire',
  },
  name: {
    type: 'String',
    required: true,
  },
  avatar: {
    type: 'String',
    text: true,
  },
  categories: [{ 
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category"
  }],
  transactions: [{ 
    type: mongoose.Schema.Types.ObjectId,
    ref: "Transaction"
  }],
  budgets: [{ 
    type: mongoose.Schema.Types.ObjectId,
    ref: "Budget"
  }]
})

const User = mongoose.model('User', UserSchema);

module.exports = User
