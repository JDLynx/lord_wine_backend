import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import Administrador from './administrador';
import Categoria from './categoria';

@Table({ tableName: 'Producto', timestamps: false })
export class Producto extends Model
{
    @Column({ primaryKey: true, type: DataType.STRING(50), allowNull: false })
    prodCodProducto!: string;

    @Column({ type: DataType.STRING(50), allowNull: false })
    prodIdProducto!: string;

    @Column({ type: DataType.STRING(50), allowNull: false })
    prodNombre!: string;

    @Column({ type: DataType.TEXT, allowNull: false })
    prodDescripcion!: string;

    @Column({ type: DataType.INTEGER, allowNull: false })
    prodPrecio!: number;

    @ForeignKey(() => Administrador)
    @Column({ type: DataType.STRING(50), allowNull: false })
    adminCodAdministrador!: string;

    @ForeignKey(() => Categoria)
    @Column({ type: DataType.STRING(50), allowNull: false })
    categIdCategoria!: string;

    @BelongsTo(() => Administrador)
    administrador!: Administrador;

    @BelongsTo(() => Categoria)
    categoria!: Categoria;
}

export default Producto;