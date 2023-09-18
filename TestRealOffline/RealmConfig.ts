import Realm from 'realm';
import {createRealmContext} from '@realm/react';
import aliasConfig from './atlasConfig.json';

export const app = new Realm.App(aliasConfig.appId);

export type SessionType = {
  _id: Realm.BSON.ObjectId;
  name?: string;
};

export class Session extends Realm.Object<SessionType> {
  public static schema: Realm.ObjectSchema = {
    name: 'sessions',
    properties: {
      _id: 'objectId',
      name: 'string?',
    },
    primaryKey: '_id',
  };

  _id!: Realm.BSON.ObjectId;
  name?: string;
}

// Create a configuration object
const realmConfig: Realm.Configuration = {
  schema: [Session],
  // encryptionKey: new Int8Array(64),
};
// Create a realm context
export default createRealmContext(realmConfig);
