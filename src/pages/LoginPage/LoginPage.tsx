import { AuthorizationWrapper } from '../../components/shared/AuthorizationWrapper/AuthorizationWrapper';
import { LoginForm } from '../../components/LoginForm/LoginForm';
export const LoginPage: React.FC = () => {
  return (
    <AuthorizationWrapper
      header='Авторизация'
      text='Новый пользователь?'
      link='signup'
      linkText='Зарегистрироваться'
    >
      <LoginForm />
    </AuthorizationWrapper>
  );
};
