import React from 'react';
import './App.css';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import { AmplifyAuthenticator, AmplifySignUp } from '@aws-amplify/ui-react';
import { authFormFields } from './utils/auth';
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Amplify from '@aws-amplify/core';
import PubSub from '@aws-amplify/pubsub';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);
PubSub.configure(awsconfig);

const drawerWidth = 240;

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#1EA1F2',
      contrastText: '#fff',
    },
    background: {
      default: '#15202B',
      paper: '#15202B',
    },
    divider: '#37444C',
  },
  overrides: {
    MuiButton: {
      textPrimary: 'white',
    },
  },
  typography: {
    fontFamily: ['Arial'].join(','),
  },
  status: {
    danger: 'orange',
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    height: '100%',
    width: 800,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  appBar: {
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

export const App = () => {
  const classes = useStyles();
  return (
    <AmplifyAuthenticator>
      <AmplifySignUp slot='sign-up' formFields={authFormFields} />
      <div className={classes.root}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
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
