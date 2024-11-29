import { check } from 'express-validator'

export const validateMessage = [
  check('name', 'Name is required').notEmpty(),
  check('email', 'Provide a valid email').isEmail().normalizeEmail(),
  check('message', 'Mesasge is required').notEmpty()
]
