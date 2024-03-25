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
exports.updateBoard = exports.createBoard = exports.getAllBoards = void 0;
const board_1 = require("../models/board");
const console_1 = require("console");
const getAllBoards = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    (0, console_1.log)("get all boards hit");
    try {
        const boards = yield board_1.Board.find();
        (0, console_1.log)("boards", boards);
        res.json({ boards });
    }
    catch (err) {
        (0, console_1.log)("err", err);
        res.status(500).json({ err });
    }
});
exports.getAllBoards = getAllBoards;
const createBoard = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("create board: ", req.body);
    const { title, userEmail, status, createdAt, columns } = req.body;
    try {
        const newBoard = new board_1.Board({
            title: title,
            userEmail: userEmail,
            status: status,
            createdAt: createdAt,
            columns: columns
        });
        newBoard.save();
    }
    catch (err) {
        (0, console_1.log)("Error while creating new board", err);
    }
    res.send("create board endpoint");
});
exports.createBoard = createBoard;
const updateBoard = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    (0, console_1.log)("update board hit");
    const { id } = req.params;
    const { title, userEmail, status, createdAt, columns } = req.body;
    (0, console_1.log)("req.params", req.params);
    (0, console_1.log)("req.body", req.body);
    try {
        const filter = { '_id': id };
        const update = {
            title: title,
            userEmail: userEmail,
            status: status,
            createdAt: createdAt,
            columns: columns
        };
        // TODO: get err/success response from update call and send response back to client
        // `doc` is the document after `update` was applied
        let doc = yield board_1.Board.findOneAndUpdate(filter, update, { new: true });
        (0, console_1.log)("board after update", doc);
        res.json({ message: 'updated board successfully', updated: doc });
    }
    catch (err) {
        (0, console_1.log)("Error while trying to update board", err);
        res.status(500).json({ err });
    }
});
exports.updateBoard = updateBoard;
