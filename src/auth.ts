import { AppConfig, UserSession } from '@stacks/auth';
import { showConnect } from '@stacks/connect';

const appConfig = new AppConfig(['store_write']);

const session = new UserSession({ appConfig });

const authenticate = () => {
  showConnect({
    appDetails: {
      name: 'Todos',
      icon: window.location.origin + '/logo.svg',
    },
    redirectTo: '/',
    userSession: session,
    onFinish: () => {
      console.log(session.loadUserData());
    },
  });
};

const getUserData = () => {
  return session.loadUserData();
};

export { authenticate, getUserData };
