import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import Producto from './producto';
import TiendaFisica from './tienda_fisica';

@Table({ tableName: 'TieneTiendaProducto', timestamps: false })
export class TieneTiendaProducto extends Model
{
    @ForeignKey(() => Producto)
    @Column({ primaryKey: true, type: DataType.STRING(50), allowNull: false })
    prodCodProducto!: string;

    @ForeignKey(() => TiendaFisica)
    @Column({ primaryKey: true, type: DataType.STRING(50), allowNull: false })
    tiendIdTienda!: string;

    @BelongsTo(() => Producto)
    producto!: Producto;

    @BelongsTo(() => TiendaFisica)
    tiendaFisica!: TiendaFisica;
}

export default TieneTiendaProducto;