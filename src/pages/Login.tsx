import { ChangeEvent, FC, FormEvent, useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

import { setUser } from '../redux/actions';
import { ActionInterface } from '../redux/reducer';
import { LanguageEnum, User, UserPermission, UserRoleEnum } from '../types';

interface LoginProps {
  setUserToStore: (user: User) => ActionInterface;
}

const Login: FC<LoginProps> = ({ setUserToStore }) => {
  const [user, setUser] = useState<{ login: string; password: string }>({ login: '', password: '' });
  const [isRedirect, setIsRedirect] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const hundleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setUserToStore({
        id: '555',
        login: user.login,
        lang: LanguageEnum.RU,
        role: UserRoleEnum.STUDENT,
        permissions: [UserPermission.DASHBOARD],
      });
      setIsRedirect(true);
      setIsLoading(false);
    }, 2000);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setUser(prev => ({ ...prev, [id]: value }));
  };

  return (
    <div>
      {isRedirect ? (
        <Redirect to='/' />
      ) : (
        <form onSubmit={hundleSubmit}>
          <input id='login' value={user.login} onChange={handleChange} type='txt' />
          <input id='password' value={user.password} onChange={handleChange} type='password' />
          <button type='submit' disabled={isLoading}>
            Войти
          </button>
        </form>
      )}
    </div>
  );
};

export default connect(null, { setUserToStore: setUser })(Login);
