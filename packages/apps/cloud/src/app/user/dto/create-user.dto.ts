import { ApiProperty } from '@nestjs/swagger';
import { CreateUserDto as CreateUserDtoShared } from '@packages/entities';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto extends CreateUserDtoShared {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  companyId: string;
}
