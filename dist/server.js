"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
class Server {
    constructor(port) {
        this._app = (0, express_1.default)();
        this._port = port;
        this.middlewares();
        this.routes();
    }
    routes() { }
    errors() {
        this._app.use((req, res, next) => {
            const err = new Error(`Not Fount - ${req.originalUrl}`);
            res.status(404);
            next(err);
        });
        this._app.use((err, req, res, next) => {
            console.log(err.stack);
            res.status(err.status || 500).json({
                status: err.status,
                message: err.message,
                stack: err.stack,
            });
        });
    }
    middlewares() { }
    start(callback) {
        this._app.listen(this._port, callback);
    }
    static init(port) {
        return new Server(port);
    }
}
exports.Server = Server;
