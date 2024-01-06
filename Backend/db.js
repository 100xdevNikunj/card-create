const mongoose = require('mongoose')

const { Schema } = mongoose;

mongoose.connect(process.env.MONGODB_URI)

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB!');
});

const cardSchema = new Schema({
    name: String,
    description: String,
    social: [{LinkedIn: String, Twitter: String}],
    Interests:[String] 
})

const Card = mongoose.model('Card', cardSchema);

module.exports = {
    mongoose,
    Card,
  };