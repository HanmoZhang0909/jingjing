import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
    private readonly logger = new Logger(AuthService.name);

    constructor(
        private readonly usersService: UsersService,
        private readonly jwtService: JwtService,
    ) { }

    async register(name: string, email: string, password: string) {
        const hashedPassword = await bcrypt.hash(password, 10);
        return this.usersService.createUser(name, email, hashedPassword);
    }

    async login(email: string, password: string) {
        try {
            this.logger.log(`尝试登录: ${email}`);
            
            const user = await this.usersService.findByEmail(email);
            if (!user) {
                this.logger.warn(`用户不存在: ${email}`);
                throw new UnauthorizedException('用户不存在');
            }

            this.logger.debug(`找到用户，正在验证密码`);
            const isValid = await bcrypt.compare(password, user.password);
            
            if (!isValid) {
                this.logger.warn(`密码错误: ${email}`);
                throw new UnauthorizedException('密码错误');
            }

            this.logger.log(`用户登录成功: ${email}`);
            return {
                access_token: this.jwtService.sign({ userId: user.id }),
            };
        } catch (error) {
            this.logger.error(`登录出错: ${error.message}`, error.stack);
            throw error;
        }
    }
}   