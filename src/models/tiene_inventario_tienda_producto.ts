import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import InventarioTienda from './inventario_tienda';
import Producto from './producto';

@Table({ tableName: 'TieneInventarioTiendaProducto', timestamps: false })
export class TieneInventarioTiendaProducto extends Model
{
    @ForeignKey(() => InventarioTienda)
    @Column({ primaryKey: true, type: DataType.STRING(50), allowNull: false })
    invTienIdInventarioTienda!: string;

    @ForeignKey(() => Producto)
    @Column({ primaryKey: true, type: DataType.STRING(50), allowNull: false })
    prodCodProducto!: string;

    @BelongsTo(() => InventarioTienda)
    inventarioTienda!: InventarioTienda;

    @BelongsTo(() => Producto)
    producto!: Producto;
}

export default TieneInventarioTiendaProducto;