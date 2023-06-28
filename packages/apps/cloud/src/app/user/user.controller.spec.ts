import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserEntity } from './entities/user.entity';

const userEntityList: UserEntity[] = [
  new UserEntity({
    name: 'user-1',
    email: 'user-1@email.com',
    password: 'password',
    companyId: 'a17cbb84-9a3e-4e14-95f6-60e5135e331a',
  }),
  new UserEntity({
    name: 'user-2',
    email: 'user-2@email.com',
    password: 'password',
    companyId: 'a17cbb84-9a3e-4e14-95f6-60e5135e331b',
  }),
  new UserEntity({
    name: 'user-3',
    email: 'user-3@email.com',
    password: 'password',
    companyId: 'a17cbb84-9a3e-4e14-95f6-60e5135e331c',
  }),
  new UserEntity({
    name: 'user-4',
    email: 'user-4@email.com',
    password: 'password',
    companyId: 'a17cbb84-9a3e-4e14-95f6-60e5135e331d',
  }),
];

const newUserEntity = new UserEntity({
  name: 'user-new',
  email: 'user-new@email.com',
  password: 'password',
  companyId: 'a17cbb84-9a3e-4e14-95f6-60e5135e331e',
});

const updatedUserEntity = new UserEntity({
  name: 'user-1 updated',
  email: 'user-1@email.com',
  password: 'password',
  companyId: 'a17cbb84-9a3e-4e14-95f6-60e5135e331a',
});

describe('UserController', () => {
  let userController: UserController;
  let userService: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        {
          provide: UserService,
          useValue: {
            findAll: jest.fn().mockResolvedValue(userEntityList),
            findOneOrFail: jest.fn().mockResolvedValue(userEntityList[0]),
            create: jest.fn().mockResolvedValue(newUserEntity),
            update: jest.fn().mockResolvedValue(updatedUserEntity),
            deleteById: jest.fn().mockResolvedValue(undefined),
          },
        },
      ],
    }).compile();

    userController = module.get<UserController>(UserController);
    userService = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(userController).toBeDefined();
    expect(userService).toBeDefined();
  });
});
