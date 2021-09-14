import {
	BelongsTo,
	Column,
	DataType,
	ForeignKey,
	Model,
	PrimaryKey,
	Table,
} from 'sequelize-typescript';

// DECORATORS
import { ToNumber } from '../../common/db/to-number.decorator';

// ENTITIES
import { Account } from '../../accounts/entities/account.entity';

// ENUMS
import { TransactionCategory } from '../../common/enums/transaction-category.enum';
import { TransactionType } from '../../common/enums/transaction-type.enum';

export const TransactionCategoryList: string[] =
	Object.values(TransactionCategory);

export const TransactionTypeList: string[] = Object.values(TransactionType);

@Table({
	tableName: 'transactions',
	createdAt: 'created_at',
	updatedAt: 'updated_at',
})
export class Transaction extends Model {
	@PrimaryKey
	@Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4 })
	public id: string;

	@Column({ allowNull: false })
	public payment_date: Date;

	@Column({ allowNull: false })
	public name: string;

	@Column({ allowNull: false })
	public description: string;

	@Column({ allowNull: false })
	public category: TransactionCategory;

	@ToNumber
	@Column({ allowNull: false, type: DataType.DECIMAL(10, 2) })
	public amount: number;

	@Column({ allowNull: false })
	public type: TransactionType;

	@ForeignKey(() => Account)
	@Column({
		type: DataType.UUID,
		defaultValue: DataType.UUIDV4,
		allowNull: false,
	})
	account_id: string;

	@BelongsTo(() => Account)
	account: Account;
}
