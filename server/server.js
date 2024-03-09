const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
const app = express();
app.use(cors());

const PORT = 3001;

// import {Clint} from 'pg';

const {client, test_query, db_init} = require('./config/database.js');
db_init();

app.listen(PORT, () => {
  console.log(`> server listening ${PORT}`);
});


/*
app.post('/new-order', async (req,res) => {
  const target = req.body;

//  const query = 'INSERT INTO order VALUES()'

});
*/


app.get('/stores', async (req,res) => {
  
  const query = 'SELECT * FROM stores';

    try {
      const result = await client.query(query);

      if (result.rows.lenght === 0){
         return res.status(401).json({ error: 'Something went wrong' });
      }
      else {
        res.status(200).json(result.rows);
      }
    }
  catch(err){
    console.log(err);
  }
});

app.post('/new-order', (req,res) => {
  const Jsonbody = req.body();


  res.status(200).json({ message: "Order created"});
});
