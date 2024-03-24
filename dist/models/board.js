"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Board = exports.Column = exports.Task = exports.SubTask = void 0;
const mongoose_1 = require("mongoose");
const subtaskSchema = new mongoose_1.Schema({
    desc: { type: String },
    isComplete: { type: Boolean },
    createdAt: { type: Date }
});
const SubTask = (0, mongoose_1.model)('SubTask', subtaskSchema);
exports.SubTask = SubTask;
const taskSchema = new mongoose_1.Schema({
    status: { type: String },
    title: { type: String },
    desc: { type: String },
    createdAt: { type: Date },
    subTasks: [subtaskSchema]
});
const Task = (0, mongoose_1.model)('Task', taskSchema);
exports.Task = Task;
const columnSchema = new mongoose_1.Schema({
    title: { type: String },
    desc: { type: String },
    createdAt: { type: Date },
    tasks: [taskSchema]
});
const Column = (0, mongoose_1.model)('Column', columnSchema);
exports.Column = Column;
const boardSchema = new mongoose_1.Schema({
    title: { type: String },
    userEmail: { type: String },
    status: { type: String },
    createdAt: { type: Date },
    columns: [columnSchema]
});
const Board = (0, mongoose_1.model)('Board', boardSchema);
exports.Board = Board;
