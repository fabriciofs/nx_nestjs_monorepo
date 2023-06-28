import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';

const userEntityList: UserEntity[] = [
  new UserEntity({
    name: 'user-1',
    email: 'user-1@email.com',
    password: 'password',
  }),
  new UserEntity({
    name: 'user-2',
    email: 'user-2@email.com',
    password: 'password',
  }),
  new UserEntity({
    name: 'user-3',
    email: 'user-3@email.com',
    password: 'password',
  }),
  new UserEntity({
    name: 'user-4',
    email: 'user-4@email.com',
    password: 'password',
  }),
];

const updatedUserEntityItem = new UserEntity({
  name: 'user-1 updated',
  email: 'user-1@email.com',
  password: 'password',
});

describe('UserService', () => {
  let userService: UserService;
  let userRepository: Repository<UserEntity>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: getRepositoryToken(UserEntity),
          useValue: {
            find: jest.fn().mockResolvedValue(userEntityList),
            findOneOrFail: jest.fn().mockResolvedValue(userEntityList[0]),
            create: jest.fn().mockReturnValue(userEntityList[0]),
            merge: jest.fn().mockReturnValue(updatedUserEntityItem),
            save: jest.fn().mockResolvedValue(userEntityList[0]),
            softDelete: jest.fn().mockReturnValue(undefined),
          },
        },
      ],
    }).compile();

    userService = module.get<UserService>(UserService);
    userRepository = module.get<Repository<UserEntity>>(
      getRepositoryToken(UserEntity)
    );
  });

  it('should be defined', () => {
    expect(userService).toBeDefined();
    expect(userRepository).toBeDefined();
  });
});
