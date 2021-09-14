// DTOS
import { CreateTransactionDto } from 'src/transactions/dto/create-transaction.dto';

// ENTITIES
import { Transaction } from 'src/transactions/entities/transaction.entity';

export const TRANSACTIONS_SERVICE = 'TRANSACTIONS SERVICE';

export interface ITransactionsService {
	create(createTransactionDto: CreateTransactionDto): Promise<Transaction>;
	findAll(): Promise<Transaction[]>;
}
