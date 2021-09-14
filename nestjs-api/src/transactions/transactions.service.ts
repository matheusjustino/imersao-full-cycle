import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

// ENTITIES
import { Transaction } from './entities/transaction.entity';

// DTOS
import { CreateTransactionDto } from './dto/create-transaction.dto';

// INTERFACES
import {
	ITenantService,
	TENANT_SERVICE,
} from '../common/interfaces/tenant.service';

// INTERFACES
import { ITransactionsService } from '../common/interfaces/transactions.service';

@Injectable()
export class TransactionsService implements ITransactionsService {
	constructor(
		@InjectModel(Transaction)
		private readonly transactionModel: typeof Transaction,
		@Inject(TENANT_SERVICE)
		private readonly tenantService: ITenantService,
	) {}

	public create(
		createTransactionDto: CreateTransactionDto,
	): Promise<Transaction> {
		return this.transactionModel.create({
			...createTransactionDto,
			account_id: this.tenantService.tenant.id,
		});
	}

	public findAll(): Promise<Transaction[]> {
		return this.transactionModel.findAll({
			where: {
				account_id: this.tenantService.tenant.id,
			},
		});
	}
}
