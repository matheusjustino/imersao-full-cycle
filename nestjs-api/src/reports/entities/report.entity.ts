import {
	Table,
	Column,
	Model,
	DataType,
	PrimaryKey,
	ForeignKey,
	BelongsTo,
	Default,
} from 'sequelize-typescript';

// ENTITIES
import { Account } from '../../accounts/entities/account.entity';

// ENUMS
import { ReportStatus } from '../../common/enums/report-status.enum';

export const ReportStatusList: string[] = Object.values(ReportStatus);

@Table({
	tableName: 'reports',
	createdAt: 'created_at',
	updatedAt: 'updated_at',
})
export class Report extends Model {
	@PrimaryKey
	@Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4 })
	public id: string;

	@Column({ allowNull: false })
	public start_date: Date;

	@Column({ allowNull: false })
	public end_date: Date;

	@Column
	public file_url: string;

	@Default(ReportStatus.PENDING)
	@Column({ allowNull: false })
	public status: ReportStatus;

	@ForeignKey(() => Account)
	@Column({
		type: DataType.UUID,
		defaultValue: DataType.UUIDV4,
		allowNull: false,
	})
	public account_id: string;

	@BelongsTo(() => Account)
	public account: Account;
}
