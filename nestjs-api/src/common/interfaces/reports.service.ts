// DTOS
import { CreateReportDto } from '../../reports/dto/create-report.dto';
import { UpdateReportDto } from '../../reports/dto/update-report.dto';

// ENTITES
import { Report } from '../../reports/entities/report.entity';

export const REPORTS_SERVICE = 'REPORTS SERVICE';

export interface IReportsService {
	create(createReportDto: CreateReportDto): Promise<Report>;
	update(id: number, updateReportDto: UpdateReportDto): Promise<Report>;
	findAll(): Promise<Report[]>;
}
