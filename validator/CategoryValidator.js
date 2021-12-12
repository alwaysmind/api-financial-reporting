const { check } = require('express-validator');

exports.createValidator = [
  check('name').not().isEmpty().withMessage('name is not valid'),
  check('icon', 'icon is not valid').isString().not().isEmpty(),
  check('type', 'type is not valid').not().isEmpty(),
]

exports.updateValidator = [
  check('name').not().isEmpty().withMessage('name is not valid'),
  check('icon', 'icon is not valid').isString().not().isEmpty(),
  check('type', 'type is not valid').not().isEmpty(),
]
