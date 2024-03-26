"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/index.ts
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const routes_1 = __importDefault(require("./routes/routes"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const db_1 = require("./db/db");
const express_oauth2_jwt_bearer_1 = require("express-oauth2-jwt-bearer");
dotenv_1.default.config();
(0, db_1.connectDB)();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
const jwtCheck = (0, express_oauth2_jwt_bearer_1.auth)({
    audience: 'https://kanbanbe.com',
    issuerBaseURL: 'https://dev-8mqlgmbq3y23i00o.us.auth0.com/',
    tokenSigningAlg: 'RS256'
});
app.use(body_parser_1.default.urlencoded());
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)());
// app.use(jwtCheck)
app.use('/api', routes_1.default);
app.get("/", (req, res) => {
    res.send("Express + TypeScript Server");
});
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
