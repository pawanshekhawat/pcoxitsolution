const { config } = require('dotenv');
config();
const express = require('express');
const cors = require('cors');
const AllRoutes = require('./routes/allRoutes');
const app = express();

// middlewares
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));
app.use(express.json());

app.use("/api", AllRoutes);

app.get('/', (req, res) => {
    res.send('server is working');
});

module.exports = app;