/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import Home from './Home';
import {Alert} from 'react-native';
import RealmConfig, {Session, app} from './RealmConfig';
import {AppProvider, UserProvider, useUser} from '@realm/react';
import {OpenRealmBehaviorType, OpenRealmTimeOutBehavior} from 'realm';
import {NetworkProvider} from 'react-native-offline';

const {RealmProvider} = RealmConfig;

const behaviorConfiguration: Realm.OpenRealmBehaviorConfiguration = {
  type: OpenRealmBehaviorType.OpenImmediately,
  timeOut: 3000,
  timeOutBehavior: OpenRealmTimeOutBehavior.OpenLocalRealm,
};

const App = () => {
  const [done, setDone] = useState(false);
  const currentUser = useUser();

  useEffect(() => {
    (async () => {
      if (!app.currentUser) {
        try {
          await app.logIn(
            Realm.Credentials.apiKey(
              'gw8IPWH1AUNQ2xEE29ZvA8S93RhGA6TwxgvRSXLfNiLW1T4PD04uQt9eg2PoSaHc',
            ),
          );
        } catch (e: any) {
          Alert.alert(e.message);
        } finally {
          setDone(true);
        }
      } else {
        setDone(true);
      }
    })();
  }, []);

  if (!done || !currentUser) {
    return <></>;
  }

  return (
    <RealmProvider
      sync={{
        flexible: true,
        onError: e => {
          console.log('ERROR', e);
        },
        initialSubscriptions: {
          update(subs, realm) {
            subs.add(realm.objects(Session));
          },
        },
        existingRealmFileBehavior: behaviorConfiguration,
        newRealmFileBehavior: behaviorConfiguration,
      }}>
      <NetworkProvider>
        <Home />
      </NetworkProvider>
    </RealmProvider>
  );
};

function AppWrapper(): JSX.Element {
  return (
    <AppProvider id={app.id}>
      <UserProvider>
        <App />
      </UserProvider>
    </AppProvider>
  );
}

export default AppWrapper;
