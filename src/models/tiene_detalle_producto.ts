import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import DetalleCarrito from './detalle_carrito';
import Producto from './producto';

@Table({ tableName: 'TieneDetalleProducto', timestamps: false })
export class TieneDetalleProducto extends Model
{
    @ForeignKey(() => DetalleCarrito)
    @Column({ primaryKey: true, type: DataType.STRING(50), allowNull: false })
    detIdDetalle!: string;

    @ForeignKey(() => Producto)
    @Column({ primaryKey: true, type: DataType.STRING(50), allowNull: false })
    prodCodProducto!: string;

    @BelongsTo(() => DetalleCarrito)
    detalleCarrito!: DetalleCarrito;

    @BelongsTo(() => Producto)
    producto!: Producto;
}

export default TieneDetalleProducto;