import {
	CanActivate,
	ExecutionContext,
	Inject,
	Injectable,
} from '@nestjs/common';

// INTERFACES
import {
	ITenantService,
	TENANT_SERVICE,
} from '../common/interfaces/tenant.service';

@Injectable()
export class TenantGuard implements CanActivate {
	constructor(
		@Inject(TENANT_SERVICE)
		private readonly tenantService: ITenantService,
	) {}

	public async canActivate(context: ExecutionContext): Promise<boolean> {
		const request = context.switchToHttp().getRequest(); // Express
		const { subdomain } = request.user;

		await this.tenantService.setTenantBy(subdomain);

		return true;
	}
}
