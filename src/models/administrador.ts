import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({ tableName: 'Administrador', timestamps: false })
export class Administrador extends Model
{
    @Column({ primaryKey: true, type: DataType.STRING(50), allowNull: false })
    adminCodAdministrador!: string;

    @Column({ type: DataType.STRING(50), allowNull: false })
    adminIdAdministrador!: string;

    @Column({ type: DataType.STRING(50), allowNull: false })
    adminNombre!: string;

    @Column({ type: DataType.STRING(50), allowNull: false })
    adminDireccion!: string;

    @Column({ type: DataType.STRING(50), allowNull: false })
    adminTelefono!: string;

    @Column({ type: DataType.STRING(50), allowNull: false })
    adminCorreoElectronico!: string;
}

export default Administrador;