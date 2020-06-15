import React from 'react';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import { AmplifyAuthenticator, AmplifySignUp } from '@aws-amplify/ui-react';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import { authFormFields } from './utils/auth';
import './App.css';

Amplify.configure(awsconfig);

export const App = () => {
  return (
    <AmplifyAuthenticator>
      <AmplifySignUp slot='sign-up' formFields={authFormFields} />
      <div>
        <ThemeProvider>
          <CSSReset />
          <HashRouter>
            <Switch>
              <Route exact path='/' component={AllPosts} />
              <Route exact path='/global-timeline' component={AllPosts} />
              <Route exact path='/:userId' component={PostsBySpecifiedUser} />
              <Redirect path='*' to='/' />
            </Switch>
          </HashRouter>
        </ThemeProvider>
      </div>
    </AmplifyAuthenticator>
  );
};

/**username: cloutty */
