import { BadRequestException, Injectable } from '@nestjs/common';
import { loginDto } from './dtos/login.dto';
import { MessagesHelper } from './helpers/messages.helper';

@Injectable()
export class AuthService {
  login(dto: loginDto) {
    if (dto.login !== 'teste@teste.com' || dto.password !== 'teste@123') {
      throw new BadRequestException(
        MessagesHelper.AUTH_PASSWORD_OR_LOGIN_NOT_FOUND,
      );
    }
    return dto;
  }
}
