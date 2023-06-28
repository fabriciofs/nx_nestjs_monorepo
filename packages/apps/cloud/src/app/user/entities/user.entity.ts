import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity } from 'typeorm';
import { UserEntity as UserEntityShared } from '@packages/entities';

@Entity({ name: 'users' })
export class UserEntity extends UserEntityShared {
  @Column('uuid')
  @ApiProperty()
  companyId: string;

  constructor(user?: Partial<UserEntity>) {
    super(user);
    this.companyId = user?.companyId;
  }
}
