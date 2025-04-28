import type { Request, Response } from "express";

export class Trabaja_Controller
{
    static getAll=async(req: Request, res: Response)=>
        {
            console.log('Desde /api/trabaja');
            res.json({ mensaje: 'Ruta de trabaja funcionando correctamente' });
        };
}