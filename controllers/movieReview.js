const axios = require('axios');

SentimentApi = 'https://mlnlpapis.herokuapp.com/predict/';

const handleApiCall = (req, response) => {
    //console.log(typeof(req.body.review))
    axios.post(SentimentApi,{
        review: req.body.review
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