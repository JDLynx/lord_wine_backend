import express from 'express';
import colors from 'colors';
import morgan from 'morgan';
import {db} from './config/db';
import administradorRouter from './routes/administrador_Router';
import carrito_de_compras_Router from './routes/carrito_de_compras_Router';
import categoria_Router from './routes/categoria_Router';
import cliente_Router from './routes/cliente_Router';
import detalle_carrito_Router from './routes/detalle_carrito_Router';
import detalle_pedido_Router from './routes/detalle_pedido_Router';
import empleado_Router from './routes/empleado_Router';
import gestiona_administrador_inventario_general_Router from './routes/gestiona_administrador_inventario_general_Router';
import gestiona_empleado_inventario_tienda_Router from './routes/gestiona_empleado_inventario_tienda_Router';
import inventario_general_Router from './routes/inventario_general_Router';
import inventario_tienda_Router from './routes/inventario_tienda_Router';
import pedido_Router from './routes/pedido_Router';
import producto_Router from './routes/producto_Router';
import servicio_empresarial_Router from './routes/servicio_empresarial_Router';
import tienda_fisica_Router from './routes/tienda_fisica_Router';
import tiene_cliente_carrito_de_compras_Router from './routes/tiene_cliente_carrito_de_compras_Router';
import tiene_detalle_producto_Router from './routes/tiene_detalle_producto_Router';
import tiene_inventario_tienda_producto_Router from './routes/tiene_inventario_tienda_producto_Router';
import tiene_tienda_fisica_inventario_tienda_Router from './routes/tiene_tienda_fisica_inventario_tienda_Router';
import tiene_tienda_producto_Router from './routes/tiene_tienda_producto_Router';
import trabaja_Router from './routes/trabaja_Router';


async function connectDB()
{
    try
    {
        await db.authenticate();
        console.log(colors.blue.bold('Conexión exitosa a la BD'));

        try
        {
            const[results, metadata]=await db.query('SELECT * FROM Administrador LIMIT 5');
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
app.use('/api/administrador', administradorRouter);
app.use('/api/carrito_de_compras', carrito_de_compras_Router);
app.use('/api/categoria', categoria_Router);
app.use('/api/cliente', cliente_Router);
app.use('/api/detalle_carrito', detalle_carrito_Router);
app.use('/api/detalle_pedido', detalle_pedido_Router);
app.use('/api/empleado', empleado_Router);
app.use('/api/gestiona_administrador_inventario_general', gestiona_administrador_inventario_general_Router);
app.use('/api/gestiona_empleado_inventario_tienda', gestiona_empleado_inventario_tienda_Router);
app.use('/api/inventario_general', inventario_general_Router);
app.use('/api/inventario_tienda', inventario_tienda_Router);
app.use('/api/pedido', pedido_Router);
app.use('/api/producto', producto_Router);
app.use('/api/servicio_empresarial', servicio_empresarial_Router);
app.use('/api/tienda_fisica', tienda_fisica_Router);
app.use('/api/tiene_cliente_carrito_de_compras', tiene_cliente_carrito_de_compras_Router);
app.use('/api/tiene_detalle_producto', tiene_detalle_producto_Router);
app.use('/api/tiene_inventario_tienda_producto', tiene_inventario_tienda_producto_Router);
app.use('/api/tiene_tienda_fisica_inventario_tienda', tiene_tienda_fisica_inventario_tienda_Router);
app.use('/api/tiene_tienda_producto', tiene_tienda_producto_Router);
app.use('/api/trabaja', trabaja_Router);

export default app;