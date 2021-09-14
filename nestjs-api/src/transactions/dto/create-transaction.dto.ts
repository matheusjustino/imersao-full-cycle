import {
	IsISO8601,
	IsNotEmpty,
	IsNumber,
	IsString,
	MaxLength,
	IsIn,
} from 'class-validator';

// ENUMS
import { TransactionCategory } from '../../common/enums/transaction-category.enum';
import { TransactionType } from '../../common/enums/transaction-type.enum';

// ENTITIES
import {
	TransactionCategoryList,
	TransactionTypeList,
} from '../entities/transaction.entity';

export class CreateTransactionDto {
	@IsNotEmpty()
	@IsISO8601()
	public payment_date: Date;

	@IsNotEmpty()
	@IsString()
	@MaxLength(255)
	public name: string;

	@IsNotEmpty()
	@IsString()
	@MaxLength(255)
	public description: string;

	@IsNotEmpty()
	@IsIn(TransactionCategoryList)
	public category: TransactionCategory;

	@IsNotEmpty()
	@IsNumber()
	public amount: number;

	@IsNotEmpty()
	@IsIn(TransactionTypeList)
	public type: TransactionType;
}
