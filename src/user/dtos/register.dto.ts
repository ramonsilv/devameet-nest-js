import { IsEmail, IsNotEmpty, MinLength, MaxLength, Matches, IsString } from 'class-validator';
import { UserMessagesHelper } from '../helpers/messages.helper';

export const MessagesHelper = {
    AUTH_LOGIN_NOT_FOUND: 'Favor preencher o login.',
    AUTH_PASSWORD_NOT_FOUND: 'Favor preencher a senha.',
    AUTH_PASSWORD_OR_EMAIL_NOT_FOUND: 'E-mail e/ou senha inválidos!',
    REGISTER_NAME_NOT_FOUND: 'Favor preencher o nome.',
    REGISTER_STRONG_PASSWORD: 'A Senha deve ter de 4 a 12 caracteres e conter maiúsculas, minúsculas, números e caracteres especiais',
    REGISTER_EMAIL_FOUND: 'Já existe uma conta com o email informado'
};

export class RegisterDto {
    // @MinLength(2,{ message: UserMessagesHelper.REGISTER_NAME_NOT_VALID })
    // name : string;

    // @IsEmail({}, { message: UserMessagesHelper.REGISTER_EMAIL_NOT_VALID })
    // email : string;

    // @MinLength(4,{ message: UserMessagesHelper.REGISTER_PASSWORD_NOT_VALID })
    // @MaxLength(4,{ message: UserMessagesHelper.REGISTER_PASSWORD_NOT_VALID })
    // @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, 
    //     { message: UserMessagesHelper.REGISTER_PASSWORD_NOT_VALID })
    // password : string;

    // @IsString()
    // avatar : string;
    @IsEmail({}, { message: MessagesHelper.AUTH_LOGIN_NOT_FOUND })
    email: string;

    @IsNotEmpty({ message: MessagesHelper.AUTH_PASSWORD_NOT_FOUND })
    @MinLength(4, { message: MessagesHelper.REGISTER_STRONG_PASSWORD })
    @MaxLength(20, { message: MessagesHelper.REGISTER_STRONG_PASSWORD, })
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
        message: MessagesHelper.REGISTER_STRONG_PASSWORD,
    })
    password: string;

    @IsNotEmpty({ message: MessagesHelper.REGISTER_NAME_NOT_FOUND })
    @MinLength(2, { message: MessagesHelper.REGISTER_NAME_NOT_FOUND })
    name: string;

    @IsString()
    avatar: string;
}