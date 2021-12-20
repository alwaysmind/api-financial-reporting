const Transaction = require('../models/Transaction')
const { validationResult } = require('express-validator')

exports.getAllTransaction = async (req, res) => {
  try {
    let whereCondition = { user: req.user.user_id }
    let query = req.query
    
    if (query.monthYear) {
      whereCondition.date = {
        $gte: new Date(query.monthYear + '-01'),
        $lte: new Date(query.monthYear + '-31'),
      }
    } else if (query.startDate && query.endDate) {
      whereCondition.date = {
        $gte: new Date(query.startDate),
        $lte: new Date(query.endDate),
      }
    } else if (query.startDate) {
      whereCondition.date = {
        $gte: new Date(query.startDate),
      }
    } else if (query.endDate) {
      whereCondition.date = {
        $lte: new Date(query.endDate),
      }
    }

    const transactions = await Transaction.find(whereCondition)
      .populate('category')
      .exec()

    res
      .status(200)
      .json({ message: 'Success get all transactions', data: transactions })
  } catch (error) {
    res
      .status(400)
      .json({ message: 'Failed get all transactions', error: error.message })
  }
}

exports.postCreateTransaction = async (req, res) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res
        .status(400)
        .json({ message: 'Failed to add transaction', error: errors.array() })
    }

    const transaction = await Transaction.create({
      ...req.body,
      user: req.user.user_id,
    })

    res
      .status(201)
      .json({ message: 'Success add transaction', data: transaction })
  } catch (error) {
    res
      .status(400)
      .json({ message: 'Failed to add transaction', error: error.message })
  }
}

exports.putUpdateTransaction = async (req, res) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({
        message: 'Failed to update transaction',
        error: errors.array(),
      })
    }

    const transaction = await Transaction.findByIdAndUpdate(
      req.params.id,
      req.body
    ).exec()

    res.json({ message: 'update transaction successfully', data: transaction })
  } catch (error) {
    res
      .status(400)
      .json({ message: 'Failed to add transaction', error: error.message })
  }
}

exports.deleteTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.findByIdAndRemove(
      req.params.id
    ).exec()

    res.json({ message: 'transaction delete successfully', data: transaction })
  } catch (error) {
    res
      .status(400)
      .json({ message: 'Failed to delete transaction', error: error.message })
  }
}
