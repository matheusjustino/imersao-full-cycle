import { IsNotEmpty, MaxLength, IsString, IsIn } from 'class-validator';

// ENUMS
import { ReportStatus } from '../../common/enums/report-status.enum';

// ENTITIES
import { ReportStatusList } from '../entities/report.entity';

export class UpdateReportDto {
	@MaxLength(255)
	@IsString()
	@IsNotEmpty()
	public file_url: string;

	@IsIn(ReportStatusList)
	@IsNotEmpty()
	public status: ReportStatus;
}
