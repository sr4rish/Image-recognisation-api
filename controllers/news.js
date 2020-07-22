const axios = require('axios');

NewsApi = 'https://deepapi-282117.el.r.appspot.com/predict/';

const handleApiCall = (req, response) => {
    //console.log((req.body))
    axios.post(NewsApi,{
        news: req.body.news
    })
    .then(res => {
        response.json(res.data)
        //console.log(response)
    })
    .catch(err => response.status(400).json("Unable to work with API"))
}

module.exports = {
    handleApiCall: handleApiCall
}