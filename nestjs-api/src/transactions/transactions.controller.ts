import { Controller, Get, Post, Body, UseGuards, Inject } from '@nestjs/common';

// ENTITIES
import { Transaction } from './entities/transaction.entity';

// DTOS
import { CreateTransactionDto } from './dto/create-transaction.dto';

// GUARDS
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { TenantGuard } from '../tenant/tenant.guard';

// INTERFACES
import {
	ITransactionsService,
	TRANSACTIONS_SERVICE,
} from '../common/interfaces/transactions.service';

@UseGuards(JwtAuthGuard, TenantGuard)
@Controller('transactions')
export class TransactionsController {
	constructor(
		@Inject(TRANSACTIONS_SERVICE)
		private readonly transactionsService: ITransactionsService,
	) {}

	@Post()
	public create(
		@Body() createTransactionDto: CreateTransactionDto,
	): Promise<Transaction> {
		return this.transactionsService.create(createTransactionDto);
	}

	@Get()
	public findAll(): Promise<Transaction[]> {
		return this.transactionsService.findAll();
	}
}
