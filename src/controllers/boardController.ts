import { Request, Response } from 'express'

import { Board } from '../models/board'
import { log } from 'console'


export const getAllBoards = async (req: Request, res: Response) => {
  log("get all boards hit")
  try {
    const boards = await Board.find()
    log("boards", boards)

  } catch(err) {
    log("err", err)
  }
  res.send("boards endpoint")
}

export const createBoard = async (req: Request, res: Response) => {
  console.log("create board: ", req.body)
  const {title, userEmail, status, createdAt, columns } = req.body
  try {
    const newBoard = new Board({
      title: title,
      userEmail: userEmail,
      status: status,
      createdAt: createdAt,
      columns: columns 
    })
    newBoard.save()
  } catch (err) {
    log("Error while creating new board", err)
  }
  res.send("create board endpoint")
}