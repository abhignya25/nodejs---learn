const express = require('express');
const parser = require('body-parser');
const mongoose = require('mongoose');

const TodoItem = require('./models/Item') // Ensure that you import model models after the Sequelize instance is created in your app.js file. This makes sure the models are registered with Sequelize.
const itemRoutes = require('./routes/items');

const app = express();

app.use(parser.urlencoded({ extended: false }));
app.use(express.json());

app.use('/items', itemRoutes);

mongoose
  .connect(
    'mongodb://localhost:27017/todo'
  )
  .then(result => {
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  });


