require('dotenv').config()
const express = require('express')
var cors = require('cors')
const connectDB = require('./config/db')

// Middleware
const authMiddleware = require('./middleware/auth')

const app = express()

// enable cors
app.use(cors())

// routes
const AuthRoute = require('./routers/AuthRoute')
const CategoryRoute = require('./routers/CategoryRoute')
const BudgetRoute = require('./routers/BudgetRoute')
const TransactionRoute = require('./routers/TransactionRoute')

// connect database
connectDB()

// initialize middleware
app.use(express.json({ extended: false }))

// ROUTES
// -- Test Route
app.get('/', (req, res) => res.send('Server up and running'))

// -- Authentication Route
app.use('/api/v1/auth', AuthRoute)

// --  Transactions Route
app.use('/api/v1/transactions', authMiddleware, TransactionRoute)

// -- Category Route
app.use('/api/v1/categories', authMiddleware,CategoryRoute)

// -- Budgets Route
app.use('/api/v1/budgets', authMiddleware, BudgetRoute)

// if endpoint not found route
app.use(function (req, res, next) {
  res.status(404).json({ error: 'Not Found', message: 'Ooops, URL not found'})
})

// setting up port
const PORT = process.env.PORT || 2003

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`)
})
