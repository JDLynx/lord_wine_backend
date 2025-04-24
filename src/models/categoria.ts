import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { Producto } from './producto';

@Table({ tableName: 'Categoria' }) export class Categoria extends Model<Categoria>
{
    @Column({ primaryKey: true, autoIncrement: true })
    categIdCategoria!: number;

    @Column({ type: DataType.STRING(50), allowNull: false })
    catNombre!: string;

    @HasMany(() => Producto)
    productos!: Producto[];
}

export default Categoria;