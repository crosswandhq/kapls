import Realm from 'realm';
import { createRealmContext } from '@realm/react';

const config: Realm.Configuration = {
  schema: [],
  deleteRealmIfMigrationNeeded: __DEV__,
};

export default createRealmContext(config);
