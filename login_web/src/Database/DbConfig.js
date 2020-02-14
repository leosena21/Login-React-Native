import Dexie from 'dexie';

var db;

export function dbConfig(){
  if(db==null){
    db = new Dexie("usuariosdb");
  }
  db.version(1).stores({
    usuarios: "++id,name,&userLog,passwd"
  });
  return db;
}
