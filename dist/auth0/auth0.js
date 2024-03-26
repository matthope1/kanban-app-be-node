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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserInfo = void 0;
const axios_1 = __importDefault(require("axios"));
const console_1 = require("console");
const getUserInfo = (accessToken) => __awaiter(void 0, void 0, void 0, function* () {
    const domain = "dev-8mqlgmbq3y23i00o.us.auth0.com";
    // const url = `https://${process.env.AUTH0_DOMAIN}/userinfo`;
    const url = `https://${domain}/userinfo`;
    const config = {
        headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-type': 'application/json'
        }
    };
    try {
        const response = yield axios_1.default.get(url, config);
        (0, console_1.log)("res from getting user info", response);
    }
    catch (err) {
        (0, console_1.log)("err", err);
    }
});
exports.getUserInfo = getUserInfo;
