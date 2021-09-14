import { PartialType } from '@nestjs/mapped-types';

// DTOS
import { CreateTransactionDto } from './create-transaction.dto';

export class UpdateTransactionDto extends PartialType(CreateTransactionDto) {}
