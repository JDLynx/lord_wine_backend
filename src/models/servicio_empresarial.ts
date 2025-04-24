import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { Pedido } from './pedido';

@Table({ tableName: 'ServicioEmpresarial' }) export class ServicioEmpresarial extends Model<ServicioEmpresarial>
{
    @Column({ primaryKey: true, autoIncrement: true })
    serIdServicioEmpresarial!: number;

    @Column({ type: DataType.STRING(50), allowNull: false })
    serNombre!: string;

    @Column({ type: DataType.TEXT, allowNull: false })
    serDescripcion!: string;

    @Column({ type: DataType.DECIMAL(10, 2), allowNull: false })
    serPrecio!: number;

    @HasMany(() => Pedido)
    pedidos!: Pedido[];
}

export default ServicioEmpresarial;