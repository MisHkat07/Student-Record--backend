const cors = require('cors');
const dotenv = require('dotenv');
const express = require('express');

const connectDB = require('./database.js');
const router = require('./routes/route.js');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

dotenv.config();

app.use('/', router);

const PORT = process.env.PORT || 8000;

connectDB();

app.listen(PORT, () => console.log(`🔷 Server has launched on PORT ${PORT}`));