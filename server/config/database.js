const { Client } = require('pg');

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'drug_store',
  password: '123',
  port: 5432,
});

const test_query = () => {
  console.log("test user query...");
  const TempQuery = 'SELECT * FROM stores';

  client.query(TempQuery, (err, result) => {
    if (err) {
      console.log('Error query db: ', err.message);
    } else {
      console.log(result.rows);
    }
    // client.end();
  });
};

const db_init = () => {
  console.log('connecting postgres..');

  client.connect(function (err) {
    if (err) throw err;
    console.log("Database connected!");
    test_query();
  });
};

// Export both the client and functions
module.exports = { client, test_query, db_init };

