const express = require('express');
const app = express();
app.use(express.json());
const config = require('./config/config');
const db = require('./config/db');
const connectDB = require('./config/db');
const authRouter = require('./routers/authRouter');
const mealRouter = require('./routers/mealRouter');
const userRouter = require('./routers/userRouter');
const bookingRouter = require('./routers/bookingRouter');
connectDB();

app.use('/api/users', userRouter);
app.use('/api/auth', authRouter);
app.use('/api/menu', mealRouter);
app.use('/api/bookings', bookingRouter);

const port = config.port || 5000;
app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})