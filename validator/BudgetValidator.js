const { check } = require('express-validator');

exports.createValidator = [
  check('amount').not().isEmpty().isNumeric().withMessage('Amount is not valid'),
  check('date', 'date is not valid').isDate(),
  check('category', 'category is not valid').not().isEmpty(),
]

exports.updateValidator = [
  check('amount').not().isEmpty().isNumeric().withMessage('Amount is not valid'),
  check('date', 'date is not valid').isDate(),
  check('category', 'category is not valid').not().isEmpty(),
]
