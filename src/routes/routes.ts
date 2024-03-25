import express from 'express'
import * as boardController from '../controllers/boardController'

const router  = express.Router()

router.get('/boards', boardController.getAllBoards)
router.post('/boards', boardController.createBoard)
router.put('/boards/:id', boardController.updateBoard)

export default router