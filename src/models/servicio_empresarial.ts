import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({ tableName: 'ServicioEmpresarial', timestamps: false })
export class ServicioEmpresarial extends Model
{
    @Column({ primaryKey: true, type: DataType.STRING(50), allowNull: false })
    serIdServicio!: string;

    @Column({ type: DataType.STRING(50), allowNull: false })
    serNombre!: string;

    @Column({ type: DataType.TEXT, allowNull: false })
    serDescripcion!: string;

    @Column({ type: DataType.INTEGER, allowNull: false })
    serPrecio!: number;
}

export default ServicioEmpresarial;