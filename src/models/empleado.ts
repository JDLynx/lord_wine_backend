import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import Administrador from './administrador';

@Table({ tableName: 'Empleado', timestamps: false })
export class Empleado extends Model
{
    @Column({ primaryKey: true, type: DataType.STRING(50), allowNull: false })
    emplCodEmpleado!: string;

    @Column({ type: DataType.STRING(50), allowNull: false })
    emplIdEmpleado!: string;

    @Column({ type: DataType.STRING(50), allowNull: false })
    emplNombre!: string;

    @Column({ type: DataType.STRING(50), allowNull: false })
    emplDireccion!: string;

    @Column({ type: DataType.STRING(50), allowNull: false })
    emplTelefono!: string;

    @Column({ type: DataType.STRING(50), allowNull: false })
    emplCorreoElectronico!: string;

    @ForeignKey(() => Administrador)
    @Column({ type: DataType.STRING(50), allowNull: false })
    adminCodAdministrador!: string;

    @BelongsTo(() => Administrador)
    administrador!: Administrador;
}

export default Empleado;