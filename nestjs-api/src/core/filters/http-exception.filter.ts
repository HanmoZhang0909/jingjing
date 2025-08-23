import { ExceptionFilter, Catch, ArgumentsHost, HttpException, HttpStatus } from '@nestjs/common';
import { Request, Response } from 'express';
import { QueryFailedError } from 'typeorm';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let message = '服务器内部错误';
    let code = 'INTERNAL_SERVER_ERROR';

    if (exception instanceof HttpException) {
      status = exception.getStatus();
      const exceptionResponse = exception.getResponse();
      
      if (typeof exceptionResponse === 'object' && exceptionResponse !== null) {
        message = (exceptionResponse as any).message || exception.message;
      } else {
        message = exceptionResponse || exception.message;
      }

      code = exception.name;
    } else if (exception instanceof QueryFailedError) {
      // 数据库错误
      status = HttpStatus.BAD_REQUEST;
      
      if (exception.driverError && exception.driverError.code === 'ER_DUP_ENTRY') {
        message = '该数据已存在，请勿重复添加';
        code = 'DUPLICATE_ENTRY';
      } else {
        message = '数据库操作失败';
        code = 'DATABASE_ERROR';
      }
    }

    response.status(status).json({
      success: false,
      code,
      message,
      timestamp: new Date().toISOString(),
      path: request.url,
    });
  }
} 