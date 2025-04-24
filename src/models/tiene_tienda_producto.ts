import { Table, Column, Model, ForeignKey } from 'sequelize-typescript';
import { Producto } from './producto';
import { TiendaFisica } from './tienda_fisica';

@Table({ tableName: 'TieneTiendaProducto' }) export class TieneTiendaProducto extends Model<TieneTiendaProducto>
{
    @ForeignKey(() => Producto)
    @Column({ primaryKey: true })
    prodIdProducto!: number;

    @ForeignKey(() => TiendaFisica)
    @Column({ primaryKey: true })
    tiendIdTiendaFisica!: number;
}

export default TieneTiendaProducto;