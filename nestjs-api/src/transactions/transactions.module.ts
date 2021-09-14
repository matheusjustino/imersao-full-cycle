import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';

import { TransactionsController } from './transactions.controller';

// SERVICES
import { TransactionsService } from './transactions.service';

// ENTITIES
import { Transaction } from './entities/transaction.entity';
import { Account } from '../accounts/entities/account.entity';

// INTERFACES
import { TRANSACTIONS_SERVICE } from '../common/interfaces/transactions.service';

@Module({
	imports: [SequelizeModule.forFeature([Transaction, Account])],
	controllers: [TransactionsController],
	providers: [
		{
			useClass: TransactionsService,
			provide: TRANSACTIONS_SERVICE,
		},
	],
	exports: [
		{
			useClass: TransactionsService,
			provide: TRANSACTIONS_SERVICE,
		},
	],
})
export class TransactionsModule {}
