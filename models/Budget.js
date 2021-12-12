const mongoose = require('mongoose')

const BudgetSchema = new mongoose.Schema({
  amount: {
    type: Number,
  },
  date: {
    type: Date,
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

const Budget = mongoose.model('Budget', BudgetSchema);

module.exports = Budget
