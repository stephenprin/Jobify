import express, { Request, Response, NextFunction } from 'express';
import createHttpError from 'http-errors';

const errorHandling = (err: createHttpError.HttpError, req: Request, res: Response, next: NextFunction) => { 
    res.status(err.status || 500).json({
        message: 'There was an error'
    });
}

    export default errorHandling;