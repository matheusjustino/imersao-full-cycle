import { Module } from '@nestjs/common';

// STRATEGIES
import { JwtStrategyService } from './jwt-strategy/jwt-strategy.service';

// GUARDS
import { JwtAuthGuard } from './jwt-auth.guard';

@Module({
	providers: [JwtStrategyService, JwtAuthGuard],
	exports: [JwtStrategyService, JwtAuthGuard],
})
export class AuthModule {}
