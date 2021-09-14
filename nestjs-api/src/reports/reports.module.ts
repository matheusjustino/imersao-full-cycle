import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { ReportsController } from './reports.controller';

// SERVICES
import { ReportsService } from './reports.service';

// ENTITIES
import { Report } from './entities/report.entity';

// INTERFACES
import { REPORTS_SERVICE } from '../common/interfaces/reports.service';

@Module({
	imports: [SequelizeModule.forFeature([Report])],
	controllers: [ReportsController],
	providers: [
		{
			useClass: ReportsService,
			provide: REPORTS_SERVICE,
		},
	],
	exports: [
		{
			useClass: ReportsService,
			provide: REPORTS_SERVICE,
		},
	],
})
export class ReportsModule {}
