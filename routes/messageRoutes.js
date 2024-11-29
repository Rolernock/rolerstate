import express from 'express'
import {
  readMessages,
  deleteMessage,
  sendMessage
} from '../controllers/messageController.js'
import { validateMessage } from '../middleware/validateMessage.js'
const router = express.Router()

router.route('/').post(validateMessage, sendMessage).get(readMessages)
router.delete('/:msgId', deleteMessage)

export default router
