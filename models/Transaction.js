const mongoose = require('mongoose')

const TransactionSchema = new mongoose.Schema({
  title: {
    type: 'String',
    required: true,
  },
  type: {
    type: Boolean
  },
  amount: {
    type: Number,
  },
  date: {
    type: Date,
  },
  description: {
    type: 'String',
    text: true,
  },
  user: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  category: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
    },
  ],
})

const Transaction = mongoose.model('Transaction', TransactionSchema);

module.exports = Transaction
