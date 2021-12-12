const Budget = require('../models/Budget')
const { validationResult } = require('express-validator')

exports.getAllBudget = async (req, res) => {
  try {
    const budgets = await Budget.find()
      .populate('category')
      .populate('user')
      .exec()

    res.status(200).json({ message: 'Success get all budget', data: budgets })
  } catch (error) {
    res
      .status(400)
      .json({ message: 'Failed get all Budget', error: error.message })
  }
}

exports.postCreateBudget = async (req, res) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res
        .status(400)
        .json({ message: 'Failed to add budget', error: errors.array() })
    }

    const budget = await Budget.create({
      ...req.body,
      user: req.user.user_id,
    }).exec()

    res.status(201).json({ message: 'Success add budget', data: budget })
  } catch (error) {
    res
      .status(400)
      .json({ message: 'Failed to add Budget', error: error.message })
  }
}

exports.putUpdateBudget = async (req, res) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res
        .status(400)
        .json({ message: 'Failed to update budget', error: errors.array() })
    }

    const budget = await Budget.findByIdAndUpdate(
      req.params.id,
      req.body
    ).exec()

    res.json({ message: 'update budget successfully', data: budget })
  } catch (error) {
    res
      .status(400)
      .json({ message: 'Failed to add Budget', error: error.message })
  }
}

exports.deleteBudget = async (req, res) => {
  try {
    const budget = await Budget.findByIdAndRemove(req.params.id).exec()

    res.json({ message: 'budget delete successfully', data: budget })
  } catch (error) {
    res
      .status(400)
      .json({ message: 'Failed to delete Budget', error: error.message })
  }
}
