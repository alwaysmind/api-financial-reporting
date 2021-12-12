// router/todo.js
const express = require('express')
const router = express.Router()

const {
  createValidator,
  updateValidator,
} = require('../validator/TransactionValidator')

const {
  getAllTransaction,
  postCreateTransaction,
  putUpdateTransaction,
  deleteTransaction,
} = require('../controllers/TransactionController')

/**
 * @route GET api/transaction
 * @description get all transaction
 * @access public
 */
router.get('/', getAllTransaction)

/**
 * @route POST api/transaction
 * @description add a new transaction
 * @access public
 */
router.post('/', createValidator, postCreateTransaction)

/**
 * @route PUT api/transaction/:id
 * @description update transaction
 * @access public
 */
router.put('/:id', updateValidator, putUpdateTransaction)

/**
 * @route DELETE api/category/:id
 * @description delete category
 * @access public
 */
router.delete('/:id', deleteTransaction)

module.exports = router
