import { ArgumentsHost, ExceptionFilter, HttpException } from '@nestjs/common';
export declare class GeneralExceptionFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost): void;
}
