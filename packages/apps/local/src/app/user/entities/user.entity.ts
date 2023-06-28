import { UserEntity as UserEntityShared } from '@packages/entities';
import { Entity } from 'typeorm';

@Entity({ name: 'users' })
export class UserEntity extends UserEntityShared {
  constructor(user?: Partial<UserEntity>) {
    super(user);
  }
}
