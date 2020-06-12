import React from 'react';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';

import {
  AmplifySignOut,
  AmplifyAuthenticator,
  AmplifySignUp,
} from '@aws-amplify/ui-react';
import './App.css';

Amplify.configure(awsconfig);

const authFormFields = [
  {
    type: 'username',
    label: 'Username',
    placeholder: 'username...',
    required: true,
  },
  {
    type: 'email',
    label: 'Email',
    placeholder: 'email...',
    required: true,
  },
  {
    type: 'password',
    label: 'Password',
    placeholder: 'password...',
    required: true,
  },
];

export const App = () => {
  return (
    <AmplifyAuthenticator>
      <AmplifySignUp slot='sign-up' formFields={authFormFields} />
      <div>
        <AmplifySignOut />
        <h1>Hello World!</h1>
      </div>
    </AmplifyAuthenticator>
  );
};

/**username: cloutty */
