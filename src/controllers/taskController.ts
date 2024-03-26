import { Request, Response } from 'express'

import { Board, Column,Task, SubTask} from '../models/board'
import { log } from 'console'


export const createTask = async (req: Request, res: Response) => {
  try {

  } catch (err) {
    log("err", err)
    res.status(500).json({err})
  }
}


