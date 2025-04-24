import { Table, Column, Model, ForeignKey } from 'sequelize-typescript';
import { InventarioTienda } from './inventario_tienda';
import { Producto } from './producto';

@Table({ tableName: 'TieneInventarioTiendaProducto', timestamps: false }) export class TieneInventarioTiendaProducto extends Model<TieneInventarioTiendaProducto>
{
    @ForeignKey(() => InventarioTienda)
    @Column
    invTienIdInventarioTienda!: number;

    @ForeignKey(() => Producto)
    @Column
    prodIdProducto!: number;
}

export default TieneInventarioTiendaProducto;