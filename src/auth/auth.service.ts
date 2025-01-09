import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { loginDto } from './dtos/login.dto';
import { RegisterDto } from 'src/user/dtos/register.dto';
import { MessagesHelper } from './helpers/messages.helper';
import { User } from 'src/user/schemas/user.schema';
import { UserModule } from '../user/user.module';
import { UserMessagesHelper } from 'src/user/helpers/messages.helper';

@Injectable()
export class AuthService {
  private looger = new Logger(AuthService.name);

  constructor(
    private readonly userService: UserService
  ) {}

  login(dto: loginDto) {
    this.looger.debug('login - started');
    if (dto.login !== 'teste@teste.com' || dto.password !== 'teste@123') {
      throw new BadRequestException(
        MessagesHelper.AUTH_PASSWORD_OR_LOGIN_NOT_FOUND
      );
    }
    return dto;
  }
  
  async register(dto: RegisterDto){
    this.looger.debug('register - started');
    if (await this.userService.existsByEmail(dto.email)) {
      throw new BadRequestException(UserMessagesHelper.REGISTER_EXIST_EMAIL_ACCONT);
    }
  
    await this.userService.create(dto);
  }
}

// ESTOU COM PROBLEMA NESSA PARTE PAREI NO VIDEO LOGIN E CADASTRO/CADASTRO - PARTE3
//na linha 31 no UserMessagesHelper esta faltando .REGISTER_EMAIL_FOUND ou .REGISTER_EXIST_EMAIL_ACCONT

