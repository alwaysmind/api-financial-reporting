// router/todo.js
const express = require('express')
const router = express.Router()

const {
  createValidator,
  updateValidator,
} = require('../validator/CategoryValidator')

const {
  getAllCategory,
  postCreateCategory,
  putUpdateCategory,
  deleteCategory,
} = require('../controllers/CategoryController')

/**
 * @route GET api/category
 * @description get all category
 * @access public
 */
router.get('/', getAllCategory)

/**
 * @route POST api/category
 * @description add a new category
 * @access public
 */
router.post('/', createValidator, postCreateCategory)

/**
 * @route PUT api/category/:id
 * @description update category
 * @access public
 */
router.put('/:id', updateValidator, putUpdateCategory)

/**
 * @route DELETE api/category/:id
 * @description delete category
 * @access public
 */
router.delete('/:id', deleteCategory)

module.exports = router
