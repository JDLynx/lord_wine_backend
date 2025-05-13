import type { Request, Response } from "express";
import Administrador from "../models/administrador";

export class AdministradorControllers
{
    static getadministradorAll=async(req: Request, res:Response)=>
    {
        console.log('Desde get /api/administrador')
    }

    static getAdministradorId=async(req: Request, res: Response)=>
    {
        console.log('Desde get:id /api/administrador/id')
    }

    static crearAdministrador=async(req: Request, res: Response)=>
    {
        try
        {
            const administrador=new Administrador(req.body)
            await administrador.save()
            res.status(201).json('Presupuesto creado correctamente')
        }
        catch(error)
        {
            console.log(error)
            res.status(500).json({error: 'Hubo un error'})
        }
    }

    static actualziarAcudienteId=async(req: Request, res: Response)=>
    {
        console.log('Desde put /api/administrador/id')
    }

    static eliminarAdministradorId=async(req: Request, res: Response)=>
    {
        console.log('Desde delete /api/administrador/id')
    }

}