import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import Administrador from './administrador';
import InventarioGeneral from './inventario_general';

@Table({ tableName: 'GestionaAdministradorInventarioGeneral', timestamps: false })
export class GestionaAdministradorInventarioGeneral extends Model
{
    @ForeignKey(() => Administrador)
    @Column({ primaryKey: true, type: DataType.STRING(50), allowNull: false })
    adminCodAdministrador!: string;

    @ForeignKey(() => InventarioGeneral)
    @Column({ primaryKey: true, type: DataType.STRING(50), allowNull: false })
    invGenIdInventarioGeneral!: string;

    @BelongsTo(() => Administrador)
    administrador!: Administrador;

    @BelongsTo(() => InventarioGeneral)
    inventarioGeneral!: InventarioGeneral;
}

export default GestionaAdministradorInventarioGeneral;