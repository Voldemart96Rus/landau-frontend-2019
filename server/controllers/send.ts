import {Request, Response} from 'express';

export function list(_req: Request, res: Response) {
    res.json({good: true});
}

export function create(req: Request, res: Response) {
    const {name, email, tel, locate} = req.body;
    console.info(name + email + tel + locate);
    res.sendStatus(201);
}
