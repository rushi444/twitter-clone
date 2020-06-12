import React from 'react';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';

import {
  AmplifySignOut,
  AmplifyAuthenticator,
  AmplifySignUp,
} from '@aws-amplify/ui-react';
import { authFormFields } from './utils/auth';
import './App.css';

Amplify.configure(awsconfig);

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
