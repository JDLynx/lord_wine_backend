import { Table, Column, Model, ForeignKey } from 'sequelize-typescript';
import { Administrador } from './administrador';
import { InventarioGeneral } from './inventario_general';

@Table({ tableName: 'GestionaAdministradorInventarioGeneral', timestamps: false })
export class GestionaAdministradorInventarioGeneral extends Model<GestionaAdministradorInventarioGeneral>
{
    @ForeignKey(() => Administrador)
    @Column
    adminCodAdministrador!: number;

    @ForeignKey(() => InventarioGeneral)
    @Column
    invGenIdInventarioGeneral!: number;
}

export default GestionaAdministradorInventarioGeneral;