import express from 'express';
import mongoose from 'mongoose';
import Routes from './routes';

export default class App{

    public app: express.Application;

    constructor() {
        this.app = express();
        this.initializeProviders();
        this.initializeMiddlewares();
        this.initializeRoutes();
    }

    initializeProviders() {
        mongoose.connect('mongodb://172.17.0.2:27017/sample');
    }

    initializeMiddlewares() {
        this.app.use(express.json())
    }

    initializeRoutes() {
        this.app.use('/v1', new Routes()._router)
    }

    listen(port: number) {
        this.app.listen(port, () => {
            console.log(`⚡ server listening on port ${port}...`)
        })
    }
}