import express from 'express'
import * as boardController from '../controllers/boardController'
import * as columnController from '../controllers/columnController'

const router  = express.Router()

router.get('/boards', boardController.getAllBoards)
router.post('/boards', boardController.createBoard)
router.put('/boards/:id', boardController.updateBoard)
router.post('/column/:boardId', columnController.createColumn)
router.put('/column/:columnId', columnController.updateColumn)
router.delete('/column/:columnId', columnController.deleteColumn)

export default router