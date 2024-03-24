import { Request, Response } from 'express'

import { Board } from '../models/board'


export const getAllBoards = async(req: Request, res: Response) => {
  res.send("boards endpoint")
}