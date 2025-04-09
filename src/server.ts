import express from 'express';
import colors from 'colors';
import morgan from 'morgan';
import {pool} from './config/db';
import router from './router';

async function connectDB()
{
    try
    {
        const connection=await pool.getConnection();
        console.log(colors.blue.bold('Conexión exitosa a la BD'));

        const [rows, fields]=await connection.query('SELECT * FROM Administrador LIMIT 5');
        console.log('Datos de ejemplo:', rows);

        connection.release();
    }
    catch(error)
    {
        console.error('Error al conectar a la BD:', error);
        console.log(colors.red.bold('Falló la conexión a la BD'));
    }
}

connectDB();

const app = express();

app.use('/', router);

export default app;