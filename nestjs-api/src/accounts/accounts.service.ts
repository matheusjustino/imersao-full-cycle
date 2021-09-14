import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

// INTERFACES
import { IAccountsService } from '../common/interfaces/accounts.service';

// DTOS
import { CreateAccountDto } from './dto/create-account.dto';

// ENTITIES
import { Account } from './entities/account.entity';

@Injectable()
export class AccountsService implements IAccountsService {
	constructor(
		@InjectModel(Account)
		private readonly accountModel: typeof Account,
	) {}

	public create(createAccountDto: CreateAccountDto): Promise<Account> {
		return this.accountModel.create(createAccountDto);
	}

	public findAll(): Promise<Account[]> {
		return this.accountModel.findAll();
	}

	public findOne(id: number): Promise<Account> {
		return this.accountModel.findByPk(id, {
			rejectOnEmpty: true,
		});
	}
}
