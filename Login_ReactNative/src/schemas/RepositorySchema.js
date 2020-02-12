export default class RepositorySchema{
  static schema = {
    name: 'users',
    primaryKey: 'id',
    properties: {
      id: {type: 'int', indexed: true},
      name:  'string',
      user: 'string',
      pass: 'string',
    }
  }
}