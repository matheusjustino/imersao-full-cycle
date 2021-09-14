// DTOS
import { CreateAccountDto } from '../../accounts/dto/create-account.dto';

// ENTITIES
import { Account } from '../../accounts/entities/account.entity';

export const ACCOUNTS_SERVICE = 'ACCOUNT SERVICE';

export interface IAccountsService {
	create(createAccountDto: CreateAccountDto): Promise<Account>;
	findAll(): Promise<Account[]>;
	findOne(id: number): Promise<Account>;
}
