import {
	Table,
	Column,
	Model,
	DataType,
	PrimaryKey,
	Default,
} from 'sequelize-typescript';

// DECORATORS
import { ToNumber } from '../../common/db/to-number.decorator';

@Table({
	tableName: 'accounts',
	createdAt: 'created_at',
	updatedAt: 'updated_at',
})
export class Account extends Model {
	@PrimaryKey
	@Column({
		type: DataType.UUID,
		defaultValue: DataType.UUIDV4,
	})
	public id: string;

	@Column({ allowNull: false })
	public name: string;

	@ToNumber
	@Default(0)
	@Column({ type: DataType.DECIMAL(10, 2), allowNull: false })
	public balance: number;

	@Column({ allowNull: false })
	public subdomain: string;
}
