import { Request, Response } from 'express'

import { Board, Column,Task, SubTask} from '../models/board'
import { log } from 'console'


export const createColumn = async (req: Request, res: Response) => {
  const { boardId } = req.params
  log("create column: ", boardId)
  log("req.body", req.body)

  try {
    // const newColumn = new Column({...req.body})
    const board = await Board.findById(boardId)
    log("found board", board)
    if (board) {
      board.columns.push(req.body)
      board.save()
      res.json({message: "Successfully added column",updated: board})
    } else {
      throw new Error(`board with id ${boardId} not found`)
    }

  } catch(err) {
    log("err", err)
    // TODO: fix error messages here, maybe we'll add middleware for this 
    res.status(500).json({err})
  }
} 