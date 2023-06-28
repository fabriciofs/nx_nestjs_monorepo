import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { catchError, from, mapTo, mergeMap, Observable } from 'rxjs';
import { FindOneOptions, Repository } from 'typeorm';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>
  ) {}

  async create(createUserDto: CreateUserDto): Promise<UserEntity> {
    return await this.userRepository.save(
      this.userRepository.create(createUserDto)
    );
  }

  findAll(): Observable<UserEntity[]> {
    return from(this.userRepository.find());
  }

  findOneOrFail(
    conditions: FindOneOptions<UserEntity>
  ): Observable<UserEntity> {
    try {
      return from(this.userRepository.findOneOrFail(conditions));
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  update(id: string, data: UpdateUserDto): Observable<UserEntity> {
    return from(this.findOneOrFail({ where: { id } })).pipe(
      mergeMap((user) => {
        this.userRepository.merge(user, data);
        return from(this.userRepository.save(user));
      }),
      catchError((error) => {
        throw new NotFoundException(error.message);
      })
    );
  }

  remove(id: string): Observable<void> {
    return from(this.findOneOrFail({ where: { id } })).pipe(
      mergeMap(() => from(this.userRepository.softDelete(id))),
      catchError((error) => {
        throw new NotFoundException(error.message);
      }),
      mapTo(undefined)
    );
  }
}
