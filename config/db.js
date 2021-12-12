const mongoose = require('mongoose')

const db = process.env.MONGO_URI ?? "mongodb+srv://alwaysmind1112:resortdagopakar37@alwaysmind.sgph6.mongodb.net/financialReporting?retryWrites=true&w=majority"
const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    console.log('MongoDB is connected')
  } catch (err) {
    console.error(err.message)
    process.exit(1)
  }
}

module.exports = connectDB
