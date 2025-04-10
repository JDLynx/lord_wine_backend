import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import TiendaFisica from './tienda_fisica';TiendaFisica
import InventarioTienda from './inventario_tienda';

@Table({ tableName: 'TieneTiendaFisicaInventarioTienda', timestamps: false })
export class TieneTiendaFisicaInventarioTienda extends Model
{
    @ForeignKey(() => TiendaFisica)
    @Column({ primaryKey: true, type: DataType.STRING(50), allowNull: false })
    tiendIdTienda!: string;

    @ForeignKey(() => InventarioTienda)
    @Column({ primaryKey: true, type: DataType.STRING(50), allowNull: false })
    invTienIdInventarioTienda!: string;

    @BelongsTo(() => TiendaFisica)
    tiendaFisica!: TiendaFisica;

    @BelongsTo(() => InventarioTienda)
    inventarioTienda!: InventarioTienda;
}

export default TieneTiendaFisicaInventarioTienda;