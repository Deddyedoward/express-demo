import { Router } from 'express'
import Controller from "../../core/controller/controller";
import UserController from './user.controller';

export default class UserRoute {
    public _router: Router;
    private _controller: Controller;

    constructor() {
        this._router = Router();
        this._controller = new UserController();

        this.initializeRoutes();
    }

    private initializeRoutes() {
        this._router.post('/', this._controller.create)
    }
}