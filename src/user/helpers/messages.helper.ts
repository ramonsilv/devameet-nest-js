import { User } from "../schemas/user.schema";

export const UserMessagesHelper = {
  USER_LOGIN_OR_EMAIL_NOT_FOUND : 'Email e/ou senha invalidos',
  REGISTER_NAME_NOT_VALID: 'Nome informado não é válido',
  REGISTER_EMAIL_NOT_VALID: 'Email informado não é válido',
  REGISTER_PASSWORD_NOT_VALID: 'Senha informada não é válido, ela precisa ter de 4 a 12 caracteres e conter pelo menos um caracter maiúsculo, um minúsculo, um número e um caracter especial.',
  REGISTER_EXIST_EMAIL_ACCONT: 'Já existe uma conta com o email informado'
}