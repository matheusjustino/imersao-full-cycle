import {
	Controller,
	Get,
	Post,
	Body,
	Param,
	ParseUUIDPipe,
	Inject,
} from '@nestjs/common';

// INTERFACES
import {
	ACCOUNTS_SERVICE,
	IAccountsService,
} from '../common/interfaces/accounts.service';

// DTOS
import { CreateAccountDto } from './dto/create-account.dto';

// ENTITIES
import { Account } from './entities/account.entity';

@Controller('accounts')
export class AccountsController {
	constructor(
		@Inject(ACCOUNTS_SERVICE)
		private readonly accountsService: IAccountsService,
	) {}

	@Post()
	public create(
		@Body() createAccountDto: CreateAccountDto,
	): Promise<Account> {
		return this.accountsService.create(createAccountDto);
	}

	@Get()
	public findAll(): Promise<Account[]> {
		return this.accountsService.findAll();
	}

	@Get(':id')
	public findOne(
		@Param('id', new ParseUUIDPipe()) id: string,
	): Promise<Account> {
		return this.accountsService.findOne(+id);
	}
}
