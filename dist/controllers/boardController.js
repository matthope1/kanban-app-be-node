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
exports.createBoard = exports.getAllBoards = void 0;
const board_1 = require("../models/board");
const console_1 = require("console");
const getAllBoards = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    (0, console_1.log)("get all boards hit");
    try {
        const boards = yield board_1.Board.find();
        (0, console_1.log)("boards", boards);
    }
    catch (err) {
        (0, console_1.log)("err", err);
    }
    res.send("boards endpoint");
});
exports.getAllBoards = getAllBoards;
const createBoard = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // TODO: how to add columns
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
