// ENTITIES
import { Account } from '../../accounts/entities/account.entity';

export const TENANT_SERVICE = 'TENANT SERVICE';

export interface ITenantService {
	readonly tenant: Account;
	setTenantBy(subdomain: string): Promise<void>;
}
