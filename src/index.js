const path = require('path');
const express = require('express');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 3000;
const publicDirPath = path.join(__dirname, '../public/');

app.use(express.static(publicDirPath));

app.get('/getGameResults', async (req,res) => {
    console.log('hello from root');
    try {
        const response = await axios.get('https://bad-api-assignment.reaktor.com/rps/history');
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
