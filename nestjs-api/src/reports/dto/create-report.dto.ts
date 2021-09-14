import { IsISO8601, IsNotEmpty } from 'class-validator';

// VALIDATORS
import { IsAfter } from '../../common/validators/is-after.rule';

export class CreateReportDto {
	@IsISO8601()
	@IsNotEmpty()
	public start_date: Date;

	@IsAfter('start_date')
	@IsISO8601()
	@IsNotEmpty()
	public end_date: Date;
}
