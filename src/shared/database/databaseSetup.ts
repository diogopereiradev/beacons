import { DBOpen } from './dbOpen';
import { markdowns } from './models/markdowns';

// Create default tables to database
DBOpen({
  onupgradeneeded: (db) => {
    markdowns(db);
  }
});