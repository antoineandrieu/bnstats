import { AppConfig, UserSession } from '@stacks/auth';
import { showConnect } from '@stacks/connect';
import { getUsername } from './services/stacksApi';

const appConfig = new AppConfig(['store_write']);

const stackSession = new UserSession({ appConfig });

const authenticate = (authCallback: Function) => {
  showConnect({
    appDetails: {
      name: 'Bnstats',
      icon: window.location.origin + '/logo.svg',
    },
    redirectTo: '/',
    userSession: stackSession,
    onFinish: async () => {
      // Workaround for https://github.com/hirosystems/stacks.js/issues/1144
      const userData = stackSession.loadUserData();
      const username = await getUsername(userData.profile.stxAddress.mainnet);
      userData.username = username;
      let sessionData = stackSession.store.getSessionData();
      sessionData.userData = userData;
      stackSession.store.setSessionData(sessionData);
      authCallback();
    },
  });
};

const getUserData = () => {
  if (stackSession.isUserSignedIn()) {
    return stackSession.loadUserData();
  }
  return null;
};

export { authenticate, getUserData };
