"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteColumn = exports.updateColumn = exports.createColumn = void 0;
const board_1 = require("../models/board");
const console_1 = require("console");
const createColumn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { boardId } = req.params;
    (0, console_1.log)("create column: ", boardId);
    (0, console_1.log)("req.body", req.body);
    try {
        // const newColumn = new Column({...req.body})
        const board = yield board_1.Board.findById(boardId);
        (0, console_1.log)("found board", board);
        if (board) {
            board.columns.push(req.body);
            board.save();
            res.json({ message: "Successfully added column", updated: board });
        }
        else {
            throw new Error(`board with id ${boardId} not found`);
        }
    }
    catch (err) {
        (0, console_1.log)("err", err);
        // TODO: fix error messages here, maybe we'll add middleware for this 
        res.status(500).json({ err });
    }
});
exports.createColumn = createColumn;
const updateColumn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { columnId } = req.params;
    (0, console_1.log)("update column: ", columnId);
    const update = req.body;
    (0, console_1.log)("update", update);
    try {
        const doc = yield board_1.Column.findByIdAndUpdate(columnId, update, { new: true });
        (0, console_1.log)("updated doc", doc);
        res.json({ message: "Successfully updated column", updated: doc });
    }
    catch (err) {
        (0, console_1.log)("err", err);
        res.status(500).json({ err });
    }
});
exports.updateColumn = updateColumn;
const deleteColumn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { columnId } = req.params;
    (0, console_1.log)("delete column", columnId);
    try {
        const doc = yield board_1.Column.findByIdAndDelete(columnId);
        (0, console_1.log)("doc after delete", doc);
    }
    catch (err) {
        (0, console_1.log)("err", err);
        res.status(500).json({ err });
    }
});
exports.deleteColumn = deleteColumn;
