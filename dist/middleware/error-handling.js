"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandling = (err, req, res, next) => {
    res.status(err.status || 500).json({
        message: 'There was an error'
    });
};
exports.default = errorHandling;
