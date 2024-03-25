import { Request, Response } from 'express'

import { Board } from '../models/board'
import { log } from 'console'


export const getAllBoards = async (req: Request, res: Response) => {
  log("get all boards hit")
  try {
    const boards = await Board.find()
    log("boards", boards)
    res.json({boards})

  } catch(err) {
    log("err", err)
    res.status(500).json({err})
  }
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


export const updateBoard = async (req: Request, res: Response) => {
  log("update board hit")

  const { id } = req.params
  const {title, userEmail, status, createdAt, columns } = req.body
  log("req.params", req.params)
  log("req.body", req.body)
  try {

    const filter = { '_id': id }
    const update = {
      title: title,
      userEmail: userEmail,
      status: status,
      createdAt: createdAt,
      columns: columns
    }

    // TODO: get err/success response from update call and send response back to client
    // `doc` is the document after `update` was applied
    let doc = await Board.findOneAndUpdate(filter, update, {new: true})
    log("board after update", doc)

    res.json({ message: 'updated board successfully', updated: doc })

  } catch(err) {
    log("Error while trying to update board", err)
    res.status(500).json({err})
  }
}