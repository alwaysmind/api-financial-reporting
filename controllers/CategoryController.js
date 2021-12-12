const Category = require('../models/Category')
const { validationResult } = require('express-validator')

exports.getAllCategory = async (req, res) => {
  try {
    const categories = await Category.find({ $or: [ {user: req.user.user_id}, {user: []} ] }).exec()

    res
      .status(200)
      .json({ message: 'Success get all categories', data: categories })
  } catch (error) {
    res
      .status(400)
      .json({ message: 'Failed get all categories', error: error.message })
  }
}

exports.postCreateCategory = async (req, res) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res
        .status(400)
        .json({ message: 'Failed to add category', error: errors.array() })
    }

    const category = await Category.create({
      ...req.body,
      user: req.user.user_id,
    })

    res.status(201).json({ message: 'Success add category', data: category })
  } catch (error) {
    res
      .status(400)
      .json({ message: 'Failed to add Category', error: error.message })
  }
}

exports.putUpdateCategory = async (req, res) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res
        .status(400)
        .json({ message: 'Failed to update category', error: errors.array() })
    }

    const category = await Category.findByIdAndUpdate(
      req.params.id,
      req.body
    ).exec()

    res.json({ message: 'update category successfully', data: category })
  } catch (error) {
    res
      .status(400)
      .json({ message: 'Failed to add category', error: error.message })
  }
}

exports.deleteCategory = async (req, res) => {
  try {
    const category = await Category.findByIdAndRemove(req.params.id).exec()

    res.json({ message: 'category delete successfully', data: category })
  } catch (error) {
    res
      .status(400)
      .json({ message: 'Failed to delete category', error: error.message })
  }
}
