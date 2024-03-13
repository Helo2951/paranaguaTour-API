const express = require('express');
require('dotenv').config()
const cors = require('cors')

const app = express();

app.use(express.json());
app.use(cors());

const SERVER_PORT = process.env.PORT || 3000;

app.listen(SERVER_PORT, () => {
    console.log(`Server running on port ${SERVER_PORT}`);
});
