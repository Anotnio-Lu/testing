import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

export const putDb = async (content) => {
  const db = await openDB('jate', 1);
  await db.put('jate', { id: 1, content });
  console.log('Data saved to database.');
};

export const getDb = async () => {
  const db = await openDB('jate', 1);
  const data = await db.get('jate', 1);
  console.log('Data retrieved from database.');
  return data ? data.content : null;
};

initdb();
