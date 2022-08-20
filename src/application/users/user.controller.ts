import { Request, Response } from 'express';
import Controller from "../../core/controller/controller";

export default class UserController extends Controller {

    constructor() {
        super();
    }

    create(req: Request, res: Response): any {
        return res.json({
           status: 'OK'
        });
    }

}