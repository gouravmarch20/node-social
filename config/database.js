const mongoose = require('mongoose')
const connectWithDb = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(data => {
      console.log(`Mongodb connected with server: ${data.connection.host}`)
    })
}

module.exports = connectWithDb