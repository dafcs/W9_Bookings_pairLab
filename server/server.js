const express = require("express")
const cors = require("cors")
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');


const app = express();  
app.use(express.json());                      
app.use(cors())

MongoClient.connect('mongodb://127.0.0.1:27017', { useUnifiedTopology: true })
  .then((client) => {
    const db = client.db('BookingsManager');
    const bookingsCollection = db.collection('Bookings');
    const bookingsRouter = createRouter(bookingsCollection);
    app.use('/api/bookings', bookingsRouter);
  })
  .catch(console.err);

app.listen(9000, function () {
  console.log(`Listening on port ${ this.address().port }`);
});