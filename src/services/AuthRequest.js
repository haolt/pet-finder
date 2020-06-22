import _RequestBase from './_RequestBase';

const resource = '/oauth2/token';

export default {
  doAuthenticate(clientId, clientSecret) {
    return _RequestBase.post(
      `${resource}`,
      {
        grant_type: 'client_credentials',
        client_id: clientId,
        client_secret: clientSecret,
      }
    );
  },
}

