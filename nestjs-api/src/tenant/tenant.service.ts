import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

// INTERFACES
import { ITenantService } from '../common/interfaces/tenant.service';

// ENTITIES
import { Account } from '../accounts/entities/account.entity';

@Injectable()
export class TenantService implements ITenantService {
	private account: Account | null = null;

	constructor(
		@InjectModel(Account)
		private readonly accountModel: typeof Account,
	) {}

	public get tenant(): Account {
		return this.account;
	}

	public set tenant(tenant: Account) {
		this.account = tenant;
	}

	public async setTenantBy(subdomain: string): Promise<void> {
		this.tenant = await this.accountModel.findOne({
			where: {
				subdomain,
			},
			rejectOnEmpty: true,
		});
	}
}
