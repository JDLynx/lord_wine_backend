import express from 'express';
import colors from 'colors';
import morgan from 'morgan';
import sequelize from './config/db';
import administradorRouter from './routes/administradorRouter'

async function connectDB()
{
    try
    {
        await sequelize.authenticate();
        console.log(colors.blue.bold('Conexión exitosa a la BD'));

        try
        {
            const[results, metadata]=await sequelize.query('SELECT * FROM Administrador LIMIT 5');
            console.log('Datos de ejemplo:', results);
        }
        catch(error)
        {
            console.error('Error al ejecutar la consulta:', error);
        }
    }
    catch(error)
    {
        console.error('Error al conectar a la BD:', error);
        console.log(colors.red.bold('Falló la conexión a la BD'));
    }
}

connectDB();
const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use('/api/administrador', administradorRouter)
export default app;