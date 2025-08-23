import { CanActivate, ExecutionContext, Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthGuard implements CanActivate {
    private readonly logger = new Logger(AuthGuard.name);

    constructor(private readonly jwtService: JwtService) {}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest();
        const authHeader = request.headers.authorization;
        
        if (!authHeader) {
            this.logger.warn('没有提供认证头');
            throw new UnauthorizedException('没有提供认证头');
        }
        
        try {
            const bearerToken = authHeader.split(' ');
            
            if (bearerToken.length !== 2 || bearerToken[0] !== 'Bearer') {
                this.logger.warn('认证头格式不正确');
                throw new UnauthorizedException('认证头格式不正确');
            }
            
            const token = bearerToken[1];
            this.logger.debug('解析JWT token');
            
            const decoded = await this.jwtService.verifyAsync(token);
            request.user = decoded;
            
            this.logger.debug(`身份验证成功: userId=${decoded.userId}`);
            return true;
        } catch (error) {
            this.logger.error(`身份验证失败: ${error.message}`, error.stack);
            throw new UnauthorizedException('无效的认证头');
        }
    }
} 