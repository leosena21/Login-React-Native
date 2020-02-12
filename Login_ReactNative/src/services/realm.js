import Realm from 'realm';
import Schemas from '../schemas/RepositorySchema';

export default function getRealm() {
  return Realm.open({
      schema: [Schemas],
    })
}
