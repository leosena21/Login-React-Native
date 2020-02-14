export const DBConfig = {
  name: 'MyDB',
  version: 1,
  objectStoresMeta: [
    {
      store: 'usuarios',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        { name: 'name', keypath: 'name', options: { unique: false } },
        { name: 'user', keypath: 'user', options: { unique: true } },
        { name: 'pass', keypath: 'pass', options: { unique: false } }
      ]
    }
  ]
};