import { Table, Column, Model, ForeignKey } from 'sequelize-typescript';
import { DetalleCarrito } from './detalle_carrito';
import { Producto } from './producto';

@Table({ tableName: 'TieneDetalleProducto' })
export class TieneDetalleProducto extends Model<TieneDetalleProducto>
{
    @ForeignKey(() => DetalleCarrito)
    @Column({ primaryKey: true })
    detIdDetalleCarrito!: number;

    @ForeignKey(() => Producto)
    @Column({ primaryKey: true })
    prodIdProducto!: number;
}

export default TieneDetalleProducto;