import { IsNotEmpty, IsString } from 'class-validator';

export class CreateAccountDto {
	@IsNotEmpty()
	@IsString()
	public name: string;

	@IsNotEmpty()
	@IsString()
	public subdomain: string;
}
