const mongoose = require('mongoose');


const connection = mongoose.createConnection('mongodb://localhost:27017/campusbuddy').on('open', () => {
     console.log('Connected to MongoDB');
}).on('error', () => {
     console.log('error occured');
});

module.exports = connection;

