import { Router } from 'express'
import UserRoute from './application/users/user.route';

export default class Routes {
    public _router: Router;

    constructor() {
        this._router = Router();

        this.setRoutes();
    }

    setRoutes() {
        this._router.use('/users', new UserRoute()._router);
    }
}