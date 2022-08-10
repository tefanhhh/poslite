import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InsertResult, Repository, UpdateResult } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      id: 1,
      firstName: 'tefan',
      lastName: 'haetami',
      username: 'john',
      password: 'changeme',
      isActive: true,
    },
    {
      id: 2,
      firstName: 'tefan',
      lastName: 'haetami',
      username: 'maria',
      password: 'guess',
      isActive: true,
    },
  ];

  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }

  create(createUserDto: CreateUserDto): Promise<InsertResult> {
    return this.usersRepository.insert(createUserDto);
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  // findOne(id: number): Promise<User> {
  //   return this.usersRepository.findOneBy({ id });
  // }

  update(id: number, updateUserDto: UpdateUserDto): Promise<UpdateResult> {
    return this.usersRepository.update({ id }, updateUserDto);
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
