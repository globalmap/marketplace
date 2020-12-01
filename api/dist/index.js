"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = __importDefault(require("./server"));
var port = process.env.PORT || 9000;
server_1.default.listen(port, function () { return console.log("Server started on port: " + port); });
