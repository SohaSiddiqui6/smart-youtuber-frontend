import React from "react";

export const AuthPage: React.FC<{}> = ({ children }) => {
  return (
    <div>
      <h1>Outer Shell</h1>
      {children}
    </div>
  );
};

export const LoginPage: React.FC<{}> = ({}) => {
  return (
    <AuthPage>
      <div>Login Form</div>
    </AuthPage>
  );
};

export const RegisterForm: React.FC<{}> = ({}) => {
  return (
    <AuthPage>
      <div>Register Form</div>
    </AuthPage>
  );
};
