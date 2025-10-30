import { ViewConfig } from '@vaadin/hilla-file-router/types.js';
import React from 'react';
import { LoginForm } from '@vaadin/react-components/LoginForm.js';

export const config: ViewConfig = {
  menu: { order: 4, icon: 'line-awesome/svg/basketball-ball-solid.svg' },
  title: 'LogIn',
};

export default function LogInView() {
  return (
        <div className="login-rich-content">
          <LoginForm theme="dark" no-autofocus />
        </div>
  );
}
