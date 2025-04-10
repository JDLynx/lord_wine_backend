import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import Administrador from './administrador';

@Table({ tableName: 'TiendaFisica', timestamps: false })
export class TiendaFisica extends Model
{
    @Column({ primaryKey: true, type: DataType.STRING(50), allowNull: false })
    tiendIdTienda!: string;

    @Column({ type: DataType.STRING(50), allowNull: false })
    tiendNombre!: string;

    @Column({ type: DataType.STRING(50), allowNull: false })
    tienDireccion!: string;

    @Column({ type: DataType.STRING(50), allowNull: false })
    tienTelefono!: string;

    @ForeignKey(() => Administrador)
    @Column({ type: DataType.STRING(50), allowNull: false })
    adminCodAdministrador!: string;

    @BelongsTo(() => Administrador)
    administrador!: Administrador;
}

export default TiendaFisica;