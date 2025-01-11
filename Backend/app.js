const express = require('express');
const bodyParser = require('body-parser');
const {initDB, getDB} = require('./connect/db');
const routes = require('./routes/professionalRouter');

const port = process.env.PORT || 8080;
const app = express();

app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
})
app.use('/professional', routes);

(async () => {
  try {
    await initDB();
    const db = getDB();

    console.log(`DB Name: "${db.databaseName}" is initialized!`);
    app.listen(port, () => console.log('-==::APP is running::==-'));
  } catch (error) {
    console.error('Failed to initialize DB:', error);
  }
})();