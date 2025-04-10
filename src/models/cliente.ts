import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({ tableName: 'Cliente', timestamps: false })
export class Cliente extends Model
{
    @Column({ primaryKey: true, type: DataType.STRING(50), allowNull: false })
    clCodCliente!: string;

    @Column({ type: DataType.STRING(50), allowNull: false })
    clIdCliente!: string;

    @Column({ type: DataType.STRING(50), allowNull: false })
    clNombre!: string;

    @Column({ type: DataType.STRING(50), allowNull: false })
    clDireccion!: string;

    @Column({ type: DataType.STRING(50), allowNull: false })
    clTelefono!: string;

    @Column({ type: DataType.STRING(50), allowNull: false })
    clCorreoElectronico!: string;
}

export default Cliente;