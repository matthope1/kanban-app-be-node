import express from 'express'
import * as boardController from '../controllers/boardController'

const router  = express.Router()

router.get('/boards', boardController.getAllBoards)
router.post('/boards', boardController.createBoard)

export default router