import { Table, Column, Model, DataType, HasMany, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { InventarioTienda } from './inventario_tienda';
import { Administrador } from './administrador';

@Table({ tableName: 'InventarioGeneral' }) export class InventarioGeneral extends Model<InventarioGeneral>
{
    @Column({ primaryKey: true, autoIncrement: true })
    invGenIdInventarioGeneral!: number;

    @Column({ type: DataType.INTEGER, allowNull: false })
    invGenCantidadTotal!: number;

    @HasMany(() => InventarioTienda)
    inventariosTienda!: InventarioTienda[];

    @ForeignKey(() => Administrador)
    @Column
    adminCodAdministrador!: number;

    @BelongsTo(() => Administrador)
    administrador!: Administrador;
}

export default InventarioGeneral;