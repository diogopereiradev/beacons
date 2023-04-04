type DatabaseOptions = {
  onsuccess?: (db: IDBDatabase) => void
  onupgradeneeded?: (db: IDBDatabase) => void
};

export function DBOpen(options: DatabaseOptions) {
  const request = window.indexedDB.open('marklab', 1);

  request.onsuccess = (e) => {
    const target = e.target as unknown as { result: IDBDatabase };
    const db = target.result;
    options.onsuccess?.(db);
  };

  request.onerror = (e) => {
    console.error(`[indexedDB] An error has occurred: ${e.target}`);
  };

  request.onupgradeneeded = (e) => {
    const target = e.target as unknown as { result: IDBDatabase };
    const db = target.result;
    options.onupgradeneeded?.(db);
  };
}