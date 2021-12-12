const express = require('express')
const router = express.Router()
const {
  createValidator,
  updateValidator,
} = require('../validator/BudgetValidator')

const {
  getAllBudget,
  postCreateBudget,
  putUpdateBudget,
  deleteBudget,
} = require('../controllers/BudgetController')

/**
 * @route GET api/category
 * @description get all category
 * @access public
 */
router.get('/', getAllBudget)

/**
 * @route POST api/category
 * @description add a new category
 * @access public
 */
router.post('/', createValidator, postCreateBudget)

/**
 * @route PUT api/category/:id
 * @description update category
 * @access public
 */
router.put('/:id', updateValidator, putUpdateBudget)

/**
 * @route DELETE api/category/:id
 * @description delete category
 * @access public
 */
router.delete('/:id', deleteBudget)

module.exports = router
