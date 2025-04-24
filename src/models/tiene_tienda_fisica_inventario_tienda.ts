import { Table, Column, Model, ForeignKey } from 'sequelize-typescript';
import { TiendaFisica } from './tienda_fisica';
import { InventarioTienda } from './inventario_tienda';

@Table({ tableName: 'TieneTiendaFisicaInventarioTienda', timestamps: false }) export class TieneTiendaFisicaInventarioTienda extends Model<TieneTiendaFisicaInventarioTienda>
{
    @ForeignKey(() => TiendaFisica)
    @Column
    tiendIdTiendaFisica!: number;

    @ForeignKey(() => InventarioTienda)
    @Column
    invTienIdInventarioTienda!: number;
}

export default TieneTiendaFisicaInventarioTienda;