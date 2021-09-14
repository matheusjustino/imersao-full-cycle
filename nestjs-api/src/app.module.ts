import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';

// MODULES
import { TransactionsModule } from './transactions/transactions.module';
import { AccountsModule } from './accounts/accounts.module';
import { CommonModule } from './common/common.module';
import { AuthModule } from './auth/auth.module';
import { TenantModule } from './tenant/tenant.module';
import { ReportsModule } from './reports/reports.module';

// ENTITIES
import { Account } from './accounts/entities/account.entity';
import { Transaction } from './transactions/entities/transaction.entity';
import { Report } from './reports/entities/report.entity';

@Module({
	imports: [
		ConfigModule.forRoot(),
		SequelizeModule.forRoot({
			dialect: process.env.DB_CONNECTION as any,
			host: process.env.DB_HOST,
			port: parseInt(process.env.DB_PORT),
			username: process.env.DB_USERNAME,
			password: process.env.DB_PASSWORD,
			database: process.env.DB_DATABASE,
			models: [Transaction, Account, Report],
			autoLoadModels: true,
			synchronize: true,
			sync: {
				alter: true,
				// force: true, // Deleta o banco sempre que reinicia a aplicação
			},
		}),
		TransactionsModule,
		AccountsModule,
		CommonModule,
		AuthModule,
		TenantModule,
		ReportsModule,
	],
})
export class AppModule {}
