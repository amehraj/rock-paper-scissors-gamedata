const path = require('path');
const express = require('express');
const axios = require('axios');
const { allGameResults } = require('./utils/gameResults');

const app = express();
const port = process.env.PORT || 3000;
const publicDirPath = path.join(__dirname, '../public/');

app.use(express.static(publicDirPath));

app.get('/getGameResults', async (req,res) => {
    const results = await allGameResults();
    console.log(results);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
