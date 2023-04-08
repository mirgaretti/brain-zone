import React, { useState } from 'react';
import { BoldText, Text, Arrow } from '../common/styled';
import { LoginContainer, LoginInput, LoginText } from './styled';

const LoginForm = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  return (    
    <LoginContainer>
        <LoginInput placeholder="Логин" onChange={(e) => setLogin(e.currentTarget.value)} />
        <LoginInput type="password" placeholder="Пароль" onChange={(e) => setPassword(e.currentTarget.value)} />
        <LoginText><BoldText><span onClick={() => alert(`login: ${login}, password: ${password}`)}>Войти</span> | Регистрация</BoldText></LoginText>
    </LoginContainer>
  );
};

export default LoginForm;