import { SequelizeModule } from '@nestjs/sequelize';
import { Global, Module } from '@nestjs/common';

// SERVICES
import { TenantService } from './tenant.service';

// ENTITIES
import { Account } from '../accounts/entities/account.entity';
import { TENANT_SERVICE } from '../common/interfaces/tenant.service';

@Global()
@Module({
	imports: [SequelizeModule.forFeature([Account])],
	providers: [
		{
			useClass: TenantService,
			provide: TENANT_SERVICE,
		},
	],
	exports: [
		{
			useClass: TenantService,
			provide: TENANT_SERVICE,
		},
	],
})
export class TenantModule {}
