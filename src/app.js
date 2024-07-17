const express = require('express');
const bodyParser = require('body-parser');
const memberRoutes = require('./routes/memberRoutes');
require('dotenv').config();
const sequelize = require('./config/database');

const app = express();

app.use(bodyParser.json());
app.use('/api', memberRoutes);

sequelize
  .sync()
  .then(() => {
    console.log('Database synced');
  })
  .catch((err) => {
    console.log('Error syncing database', err);
  });

module.exports = app;
