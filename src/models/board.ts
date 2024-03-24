import mongoose, { Document, Schema, model } from 'mongoose'

// subtask

interface ISubTask extends Document {
  desc: string,
  isComplete: boolean,
  createdAt: Date
}

const subtaskSchema = new Schema<ISubTask>({
  desc: {type: String},
  isComplete: {type: Boolean},
  createdAt: {type: Date}
})

const SubTask = model<ISubTask>('SubTask',subtaskSchema)

// task
interface ITask extends Document {
  status: string,
  title: string,
  desc: string,
  createdAt: Date,
  subTasks: [ISubTask]
}

const taskSchema = new Schema<ITask>({
  status: {type: String},
  title: {type: String},
  desc: {type: String},
  createdAt: {type: Date},
  subTasks: [subtaskSchema]
})

const Task = model<ITask>('Task', taskSchema)
// column

interface IColumn extends Document {
  title: string,
  desc: string,
  createdAt: Date,
  tasks: [ITask]
}

const columnSchema = new Schema<IColumn>({
  title: {type: String},
  desc: {type: String},
  createdAt: {type: Date},
  tasks: [taskSchema]
})

const Column = model<IColumn>('Column', columnSchema)


// board 

interface IBoard extends Document {
  title: string,
  userEmail: string,
  status: string,
  createdAt: Date,
  columns: [IColumn]
}


const boardSchema = new Schema<IBoard>({
  title: {type: String},
  userEmail: {type: String},
  status: {type: String},
  createdAt: {type: Date},
  columns: [columnSchema] 
})

const Board = model<IBoard>('Board', boardSchema)


export {SubTask, Task, Column, Board}

