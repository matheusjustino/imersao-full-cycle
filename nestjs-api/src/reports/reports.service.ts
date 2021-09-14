import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

// SERVICES
import { TenantService } from '../tenant/tenant.service';

// DTOS
import { UpdateReportDto } from './dto/update-report.dto';
import { CreateReportDto } from './dto/create-report.dto';

// ENTITIES
import { Report } from './entities/report.entity';

// INTERFACES
import { IReportsService } from '../common/interfaces/reports.service';
import {
	ITenantService,
	TENANT_SERVICE,
} from '../common/interfaces/tenant.service';

@Injectable()
export class ReportsService implements IReportsService {
	constructor(
		@InjectModel(Report)
		private reportModel: typeof Report,
		@Inject(TENANT_SERVICE)
		private tenantService: ITenantService,
	) {}

	public create(createReportDto: CreateReportDto): Promise<Report> {
		return this.reportModel.create({
			...createReportDto,
			account_id: this.tenantService.tenant.id,
		});
	}

	public async update(
		id: number,
		updateReportDto: UpdateReportDto,
	): Promise<Report> {
		const report = await this.reportModel.findByPk(id, {
			rejectOnEmpty: true,
		});
		return report.update(updateReportDto);
	}

	public findAll(): Promise<Report[]> {
		return this.reportModel.findAll({
			where: {
				account_id: this.tenantService.tenant.id,
			},
		});
	}
}
