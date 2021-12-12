const { check } = require('express-validator');

exports.createValidator = [
  check('title').not().isEmpty().withMessage('title is not valid'),
  check('type', 'type is not valid').not().isEmpty(),
  check('amount').not().isEmpty().isNumeric().withMessage('Amount is not valid'),
  check('date', 'date is not valid').isDate(),
  check('category', 'category is not valid').not().isEmpty(),
  check('description', 'description is not valid'),
]

exports.updateValidator = [
  check('title').not().isEmpty().withMessage('title is not valid'),
  check('type', 'type is not valid').not().isEmpty(),
  check('amount').not().isEmpty().isNumeric().withMessage('Amount is not valid'),
  check('date', 'date is not valid').isDate(),
  check('category', 'category is not valid').not().isEmpty(),
  check('description', 'description is not valid'),
]
