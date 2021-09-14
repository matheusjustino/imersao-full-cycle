import {
	Controller,
	Get,
	Post,
	Body,
	Patch,
	Param,
	UseGuards,
	Inject,
} from '@nestjs/common';

// DTOS
import { CreateReportDto } from './dto/create-report.dto';
import { UpdateReportDto } from './dto/update-report.dto';

// GUARDS
import { TenantGuard } from '../tenant/tenant.guard';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

// ENTITIES
import { Report } from './entities/report.entity';
import {
	REPORTS_SERVICE,
	IReportsService,
} from '../common/interfaces/reports.service';

@UseGuards(JwtAuthGuard, TenantGuard)
@Controller('reports')
export class ReportsController {
	constructor(
		@Inject(REPORTS_SERVICE)
		private readonly reportsService: IReportsService,
	) {}

	@Post()
	public create(@Body() createReportDto: CreateReportDto): Promise<Report> {
		return this.reportsService.create(createReportDto);
	}

	@Get()
	public findAll(): Promise<Report[]> {
		return this.reportsService.findAll();
	}

	@Patch(':id')
	public update(
		@Param('id') id: string,
		@Body() updateReportDto: UpdateReportDto,
	): Promise<Report> {
		return this.reportsService.update(+id, updateReportDto);
	}
}
