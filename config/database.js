const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL || 'mongodb://localhost/foodify', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

const db = mongoose.connection;

db.on('connected', function () {
  console.log(`MongoDB is connected on ${db.host}:${db.port}database:${db.db.databaseName}`
  );
});