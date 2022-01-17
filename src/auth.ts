import { AppConfig, UserSession } from '@stacks/auth';
import { showConnect } from '@stacks/connect';

const appConfig = new AppConfig(['store_write']);

const stackSession = new UserSession({ appConfig });

const authenticate = () => {
  showConnect({
    appDetails: {
      name: 'Todos',
      icon: window.location.origin + '/logo.svg',
    },
    redirectTo: '/',
    userSession: stackSession,
    onFinish: async () => {
      const username = await getUsername(
        stackSession.loadUserData().profile.stxAddress.mainnet
      );
      // TODO: store username in local session
    },
  });
};

// Workaround for https://github.com/hirosystems/stacks.js/issues/1144
const getUsername = async (address: string) => {
  try {
    const response = await fetch(
      `https://stacks-node-api.mainnet.stacks.co/v1/addresses/stacks/${address}`,
      {
        method: 'GET',
        headers: {},
      }
    );
    const data = await response.json();
    return data.names[0];
  } catch (error) {
    console.error(error);
  }
};

const getUserData = () => {
  return session.loadUserData();
};

export { authenticate, getUserData };
