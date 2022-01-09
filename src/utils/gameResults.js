const axios = require('axios');

const allGameResults = async (cursor="") => {
    let url = "";
    if(cursor === ""){
        url = "https://bad-api-assignment.reaktor.com/rps/history";
    }
    else {
        url = cursor;
    }

    try {
        const results = await axios.get(url);
        return results.data;
    } catch (error) {
        console.error(error);
    }
    
}

module.exports = {
    allGameResults
}