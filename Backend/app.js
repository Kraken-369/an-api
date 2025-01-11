const express = require('express');
const app = express();
const {initDB, getDB} = require('./connect/db');

(async () => {
  try {
    await initDB();
    const db = getDB();

    console.log(`DB Name: "${db.databaseName}" is initialized!`);
    console.log('-==::APP is running::==-');
  } catch (error) {
    console.error('Failed to initialize DB:', error);
  }
})();