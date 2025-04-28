import type { Request, Response } from "express";

export class Gestiona_administrador_inventario_general_Controller
{
    static getAll=async(req: Request, res: Response)=>
        {
            console.log('Desde /api/gestiona_administrador_inventario_general');
            res.json({ mensaje: 'Ruta de gestiona_administrador_inventario_general funcionando correctamente' });
        };
}