import express from 'express'
import * as boardController from '../controllers/boardController'
import * as columnController from '../controllers/columnController'

const router  = express.Router()

router.get('/boards', boardController.getAllBoards)
router.post('/boards', boardController.createBoard)
router.put('/boards/:id', boardController.updateBoard)
router.post('/column/:boardId', columnController.createColumn)

export default router