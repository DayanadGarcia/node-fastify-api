import { sql } from './db.js'

sql `
    CREATE TABLE videos (
    id TEXT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    duration INTEGER NOT NULL
);
`.then(() => {
  console.log('Table "videos" created successfully.')
})


// sql`DROP TABLE IF EXISTS videos;`.then(() => {
//   console.log('Table droped.')
// })