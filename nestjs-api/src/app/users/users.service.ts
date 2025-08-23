import { Injectable, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) {}

    async createUser(name: string, email: string, password: string): Promise<User> {
        // 首先检查邮箱是否已存在
        const existingUser = await this.findByEmail(email);
        if (existingUser) {
            throw new ConflictException('该邮箱已被注册');
        }
        
        const user = this.userRepository.create({ name, email, password });
        return this.userRepository.save(user);
    }

    async findAll(): Promise<User[]> {
        return this.userRepository.find();
    }

    async findByEmail(email: string) {
        return this.userRepository.findOne({ where: { email } });
      }
      
    
}
