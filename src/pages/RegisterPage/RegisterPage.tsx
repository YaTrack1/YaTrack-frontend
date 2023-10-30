import { AuthorizationWrapper } from '../../components/shared/AuthorizationWrapper/AuthorizationWrapper';
import { RegisterForm } from '../../components/RegisterForm/RegisterForm';
export const RegisterPage: React.FC = () => {
  return (
    <AuthorizationWrapper
      header='Регистрация'
      text='Уже есть аккаунт?'
      link='signin'
      linkText='Войти'
    >
      <RegisterForm />
    </AuthorizationWrapper>
  );
};
