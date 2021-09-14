import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { AccountsController } from './accounts.controller';

// INTERFACES
import { ACCOUNTS_SERVICE } from '../common/interfaces/accounts.service';

// SERVICES
import { AccountsService } from './accounts.service';

// ENTITIES
import { Account } from './entities/account.entity';

@Module({
	imports: [SequelizeModule.forFeature([Account])],
	controllers: [AccountsController],
	providers: [
		{
			useClass: AccountsService,
			provide: ACCOUNTS_SERVICE,
		},
	],
	exports: [
		{
			useClass: AccountsService,
			provide: ACCOUNTS_SERVICE,
		},
	],
})
export class AccountsModule {}
