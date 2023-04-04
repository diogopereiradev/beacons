export function markdowns(db: IDBDatabase) {
  const request = db.createObjectStore('markdowns', { keyPath: 'id' });
  request.createIndex('name', 'name', { unique: false });
  request.createIndex('content', 'content', { unique: false });
}